import express from 'express';
import articleRouter from './article/index';
require('../models/registerAllModels');

const router = express.Router();

router.use('/:api_version/api/v1', articleRouter);

export default router;
