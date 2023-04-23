const { 
  createUser, 
    getAllUsers, 
    deleteUser, 
    getUser, 
    updateUser 
  } = require("../services/user.services")

const getAllUsers = (req, res) => {
  const users = getAllUsers();
  res.send("get all user")
}

const getUser = (req,res) => {
  const user = getUser(req.params.userId)
  res.send("get user");
}

const createUser = (req,res) => {
  const createdUser = createUser(req.params.userId)
  res.send("post user");
}

const updateUser = (req,res) => {
  const update = updateUser(req.params.userId)
  res.send("patch user");
}

const deleteUser = (req,res) => {
  deleteUser(req.params.userId)
  res.send("delete user");
}

module.exports = {
  deleteUser,
  updateUser,
  createUser,
  getUser,
  getAllUsers
}