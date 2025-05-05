import mongoose from "../config/db";
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    name: { type: String, required: true },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

const tagModel = mongoose.model("Tag", tagSchema);
export default tagModel;