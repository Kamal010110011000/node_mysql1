const mysql  = require('mysql');

var connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "Db_test",
});

module.exports = connection;