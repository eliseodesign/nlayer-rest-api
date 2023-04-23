const controller = require("../services/user.services")

const getAllUsers = (req, res) => {
  const users = controller.getAllUsers();
  res.send("get all user")
}

const getUser = (req,res) => {
  const user = controller.getUser(req.params.userId)
  res.send("get user");
}

const createUser = (req,res) => {
  const createdUser = controller.createUser(req.params.userId)
  res.send("post user");
}

const updateUser = (req,res) => {
  const update = controller.updateUser(req.params.userId)
  res.send("patch user");
}

const deleteUser = (req,res) => {
  controller.deleteUser(req.params.userId)
  res.send("delete user");
}

module.exports = {
  deleteUser,
  updateUser,
  createUser,
  getUser,
  getAllUsers
}