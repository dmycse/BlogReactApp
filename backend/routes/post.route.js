import { Router } from "express";
import { getAllPosts, getPost, createPost, deletePost } from "../controllers/post.controller.js";


const router = Router();

router.get("/", getAllPosts);
router.get("/:slug", getPost);

router.post("/", createPost);

router.delete("/:id", deletePost);


export default router;