import mongoose from "../config/db";
const Schema = mongoose.Schema;

const articleSchema = new Schema(
    {
        title: { type: String, required: true },
        subTitle: { type: String, required: true },
        property: { type: String, required: true },
        description: { type: String, required: true },
        article_image: { type: String, required: true },
        article_type: { type: String, required: true },
        category_id: { type: Schema.Types.ObjectId, ref: "Category" },
        mediaUrl: { type: String, required: true },
        hyperlink: { type: String, required: true },
        tags: [
            {
                type: Schema.Types.ObjectId,
                ref: "Tag",
            },
        ],
        author_id: { type: Schema.Types.ObjectId, ref: "Author" },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);

const articleModel = mongoose.model("Article", articleSchema);
export default articleModel;