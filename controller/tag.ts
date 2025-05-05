import tag from "../lib/tag";

class TagC {
    static async getTag(req: any, res: any, next: any) {
        try {
            const { articleId } = req.params;
            let results = {};
            results = await tag.getAllTag();

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

export default TagC;