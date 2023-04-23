const service = require("../services/user.services")

const getAllUsers = (req, res) => {
  service.getAllUsers(res)
    .then( rows => res.json(rows))
    .catch( e => res.status(404).json(e))
}

const getUser = (req,res) => {
  service.getUser(req.params.id)
    .then( rows => res.json(rows))
    .catch( e => res.status(404).json(e))
}

const createUser = (req,res) => {
  const errors=[]
  if (!req.body.name){
    errors.push("No password specified");
}
  if (!req.body.password){
      errors.push("No password specified");
  }
  if (!req.body.email){
      errors.push("No email specified");
  }
  if (errors.length){
      res.status(400).json({"error":errors.join(",")});
      return;
  }
  service.createUser(req)
    .then( user => res.json(user))
    .catch( e => res.status(404).json(e))

}

const updateUser = (req,res) => {
  const update = service.updateUser(req.params.userId)
  res.send("patch user");
}

const deleteUser = (req,res) => {
  service.deleteUser(req.params.userId)
  res.send("delete user");
}

module.exports = {
  deleteUser,
  updateUser,
  createUser,
  getUser,
  getAllUsers
}