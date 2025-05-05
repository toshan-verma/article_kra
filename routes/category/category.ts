import express from 'express';
const router = express.Router({})
import category from '../../controller/category';

router.get('/', category.getCategory);

export default router;