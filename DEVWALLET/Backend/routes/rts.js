const express = require("express")
const { register,login } = require('../controllers/customerControls.js')
const routeManager = express.Router()

routeManager.get('/', register)

routeManager.post("/registerCustomer",register)

routeManager.post('/Auth',login)

module.exports = {routeManager}