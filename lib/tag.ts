import _ from "lodash";
import tagModel from "../models/tag";
import mongoose from "../config/db";
import log from '../utils/log';
class TagLib {
    static async getAllTag() {
        try {

            console.log("Fetching all active tag");
            // Fetch all active tags
            const result = await tagModel.find({ isActive: true }, null, { sort: { createdAt: 1 }, lean: true });

            if (result.length === 0) {
                throw new Error("No tag found");
            }

            // Map the result to the desired format
            const formattedResult = result.map((item: any) => ({
                _id: item._id,
                name: item.name,
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

};

export default TagLib;