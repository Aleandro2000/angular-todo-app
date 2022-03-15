const { users, tasks, posts } = require("../models");

module.exports = {
    createUser: (req, res) => {
        users.findOne({ email: req.body.email }, (user, err) => {
            if (err)
                res.send({ status: 400, message: err.message });
            else if (!user) {
                const user = new users({
                    name: req.body.name,
                    email: req.body.email,
                    street: req.body.street,
                    zip: req.body.zip,
                });
                user.save();
                res.send({ status: 200, message: "User created succcessfully!" });
            }
            else
                res.send({ status: 400, message: "User already exists!" });
        });
    },
    editUser: (req, res) => {
        users.findByIdAndUpdate(req.body._id, {
            name: req.body.name,
            email: req.body.email,
            street: req.body.street,
            zip: req.body.zip
        }, (user, err) => {
            err ? res.send({ status: 400, message: err.message }) : res.send({ status: 400, message: "User updated successfully!" });
        });
    },
    getAllUsers: (req, res) => {
        users.find({}, (users, err) => {
            err ? res.send({ status: 400, message: err.message }) : res.send({ status: 200, result: users });
        })
    },
    deleteUser: (req, res) => {
        users.findByIdAndDelete(req.body._id, (user, err) => {
            tasks.deleteMany({ _userId: req.body._id }, (user, err) => {});
            posts.deleteMany({ _userId: req.body._id }, (user, err) => {});
            err ? res.send({ status: 400, message: err.message }) : res.send({ status: 400, message: "User deleted successfully!" });
        })
    }
};