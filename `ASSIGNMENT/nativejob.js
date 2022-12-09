var mysql = require ('mysql');

var connection = mysql.createConnection
(
    {host:"localhost",
    user:"root",
    password:"AYOmide100%",
    database: "fromNode"
})

connection.connect(err => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("connection is successfull")
       const command ="select * from cars";
       connection.query(command,(err,result)=>{
           if(err){
               console.log(err)
           }else
           {
               console.log(result);
               
           }
       } )

    }
})