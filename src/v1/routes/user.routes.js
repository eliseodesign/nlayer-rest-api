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

  .get("/:UserId", getUser)

  .post("/:UserId", createUser)

  .patch("/:UserId", updateUser)

  .delete("/:UserId", deleteUser)

module.exports = router;