const mongoose = require("mongoose");

const usersModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    street: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "tasks"
    }],
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts"
    }]

});

module.exports = mongoose.model("users", usersModel);