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
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  
  const query = {};
  
  const {category, author, featured} = req.query;
  const searchQuery = req.query.search;
  const sortQuery = req.query.sort;


  if (category) {
    query.category = category;
  }
  
  if (searchQuery) {
    query.title = { $regex: searchQuery, $options: "i" };
  }

  if (author) {
    const user = await User.findOne({username: author}).select('_id');
    
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    query.user = user._id; 
  }

  if (featured) {
    query.isFeatured = true;
  }
  
  let sortObj = {createdAt: -1};

  if (sortQuery) {
    switch (sortQuery) {
      case 'newest':
        sortObj = { createdAt: -1 };
        break;
      case 'oldest':
        sortObj = { createdAt: 1 };
        break;
      case 'popular':
        sortObj = { visits: -1 };
        break;
      case 'trending':
        sortObj = { views: -1 };
        query.createdAt = { $gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000) }; 
        break;
      default:  
        break;
    }
  }

  const posts = await Post
    .find(query)
    .populate("user", "username")
    .sort(sortObj)
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

export const featurePost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  const postId = req.body.postId;
 
  if (!clerkUserId) {
    return res.status(401).json("Not authenticated!");
  }

  const role = req.auth.sessionClaims?.metadata?.role || "user";

  if (role !== "admin") {
    return res.status(403).json("You cannot feature posts!");
  }

  const post = await Post.findById(postId);

  if (!post) {
    return res.status(404).json("Post not found!");
  }

  const isFeatured = post.isFeatured;

  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    {
      isFeatured: !isFeatured,
    },
    { new: true }
  );

  res.status(200).json(updatedPost);
};

export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const role = req.auth.sessionClaims?.metadata?.role || 'user';

  if (role === 'admin') {
    await Post.findByIdAndDelete({_id: req.params.id});
    await User.updateMany({savedPosts: req.params.id}, {$pull: {savedPosts: req.params.id}});
    return res.status(200).json('Post deleted');
  }

  const user = await User.findOne({ clerkUserId });

  const deletedPost = await Post.findByIdAndDelete({
    _id: req.params.id, 
    user: user._id
  });

  if (!deletedPost) {
    return res.status(403).json({ message: "You can't delete this post" });
  }

  await User.findByIdAndUpdate(user._id, {$pull: { savedPosts: req.params.id }});

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