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

const login = async(req,res)=>{
    
    const  username = req.body.username
    const  password = req.body.password
      Customer.findOne({
          where: {
              username: username
          }
        }).then(rs =>{
       if(rs)
       {
          const validity  =  bcrypt.compareSync(password,rs.dataValues.password)
          if(validity == true){
              const token = jwt.sign(rs.dataValues,secret)
              res.status(200).json([{ message: token}])
          }else{
              res.status(200).json([{ message: "invalid" }]) 
          }
       }else{
          res.status(200).json([{ message: "invalid" }]) 
       }
  
      }).catch(err=>{
            console.log(err)
        });
    }

    
module.exports = {register,login}
