const mysql = require("mysql2")
require("dotenv").config();

const connection = mysql.createConnection({
    user:process.env.USER,
    host:process.env.HOST,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})

connection.connect();
 
module.exports={connection}