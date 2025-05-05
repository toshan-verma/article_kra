import express from 'express';
const router = express.Router({})
import tag from '../../controller/tag';

router.get('/', tag.getTag);

export default router;