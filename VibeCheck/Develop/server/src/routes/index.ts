

//existing code, no changes made as of yet -ethan

import { Router } from 'express';
import apiRoutes from './api/index.js';
const router = Router();

router.use('/api', apiRoutes);

export default router;
