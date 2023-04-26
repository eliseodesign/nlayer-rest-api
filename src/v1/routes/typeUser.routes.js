const express = require("express");
const router = express.Router();

const { 
    createR, 
    getAllR, 
    deleteR, 
    getR, 
    updateR 
  } = require("../../controllers/typeUser.controllers")


router
  .get("/", getAllR)

  .get("/:id", getR)

  .post("/", createR)

  .patch("/:id", updateR)

  .delete("/:id", deleteR)

module.exports = router;