const db = require("../database/database")
const deleteUser = () => {
  return;
}
const updateUser = () => {
  return;
}
const createUser = () => {
  return;
}
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