const service = require("../services/typeUser.services")

const getAllR = (req, res) => {
  service.getAllR()
    .then( resul => res.json(resul))
    .catch( e => res.status(404).json(e))
}

const getR = (req,res) => {
  service.getR(req.params.id)
    .then( resul => res.json(resul))
    .catch( e => res.status(404).json(e))
}

const createR = (req,res) => {
  const errors=[]
  if (!req.body.Name){
    errors.push("No password specified");
}

  if (errors.length){
      res.status(400).json({"error":errors.join(",")});
      return;
  }
  service.createR(req)
    .then( resul => res.json(resul))
    .catch( e => res.status(404).json(e))

}

const updateR = (req,res) => {
  service.updateR(req)
    .then( resul => res.json(resul))
    .catch( e => res.status(400).json(e))
}

const deleteR = (req,res) => {
  service.deleteR(req.params.id)
    .then( resul => res.json(resul))
    .catch( e => res.status(404).json(e))
    
}

module.exports = {
  deleteR,
  updateR,
  createR,
  getR,
  getAllR
}