const mongoose = require("mongoose");

const psotsModel = new mongoose.Schema({
    _userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("posts", psotsModel);