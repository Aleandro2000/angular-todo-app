const router = require("express").Router();
const { createUser, editUser, getAllUsers, deleteUser } = require("../services").usersService;

router.get("/read", (req, res) => {
    getAllUsers(req, res)
});

router.post("/create", (req, res) => {
    req.body ? createUser(req, res) : res.send({ status: 400, message: "Data may not be empty!" });
});

router.post("/edit", (req, res) => {
    req.body ? editUser(req, res) : res.send({ status: 400, message: "Data may not be empty!" });
});

router.post("/delete", (req, res) => {
    req.body ? deleteUser(req, res) : res.send({ status: 400, message: "Data may not be empty!" });
});

module.exports = router;