const express = require('express');
const ctrls = require('../staticpages/index.html')
routeManager.get('/',(req,res)=>{
    // res.send('homebase')
    index = path.join(__dirname +'/staticpages/index.html')
    res.sendFile(index)
 })

module.exports = {routeManager}