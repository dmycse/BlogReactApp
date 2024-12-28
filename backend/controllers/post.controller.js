import Post from "../models/post.model.js";

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
  const newPost = new Post({...req.body});

  const post = await newPost.save();
  res.status(200).json(post);
};

export const deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  res.status(200).json('Post deleted');
};