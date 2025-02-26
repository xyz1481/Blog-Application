const { Schema, model } = require("mongoose");

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    coverImageURL: {
      type: String,
    },
  },
  { timestamps: true }
);

const blog = model("blog", blogSchema);

module.exports = blog;
