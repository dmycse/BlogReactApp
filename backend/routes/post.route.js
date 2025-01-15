import { Router } from "express";
import { getAllPosts, getPost, createPost, deletePost, uploadAuth } from "../controllers/post.controller.js";


const router = Router();

router.get("/upload-auth", uploadAuth);

router.get("/", getAllPosts);
router.get("/:slug", getPost);
router.post("/", createPost);
router.delete("/:id", deletePost);


export default router;