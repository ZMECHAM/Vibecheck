import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { songRouter } from './songs-routes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/songs', songRouter);

export  { router as apiRouter }; 
