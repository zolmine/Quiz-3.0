const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "quiz" 
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;