const express = require("express");
const router = express.Router();

const { 
    createUser, 
      getAllUsers, 
      deleteUser, 
      getUser, 
      updateUser 
    } = require("../../controllers/user.controllers")


router
  .get("/", getAllUsers)

  .get("/:id", getUser)

  .post("/", createUser)

  .patch("/:id", updateUser)

  .delete("/:id", deleteUser)

module.exports = router;