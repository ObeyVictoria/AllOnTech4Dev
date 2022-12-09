const express = require('express')
const { pushData,InsertData } = require('../connections/getData.js')
const routManger = express.Router()



routManger.get('/',pushData)
routManger.get('/int/:id/:model/:make/:year',InsertData)
module.exports = {routManger}