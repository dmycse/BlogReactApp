import { Router } from "express";
import { getUserSavedPosts, savePost} from '../controllers/user.contoller.js';

const router = Router();

router.get('/saved', getUserSavedPosts);
router.patch('/save', savePost);

export default router;