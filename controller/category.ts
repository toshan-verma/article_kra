// category

import category from "../lib/category";
import commonHelper from "../utility/commonHelper";
class categoryC {
    static async getCategory(req: any, res: any, next: any) {
        try {
            const { articleId } = req.params;
            let results = {};
            results = await category.getAllCategory();

            return res.status(200).send({
                success: true,
                data: results
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

export default categoryC;