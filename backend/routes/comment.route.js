import { Router } from "express";
import { getPostsComments, createPostComment, removePostComment } from '../controllers/comment.controller.js';

const router = Router();

router.get('/:postId', getPostsComments);
router.post('/:postId', createPostComment);
router.delete('/:id', removePostComment);

export default router;