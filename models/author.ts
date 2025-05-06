import mongoose from "../config/db";
const Schema = mongoose.Schema;

const authorSchema = new Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);

const authorModel = mongoose.model("Author", authorSchema);
export default authorModel;