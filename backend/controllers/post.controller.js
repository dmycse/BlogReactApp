import ImageKit from "imagekit";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

// In Espress v.5 you don't need to use try/catch cause 
// if an error is thrown it will be catched error automatically
// and the error will be catched by the error middleware handler

// get all posts
// export const getAllPosts = async (req, res) => {
//   const posts = await Post.find();
//   res.status(200).json(posts);
// };

// get all posts with infinity scroll
export const getAllPosts = async (req, res) => {

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;
  const skip = (page - 1) * limit;
  
  const posts = await Post
    .find()
    .sort({ createdAt: -1 })
    .populate("user", "username")
    .limit(limit)
    .skip(skip);

  const totalPosts = await Post.countDocuments();
  const hasMorePosts = page * limit < totalPosts;
 
  res.status(200).json({posts, hasMorePosts});
};

export const getPost = async (req, res) => {
  const post = await Post.findOne( {slug: req.params.slug} ).populate('user', 'username img');
  res.status(200).json(post);
  
};
export const createPost = async (req, res) => {
  const clerkUserId = req.auth.userId;
 
  if (!clerkUserId) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const user = await User.findOne({ clerkUserId });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  let slug = req.body.title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-').trim();

  let slugExists = await Post.findOne({ slug });

  if (slugExists) {
    slug = `${slug}-${Math.floor(Math.random() * 10000)}`;
  }

  const newPost = new Post({user: user._id, ...req.body, slug});

  const post = await newPost.save();
  res.status(201).json(post);
};

export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const user = await User.findOne({ clerkUserId });

  const deletedPost = await Post.findByIdAndDelete({
    _id: req.params.id, 
    user: user._id
  });

  if (!deletedPost) {
    return res.status(403).json({ message: "You can't delete this post" });
  }

  res.status(200).json('Post deleted');
};


const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

export const uploadAuth = async (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};