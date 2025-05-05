import express from 'express';
import articleRouter from './article/index';
import tagRouter from './tag/index';
import categoryRouter from './category/index';

const router = express.Router();

// router.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
//     const apiVersion = req.params.api_version;
//     console.log(`API Version: ${apiVersion}`);
//     next();
// });

// router.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// router.use((req, res, next) => {
//     console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
//     next();
// });

router.use('/:api_version/api/v1', articleRouter);
router.use('/:api_version/api/v1', tagRouter);
router.use('/:api_version/api/v1', categoryRouter);


export default router;
