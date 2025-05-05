import express from 'express';
import categoryRouter from './category';

const router = express.Router();
router.use('/categories', categoryRouter);

export default router;
