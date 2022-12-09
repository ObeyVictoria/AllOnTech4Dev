/*var path = require('path')
//console.log(path)
var fl = path.parse(__filename)
console.log(fl.base)*/

const express = require('express')
const path = require('path')
const app = express()

const rmg =require('./router2/route.js')

app.use("/", rmg.routeManager)

app.use(express.static('staticpages'))
/*app.get('/',(req,res)=>{
   // res.send('homebase')
   index = path.join(__dirname +'/staticpages/index.html')
   res.sendFile(index)
})

app.get('/about', (req,res)=>{
    page = path.join(__dirname +'/staticpages/about.html')
   res.sendFile(page)
})*/
app.listen(4000,() => {
    console.log("server is running")
})
