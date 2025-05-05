import _ from "lodash";
import categoryModel from "../models/category";
import mongoose from "../config/db";
import log from '../utils/log';
class categoryLib {
    static async getAllCategory() {
        try {

            console.log("Fetching all category");
            // Fetch all active categories
            const result = await categoryModel.find({ isActive: true }, null, { sort: { createdAt: 1 }, lean: true });

            if (result.length === 0) {
                throw new Error("No category found");
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

export default categoryLib;