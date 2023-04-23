const db = require("../database/database")
const md5 = require("md5")

const deleteUser = (id) => {
  return new Promise( (res,rej) =>
    db.run(
      'DELETE FROM user WHERE id = ?',
      id,
      function (err, result) {
        err
          ? rej(err)
          : res({"message":"deleted", changes: this.changes})
    })
  )
}
const updateUser = (req) => {
    var data = {
      name: req.body.name,
      email: req.body.email,
      password : req.body.password ? md5(req.body.password) : null
  }
  return new Promise( (res,rej) =>
    db.run(
      `UPDATE user set 
        name = COALESCE(?,name), 
        email = COALESCE(?,email), 
        password = COALESCE(?,password) 
        WHERE id = ?`,
      [data.name, data.email, data.password, req.params.id],
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
      name: req.body.name,
      email: req.body.email,
      password : md5(req.body.password)
  }
  var sql ='INSERT INTO user (name, email, password) VALUES (?,?,?)'
  var params =[data.name, data.email, data.password]

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
  var sql = "SELECT * FROM user WHERE id = ?"
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
  const sql = "SELECT * FROM user";
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