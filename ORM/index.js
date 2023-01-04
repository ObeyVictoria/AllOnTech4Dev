const sequelize = require("./config/connections.js")
const Carlog = require('./models/carlog.js');
const Cars = require('./models/Cars.js')

Cars.hasMany(Carlog)

sequelize.sync({force:true}).then(result=>{
  return  Cars.create({carid:3,carModel:"Navra",carMake:"Nisan",carYear:"2023"})
}).then(res=>{
    return Carlog.create({color:"blck",regNum:"13456",carCarid:res.carid})
}).catch(err=>{
    console.log(err)
})
