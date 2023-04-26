var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run("PRAGMA foreign_keys = ON;")
        
        db.run(`
            CREATE TABLE TypeUser (
            Id INTEGER PRIMARY KEY AUTOINCREMENT,
            Name text, 
            );
            

            `,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                // var insert = 'INSERT INTO TypeUser (Name) VALUES (?)'
                db.run(insert, ["admin"])
                db.run(insert, ["user"])
            }
        }); 
        
        db.run(
            `
            CREATE TABLE User (
                Id INTEGER PRIMARY KEY AUTOINCREMENT,
                Name text, 
                Email text UNIQUE, 
                Password text, 
                Id_typeUser INTEGER,
                FOREIGN KEY (id_typeUser) REFERENCES TypeUser(Id)
                CONSTRAINT email_unique UNIQUE (email)
            );
            `,
            (err)=> err? console.log(err):null
            
            )


    }
});


module.exports = db
