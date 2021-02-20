//Packets
const express = require("express");
const mongoose = require('mongoose');
const dotenv = require("dotenv")
const bodyparser = require("body-parser")

//App Express
const app = express();
const port = 8000;

//Managers and Controllers 
const routerManager = require("./managers/routerManager");
const userRoutes = require('./managers/userController');

//Config stuff
dotenv.config()
app.use(bodyparser.json())
app.use(routerManager);
app.use("/api/user/",userRoutes)


app.listen(port);
