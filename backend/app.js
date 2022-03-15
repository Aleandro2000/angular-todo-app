const app=require("express")();
const bodyparser=require("body-parser");
const mongoose=require('mongoose');
const cors=require("cors");
require('dotenv').config();

mongoose.connect("mongodb://"+process.env.DB_HOST+"/"+process.env.DB_NAME, {useNewUrlParser: true, useUnifiedTopology: true});

const { usersController, tasksController, postsController } = require("./controllers");

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use("/user", usersController);
app.use("/task", tasksController);
app.use("/post", postsController);

app.listen(process.env.PORT || 8081);