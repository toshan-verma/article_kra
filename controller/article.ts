import trade from "../lib/article";
import commonHelper from "../utility/commonHelper";
class Article {
    static async placeArticle(req: any, res: any) {
        try {
            let payload = req.body;
            // log payload

            const valResult = commonHelper.placeArticleValidation(payload);
            if (valResult.length) {
                throw new Error(valResult);
            };

            let result = await trade.placeArticle(payload);
            // log result 
            return res.status(200).send({
                success: true,
                message: result
            });
        } catch (e:any) {
            // log error
            return res.status(400).send({
                success: false,
                data: e.message
            });
        };
    };

    static async getOrder(req: any, res: any, next: any) {
        try {
            const { articleId } = req.params;
            let result = {};
            if (articleId) {
                result = await trade.getOrder(articleId);
            } else {
                result = await trade.getAllOrder();
            }

            return res.status(200).send({
                success: true,
                data: result
            });
        } catch (e:any) {
            // log error
            return res.status(400).send({
                success: false,
                data: e.message
            });
        };
    };

    static async removeOrder(req: any, res: any, next: any) {
        try {
            const { articleId } = req.params;
            let payload = req.body;

            let result = {};
            if ( articleId) {
                result = await trade.removeOrder( articleId);
            } else {
                throw new Error("Article-Id not found");
            };
            return res.status(200).send({
                success: true,
                data: result
            });
        } catch (e:any) {
            // log error
            return res.status(400).send({
                success: false,
                data: e.message
            });
        };
    };


};

export default Article;