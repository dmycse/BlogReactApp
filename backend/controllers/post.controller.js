import Post from "../models/post.model.js";
import User from "../models/user.model.js";

// In Espress v.5 you don't need to use try/catch cause 
// if an error is thrown it will be catched error automatically
// and the error will be catched by the error middleware handler

export const getAllPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};

export const getPost = async (req, res) => {
  const post = await Post.findOne( {slug: req.params.slug} );
  res.status(200).json(post);
  
};

export const createPost = async (req, res) => {
  // const clerkUserId = req.auth.userId;
 
  // if (!clerkUserId) {
  //   return res.status(401).json({ message: "Not authenticated" });
  // }

  // const user = await User.findOne({ clerkUserId });

  // if (!user) {
  //   return res.status(404).json({ message: "User not found" });
  // }

  // const newPost = new Post({user: user._id, ...req.body});
  const newPost = new Post({...req.body});

  const post = await newPost.save();
  res.status(200).json(post);
};

export const deletePost = async (req, res) => {
  // const clerkUserId = req.auth.userId;

  // if (!clerkUserId) {
  //   return res.status(401).json({ message: "Not authenticated" });
  // }

  // const user = await User.findOne({ clerkUserId });

  const deletedPost = await Post.findByIdAndDelete({
    _id: req.params.id, 
    // user: user._id
  });


  if (!deletedPost) {
    return res.status(403).json({ message: "You can't delete this post" });
  }

  res.status(200).json('Post deleted');
};