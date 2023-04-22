// Crear aplicación express 
const express = require("express") 
const v1UserRouter = require("./v1/routes/user.routes")

const app = express() 


app.use("/v1", v1UserRouter);


module.exports = app;