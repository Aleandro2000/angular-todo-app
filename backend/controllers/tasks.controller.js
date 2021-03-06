const router = require("express").Router();
const { createTask, markTask, getAllTasks } = require("../services").tasksService;

router.post("/read", (req, res) => {
    getAllTasks(req, res);
});

router.post("/create", (req, res) => {
    req.body ? createTask(req, res) : res.send({ status: 400, message: "Data may not be empty!" });
});

router.post("/mark", (req, res) => {
    req.body ? markTask(req, res) : res.send({ status: 400, message: "Data may not be empty!" });
});

module.exports = router;