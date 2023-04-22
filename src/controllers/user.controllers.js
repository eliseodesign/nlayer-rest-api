
const getAllUsers = (req, res) => {
  res.send("get all user")
}

const getUser = (req,res) => {
    res.send("get user");
}

const createUser = (req,res) => {
    res.send("post user");
}

const updateUser = (req,res) => {
    res.send("patch user");
}

const deleteUser = (req,res) => {
    res.send("delete user");
}

module.exports = {
  deleteUser,
  updateUser,
  createUser,
  getUser,
  getAllUsers
}