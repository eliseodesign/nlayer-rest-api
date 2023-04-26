var sqlite3 = require('sqlite3').verbose();

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    } else {
        console.log('Connected to the SQLite database.');
        db.run("PRAGMA foreign_keys = ON;");

        db.run(`
            CREATE TABLE TypeUser (
                Id INTEGER PRIMARY KEY AUTOINCREMENT,
                Name TEXT
            );
        `,
        (err) => {
            if (err) {
                // Table already created
                console.log("ya existia tabla typeuser")
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO TypeUser (Name) VALUES (?)';
                db.run(insert, ["admin"]);
                db.run(insert, ["user"]);
            }
        });

        db.run(`
            CREATE TABLE User (
                Id INTEGER PRIMARY KEY AUTOINCREMENT,
                Name TEXT,
                Email TEXT UNIQUE,
                Password TEXT,
                Id_typeUser INTEGER,
                FOREIGN KEY (Id_typeUser) REFERENCES TypeUser(Id),
                CONSTRAINT email_unique UNIQUE (Email)
            );
        `,
        (err) => {
            if (err) {
                // Table already createdc
                console.log("ya existia tabla users")
            } else {
                // Table just created
            }
        });
    }
});

module.exports = db;
