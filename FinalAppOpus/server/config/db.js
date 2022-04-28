const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "192.168.0.2",
  port: "1212",
  user: "DevUser",
  password: "lcv.120197",
  database: "lcvsscopus_data",

});

module.exports = db;
