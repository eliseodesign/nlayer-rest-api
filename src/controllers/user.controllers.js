const service = require("../services/user.services")

const getAllUsers = (req, res) => {
  service.getAllUsers()
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
  if (!req.body.Name){
    errors.push("No password specified");
}
  if (!req.body.Password){
      errors.push("No password specified");
  }
  if (!req.body.Email){
      errors.push("No email specified");
  }
  if (!req.body.Id_typeUser){
    errors.push("No Id_typeUser specified");
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