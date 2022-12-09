var mysql = require ('mysql');

var connection = mysql.createConnection
(
    {host:"localhost",
    user:"root",
    password:"AYOmide100%",
    database: "fromNode"
})

module.exports = {connection}