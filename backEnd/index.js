const express = require("express");
const mongoose = require('mongoose');
const dotenv = require("dotenv")
const bodyparser = require("body-parser")

const app = express();

const port = 8000;
const routerManager = require("./managers/routerManager");

dotenv.config()

//controllers
const userRoutes = require('./managers/userController');



app.use(bodyparser.json())
app.use(routerManager);
app.use("/api/user/",userRoutes)


app.listen(port);
