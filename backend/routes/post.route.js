import { Router } from "express";
import { 
  getAllPosts, 
  getPost, 
  createPost, 
  featurePost, 
  deletePost, 
  uploadAuth 
} from "../controllers/post.controller.js";
import countVisits from "../middlewares/countVisits.js";


const router = Router();

router.get("/upload-auth", uploadAuth);

router.get("/", getAllPosts);
router.get("/:slug", countVisits, getPost);
router.post("/", createPost);
router.patch("/feature", featurePost);
router.delete("/:id", deletePost);


export default router;