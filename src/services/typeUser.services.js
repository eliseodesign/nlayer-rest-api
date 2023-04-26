const db = require("../database/database")
const md5 = require("md5")

function deleteR(id) {
  return new Promise( (res,rej) =>
    db.run(
      'DELETE FROM TypeUser WHERE Id = ?',
      id,
      function (err, result) {
        err
          ? rej(err)
          : res({"message":"deleted", changes: this.changes})
    })
  )
}


const updateR = (req) => {
  return new Promise( (res,rej) =>
    db.run(
      `UPDATE TypeUser set 
        Name = COALESCE(?,Name)
        WHERE Id = ?`,
      [req.body.Name, req.body.Id],
      function (err, result) {

        err
          ? rej(err)
          : res({
            message: "success",
            data: data,
            changes: this.changes
        })
    })  
  )
}
//POST
const createR = (req) => {
  
  var sql ='INSERT INTO TypeUser (Name) VALUES (?)'
  var params =[req.body.Name]

  return new Promise( (res,rej) => 
    db.run(sql, params,function(err, result) {
      err 
        ? rej(err)
        : res({
          "message": "success",
          "data": data,
          "id" : this.lastID
        })
      }
    )
  )
}
//GET
const getR = (id) => {
  var sql = "SELECT * FROM TypeUser WHERE Id = ?"
    var params = [id]
    
    return new Promise((res, rej)=> 
      db.get(sql, params, (err, row) => {
        err
          ? rej(err)
          : res(row)
        
      })
    )
}

//GET ALL
const getAllR = () => {
  const sql = "SELECT * FROM TypeUser";
  const params = [];

  return new Promise((res, rej) =>
    db.all(sql, params, (err, rows) =>
      err 
        ? rej(err) 
        : res(rows)
    )
  );
};



module.exports = {
  deleteR,
  updateR,
  createR,
  getR,
  getAllR
}