import mongoose from "../config/db";
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: { type: String, required: true },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

const categoryModel = mongoose.model("Category", categorySchema);
export default categoryModel;