const express = require('express');
const ctrls = require('../staticpages/about.html')
routeManager.get('/',(req,res)=>{
    // res.send('homebase')
    index = path.join(__dirname +'/staticpages/about.html')
    res.sendFile(index)
 })

module.exports = {routeManager}