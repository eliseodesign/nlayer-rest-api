const db = require("../database/database")
const md5 = require("md5")

function deleteUser (id) {
  return new Promise( (res,rej) =>
    db.run(
      'DELETE FROM User WHERE Id = ?',
      id,
      function (err, result) {
        err
          ? rej(err)
          : res({"message":"deleted", changes: this.changes})
    })
  )
}


const updateUser = (req) => {
  const data = {
    Name: req.body.Name,
    Email: req.body.Email,
    Password : md5(req.body.Password),
    Id_typeUser:req.body.Id_typeUse
  }
  return new Promise( (res,rej) =>
    db.run(
      `UPDATE User set 
        Name = COALESCE(?,Name), 
        Email = COALESCE(?,Email), 
        Password = COALESCE(?,Password) ,
        Id_typeUser = COALESCE(?,Id_typeUser) ,
        WHERE Id = ?`,
      [data.Name, data.Email, data.Password, data.Id_typeUser, req.params.Id],
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
const createUser = (req) => {
  
  const data = {
      Name: req.body.Name,
      Email: req.body.Email,
      Password : md5(req.body.Password),
      Id_typeUser:req.body.Id_typeUser
  }
  var sql ='INSERT INTO User (Name, Email, Password, Id_typeUser) VALUES (?,?,?,?)'
  var params =[data.Name, data.Email, data.Password, data.Id_typeUser]

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
const getUser = (id) => {
  var sql = "SELECT * FROM User WHERE Id = ?"
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
const getAllUsers = () => {
  const sql = "SELECT * FROM User";
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
  deleteUser,
  updateUser,
  createUser,
  getUser,
  getAllUsers
}