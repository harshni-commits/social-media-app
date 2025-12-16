const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    user: String,
    content: String,
    likes: { type: Number, default: 0 }
});

module.exports = mongoose.model("Post", PostSchema);
