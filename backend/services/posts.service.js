const ObjectId = require('mongodb').ObjectId;
const { posts } = require("../models");

module.exports = {
    createPost: (req, res) => {
        posts.findOne({ title: req.body.title }, (err, post) => {
            if (err)
                res.send({ status: 400, message: err.message });
            else if (!post) {
                const post = new posts({
                    _userId: ObjectId(req.body._userId),
                    title: req.body.title,
                    text: req.body.text
                });
                post.save();
                res.send({ status: 200, message: "Post created succcessfully!" });
            }
            else
                res.send({ status: 400, message: "User already exists!" });
        });
    },
    getAllPosts: (req, res) => {
        posts.find({ _userId: ObjectId(req.body.id) }, (err, posts) => {
            err ? res.send({ status: 400, message: err.message }) : res.send({ status: 200, result: posts });
        });
    }
};