const express = require('express')
const controllers = require('../controllers/logic.js')
const router = express.Router()

router.get('/',controllers.home) 
router.get('/cars/:search',controllers.find) 
module.exports = {router}
