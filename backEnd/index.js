const express = require("express");
const app = express();

const port = 8000;
const routerManager = require("./managers/routerManager");

app.use(routerManager);


app.listen(port);
