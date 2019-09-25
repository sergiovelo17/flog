const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    topic: {
      type: String,
      required: true
    },
    owner: {
      type: { type: Schema.Types.ObjectId, ref: "User" },
    },
    description: {
        type: String,
      },
    body: {
      type: String,
      required: true
    },
},
  {
    timestamps: true
  }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
