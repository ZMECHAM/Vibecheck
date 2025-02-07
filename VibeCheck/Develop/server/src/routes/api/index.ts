import { Router } from 'express';
import {likesongsRouter} from './likesongs-route.js';

const router = Router();

router.use('/favorites', likesongsRouter);

export default router;
