const Sequelize = require('sequelize')
const sequelize = new Sequelize('savings',"process.env.DATABASE_USER","AYOmide100%",{
    dialect:"mysql", host:"localhost"
});


module.exports = sequelize;

/*var mysql = require ('mysql');

var connection = mysql.createConnection
(
    {host:"localhost",
    user:"root",
    password:"AYOmide100%",
})*/