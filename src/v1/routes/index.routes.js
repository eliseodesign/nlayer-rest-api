const Router = require("express").Router();

Router
  .route("/")
  .get((req,res)=>{
    res.send(`<h1> Hello desde ${req.baseUrl} </h1>`)
  })



module.exports = Router