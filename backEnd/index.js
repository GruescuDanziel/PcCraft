//Packets
const express = require("express");
const mongoose = require('mongoose');
const dotenv = require("dotenv")
const bodyparser = require("body-parser")
const cors = require('cors')

//configure .env
dotenv.config()

//App Express
const app = express();
const port = 8000;

//Managers and Controllers
const routerManager = require("./managers/routerManager");
const userRoutes = require('./managers/userController');

//Config stuff
app.use(cors())
app.use(bodyparser.json())
app.use(routerManager);
app.use("/api/user/",userRoutes)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(port);
