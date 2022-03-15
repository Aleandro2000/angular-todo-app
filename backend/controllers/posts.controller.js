const router = require("express").Router();
const { createPost, getAllPosts } = require("../services").postService;

router.get("/read", (req, res) => {
    getAllPosts(req, res);
});

router.post("/create", (req, res) => {
    req.body ? createPost(req, res) : res.send({ status: 400, message: "Data may not be empty!" });
});

module.exports = router;