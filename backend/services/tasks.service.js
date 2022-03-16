const { tasks } = require("../models");

module.exports = {
    createTask: (req, res) => {
        tasks.findOne({ title: req.body.title }, (err, task) => {
            if (err)
                res.send({ status: 400, message: err.message });
            else if (!task) {
                const task = new tasks({
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
        tasks.findByIdAndUpdate(req.body._id, { completed: true }, (err, task) => {
            err ? res.send({ status: 400, message: err.message }) : res.send({ status: 200, message: "Task marked!" });
        });
    },
    getAllTasks: (req, res) => {
        tasks.findById(req.body._id, (err, tasks) => {
            err ? res.send({ status: 400, message: err.message }) : res.send({ status: 200, result: tasks });
        });
    }
};