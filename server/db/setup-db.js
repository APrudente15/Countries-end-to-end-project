require("dotenv").config();
const fs = require('fs');

const db = require("./connect")

//reads the sql script
const sql = fs.readFileSync ('./server/db/countries.sql').toString();

//runs the query
db.query(sql)
    .then((data) => {
        db.end()
        console.log("Setup complete")
    })
    .catch((error) => {
        console.log(error)
    });