import Comment from "../models/comment.model.js";
import User from "../models/user.model.js";

export const getPostsComments = async (req, res) => {

  const comments = await Comment
    .find({post: req.params.postId})
    .populate('user', 'username img')
    .sort({createdAt: -1})
  
  res.status(200).json(comments);
};


export const createPostComment = async (req, res) => {
  const clerkUserId = req.auth.userId;
 
  if (!clerkUserId) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const user = await User.findOne({ clerkUserId });
  
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const newComment = new Comment({
    user: user._id,
    post: req.params.postId,
    ...req.body
  });
  
  const comment = await newComment.save();
 
  res.status(201).json(comment);
};

export const removePostComment = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const role = req.auth.sessionClaims?.metadata?.role || 'user';
  
  if (role === 'admin') {
    await Comment.findByIdAndDelete(req.params.id);
    return res.status(200).json('Comment deleted');
  }

  const user = await User.findOne({ clerkUserId });

  const deletedComment = await Comment.findByIdAndDelete({
    _id: req.params.id, 
    user: user._id
  });

  if (!deletedComment) {
    return res.status(403).json({ message: "You can't delete this comment" });
  }
  
  res.status(200).json('Comment deleted');
};