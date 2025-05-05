import express from 'express';
import tagRouter from './tag';

const router = express.Router();
router.use('/tags', tagRouter);

export default router;
