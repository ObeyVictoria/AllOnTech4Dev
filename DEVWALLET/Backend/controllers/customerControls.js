const sequelize = require("../config/connections.js")
const { Customer } = require("../models/customer.js")


const register = async(req, res) =>{
sequelize.sync().then(res=>{
    console.log(res)
})
}
module.exports = {register}