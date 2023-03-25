const mysql = require("mysql2")
require("dotenv").config();

const connection = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"rajkumarmahto",
    database:"noteappdb"
})
connection;
 
module.exports={connection}