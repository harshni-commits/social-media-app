const router = require("express").Router();
const Post = require("../models/Post");

router.post("/", async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    res.json("Post Created");
});

router.get("/", async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

router.put("/like/:id", async (req, res) => {
    await Post.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } });
    res.json("Liked");
});

module.exports = router;
