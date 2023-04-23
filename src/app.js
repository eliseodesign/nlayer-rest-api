// Crear aplicación express 
const express = require("express")
var bodyParser = require("body-parser");


const v1UserRouter = require("./v1/routes/user.routes")

const app = express() 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/v1", v1UserRouter);


module.exports = app;