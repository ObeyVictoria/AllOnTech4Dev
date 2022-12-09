const conn = require('../models/config.js')

conn.connection.connect()

const pushData = async (req, res)=>{
const sql = "select * from cars";
conn.connection.query(sql,(err,result)=>{
    if(err){
console.log(err)
    }else{
        res.status(200).json(result)

    }
})
       
}

const InsertData = async(req,res)=>{
var id = req.params.id;
var model = req.params.model;
var make = req.params.make;
var year = req.params.year;
    var sql = "insert into cars(id,model,make,year)values ?"
var values = [[id,model,make,year]]
conn.connection.query(sql,[values],(err,result)=>{
if(err){
console.log(err)
}else{
    res.status(200).json([{message:"data Inserted"}])
}
})
} 


module.exports = {pushData,InsertData}