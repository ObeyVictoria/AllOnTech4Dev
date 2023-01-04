const { cars } = require("../model/db.js")

const home =  (req, res)=>{
res.status(200).json(cars)
}
const find =  (req, res)=>{
    var search = req.params.search

    var newCar= cars.filter((item)=>{

          return (item.model.toLowerCase()== search.toLowerCase() || item.make.toLowerCase()== search.toLowerCase() || item.color.toLowerCase()==search.toLowerCase())


    })
    //res.send(i)
    //res.status(200).json(cars[search])
    res.send(newCar)
}

module.exports={home,find}