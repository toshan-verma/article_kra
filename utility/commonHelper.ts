class CommonHelper {
    static placeArticleValidation(payload: any) {
        try {
            let msg = "";

            if (!payload.title) msg = msg + "Title not found.";
            if (!payload.subTitle) msg = msg + " SubTitle not found.";
            if (!payload.property) msg = msg + " Property not found.";
            if (!payload.description) msg = msg + " Description not found.";
            if (!payload.article_image) msg = msg + " Article image not found.";
            if (!payload.article_type) msg = msg + " Article type not found.";
            if (!payload.mediaUrl) msg = msg + " Media URL not found.";
            if (!payload.hyperlink) msg = msg + " Hyperlink not found.";
            if (!payload.category_id) msg = msg + " Category ID not found.";
            if (!payload.tags) msg = msg + " Tags not found.";
            if (!payload.author_id) msg = msg + " Author ID not found.";
            
            return msg;
        } catch (e:any) {
            // log error
            throw new Error(e);
        };
    };
};

export default CommonHelper;