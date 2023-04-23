// Crear aplicación express 
const express = require("express")
// var bodyParser = require("body-parser");


const v1UserRouter = require("./v1/routes/user.routes")

const app = express() 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/v1/users", v1UserRouter);


module.exports = app;