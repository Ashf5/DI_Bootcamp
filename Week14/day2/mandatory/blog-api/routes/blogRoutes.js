
import Router from 'express';
import { addSinglePost, deleteSinglePost, getRoute, getSinglePost,   updateSinglePost } from '../controllers/blog.js';

export const router = Router();

router.get('/posts', getRoute);

router.get('/posts/:id', getSinglePost);

router.post('/posts', addSinglePost);

router.put('/posts/:id', updateSinglePost);

router.delete('/posts/:id', deleteSinglePost);