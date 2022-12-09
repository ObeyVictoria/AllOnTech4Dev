const express = require("express")
const {register} = require('../controllers/customerControls.js')
const routeManager = express.Router()

routeManager.get('/', register)

routeManager.post("/registerCustomer",register)

module.exports = {routeManager}