import express from 'express';
import articleRouter from './article';

const router = express.Router();
router.use('/articles', articleRouter);

export default router;
