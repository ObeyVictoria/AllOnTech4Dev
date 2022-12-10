const sequelize = require("../config/connections.js")
const { Customer } = require("../models/customer.js")
const bcrypt = require('bcryptjs')
const saltRounds = bcrypt.genSaltSync(10)

const register = async(req, res) =>{
    const cus = {cusName: req.body.CustomerName,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, saltRounds)}
    
       
  Customer.findAll({
        where: {
            username: req.body.username
        }
      }).then(rs =>{
        if(rs.length >= 1)
        {
            res.status(200).json([{message:"username taken"}])  
        }
        else
        {
            Customer.create(cus).then(rs=>{
                console.log(rs)
                res.status(200).json([{ message: "data created" }])
            }).catch(err=>{
                console.log(err)
                res.status(403).json([{ message: "err" }])
            })
        }
       

     
    
    }).catch(err=>{
          console.log(e)
      });
}
module.exports = {register}


/*Customer.create(cus).then(rs=>{
        console.log(rs)
        res.status(200).json([{message:"data created"}])
    }).catch(err=>{
        console.log(err)
        res.status(403).json([{message:"err"}])
    })*/