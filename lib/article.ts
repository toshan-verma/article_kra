import _ from "lodash";
import articleModel from "../models/article";
import mongoose from "../config/db";
import log from '../utils/log';
import categoryModel from "../models/category";
class ArticleLib {
    static async placeArticle(payload: any) {
        try {
            // Log the payload
            console.log("Placing article:", payload);
            const insertArticle: any = {
                title: payload.title,
                subTitle: payload.subTitle,
                property: payload.property,
                description: payload.description,
                article_image: payload.article_image,
                article_type: payload.article_type,
                mediaUrl: payload.mediaUrl,
                hyperlink: payload.hyperlink,
                category_id: payload.category_id,
                tags: payload.tags,
                author_id: payload.author_id,
            };

            // Insert the article into the database
            await articleModel.insertMany([insertArticle]);
            return "Article successfully created";
        } catch (e) {
            // Log and rethrow the error
            console.error(e);
            throw e;
        }
    }

    static async getAllOrder() {
        try {
            console.log("Fetching all active articles");
            // Fetch all active articles
            const result = await articleModel.find({ isActive: true }, null, { sort: { createdAt: 1 }, lean: true });

            if (result.length === 0) {
                throw new Error("No article found");
            }

            // Map the result to the desired format
            const formattedResult = result.map((item: any) => ({
                _id: item._id,
                title: item.title,
                subTitle: item.subTitle,
                description: item.description,
                article_image: item.article_image,
                tags: item.tags,
                createdAt: item.createdAt,
                updatedAt: item.updatedAt,
                isActive: item.isActive,
            }));

            return formattedResult;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    static async getOrder(articleId: string) {
        try {
            console.log("Fetching article with ID:", articleId);
            // Fetch the article with populated author and category details
            const result = await articleModel
                .find({ _id: mongoose.Types.ObjectId(articleId), isActive: true }, null, { sort: { createdAt: 1 }, lean: true })
                .populate('author_id', 'first_name last_name')
                .populate('category_id', 'name');

            if (result.length === 0) {
                throw new Error("No article found");
            }

            // Map the result to the desired format
            const formattedResult = result.map((item: any) => ({
                _id: item._id,
                title: item.title,
                subTitle: item.subTitle,
                property: item.property,
                description: item.description,
                article_image: item.article_image,
                article_type: item.article_type,
                mediaUrl: item.mediaUrl,
                hyperlink: item.hyperlink,
                category_id: item.category_id,
                tags: item.tags,
                author_id: item.author_id,
                createdAt: item.createdAt,
                updatedAt: item.updatedAt,
                isActive: item.isActive,
            }));

            return formattedResult[0];
        } catch (e) {
            // Log and rethrow the error
            console.error(e);
            throw e;
        }
    }

    static async removeOrder(articleId: string) {
        try {
            // Mark the article as inactive and deleted
            await articleModel.updateOne(
                { _id: articleId },
                { $set: { isActive: false, _Deleted: true } }
            );

            return "Article successfully removed";
        } catch (e) {
            // Log and rethrow the error
            console.error(e);
            throw e;
        }
    }

};

export default ArticleLib;