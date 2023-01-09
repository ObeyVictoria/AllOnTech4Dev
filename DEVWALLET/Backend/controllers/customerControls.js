const sequelize = require("../config/connections.js")
const { Customer } = require("../models/customer.js")
const { deposit } = require("../models/savings.js")
const { withdrawal } = require("../models/withdrawal.js")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const saltRounds = bcrypt.genSaltSync(10)
const secret = "secret"

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


    const dashboard =async (req,res)=>{
        let total = 0
        let totalwith = 0
           const customerID = req.decoded.custid
        const result = await deposit.findAll({
               where: {
                   custid: customerID
               }
           })
       result.map((r)=>{
             total = total +  r.dataValues.Amountdep
            })
           withdrawal.findAll({
                   where: {
                       custid: customerID
                   }
               }).then(rsw =>{
                  rsw.map((rw)=>{
                    return   totalwith = totalwith + rw.dataValues.Amountwithdraw
                   })
                   res.status(200).json([{customer:customerID,fullname:req.decoded.cusName,savings:total,withdraw:totalwith,balance:total - totalwith}])
       
                   }).catch(err=>{
       console.log(err)
               })
           }
    
module.exports = {register,login,dashboard}
