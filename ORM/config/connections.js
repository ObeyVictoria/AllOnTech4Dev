const Sequelize = require("sequelize")
const sequel =  new Sequelize("carwarehouse", "root", "",
{ dialect: "mysql", host: "localhost" })


module.exports = sequel;