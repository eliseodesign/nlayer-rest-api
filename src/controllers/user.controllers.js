const service = require("../services/user.services")

const getAllUsers = (req, res) => {
  service.getAllUsers(res)
    .then( resul => res.json(resul))
    .catch( e => res.status(404).json(e))
}

const getUser = (req,res) => {
  service.getUser(req.params.id)
    .then( resul => res.json(resul))
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
    .then( resul => res.json(resul))
    .catch( e => res.status(404).json(e))

}

const updateUser = (req,res) => {
  service.updateUser(req)
    .then( resul => res.json(resul))
    .catch( e => res.status(400).json(e))
}

const deleteUser = (req,res) => {
  service.deleteUser(req.params.id)
    .then( resul => res.json(resul))
    .catch( e => res.status(404).json(e))
    
}

module.exports = {
  deleteUser,
  updateUser,
  createUser,
  getUser,
  getAllUsers
}