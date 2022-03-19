const ObjectId = require('mongodb').ObjectId;
const { tasks } = require("../models");

module.exports = {
    createTask: (req, res) => {
        tasks.findOne({ title: req.body.title }, (err, task) => {
            if (err)
                res.send({ status: 400, message: err.message });
            else if (!task) {
                const task = new tasks({
                    _userId: ObjectId(req.body._userId),
                    title: req.body.title
                });
                task.save();
                res.send({ status: 200, message: "User created succcessfully!" });
            }
            else
                res.send({ status: 400, message: "User already exists!" });
        });
    },
    markTask: (req, res) => {
        tasks.findOneAndUpdate({_id: ObjectId(req.body.id)}, { completed: true }, (err, task) => {
            err ? res.send({ status: 400, message: err.message }) : res.send({ status: 200, message: "Task marked!" });
        });
    },
    getAllTasks: (req, res) => {
        tasks.find({_userId: ObjectId(req.body.id)}, (err, tasks) => {
            err ? res.send({ status: 400, message: err.message }) : res.send({ status: 200, result: tasks });
        });
    }
};