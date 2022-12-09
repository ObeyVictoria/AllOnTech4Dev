const express = require('express');
const ctrls = require('../controllers/logic.js')
const routeManager = express.Router()

/*routeManager.get('/', (req,res)=>{
res.send('send data')
})*/

routeManager.get('/', ctrls.home)
routeManager.get('/user/:id',ctrls.find)

module.exports = {routeManager}