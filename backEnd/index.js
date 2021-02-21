//Packets
const express = require("express");
const mongoose = require('mongoose');
const dotenv = require("dotenv")
const bodyparser = require("body-parser")

//configure .env
dotenv.config()

//App Express
const app = express();
const port = 8000;

//Managers and Controllers
const routerManager = require("./managers/routerManager");
const userRoutes = require('./managers/userController');
const productRoutes = require('./managers/productManager');

//Config stuff

app.use(bodyparser.json())
app.use(routerManager);
app.use("/api/user/",userRoutes)
app.use("/api/product/", productRoutes)


app.listen(port);
