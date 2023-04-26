const db = require("../database/database")

//DELETE
const deleteR = (id) => {
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

//UPDATE
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
            changes: this.changes
        })
    })  
  )
}
//POST
const createR = (req) => {
  
  var sql ='INSERT INTO TypeUser (Name) VALUES (?)'

  return new Promise( (res,rej) => 
    db.run(sql, [req.body.Name],function(err, result) {
      err 
        ? rej(err)
        : res({
          "message": "success",
          "data": result,
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