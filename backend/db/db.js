const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rajkumarmahto",
  database: "noteappdb",
});

connection.connect();

module.exports = { connection };
