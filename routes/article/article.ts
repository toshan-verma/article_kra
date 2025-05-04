import express from 'express';
const router = express.Router({})
import article from '../../controller/article';

router.post('/', article.placeArticle);
router.get('/', article.getOrder);
router.get('/:articleId', article.getOrder);
router.delete('/:articleId', article.removeOrder);

export default router;