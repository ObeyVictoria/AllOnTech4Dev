const {data} = require("../model/database.js")
const home = async (req,res)=>{
    res.status(200).json(data)
    }
    const find = (req, res)=>{
        var i = req.params.id

        res.status(200).json(data[i])
    }
    module.exports = {home, find}