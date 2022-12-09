const express = require('express')
//const http = require('http')
const rmg =require('./routes/callbacks.js')
const app = express()
const cors = require('cors')

app.use(cors())
app.use("/", rmg.routeManager)
app.use('user/:1d',rmg.routeManager)
//app.get('/', (request, response) => {
 //response.send('Data displayed')   
//})

//http.createserver((req,res)=>{
    //if (req.url == '/'){
      //  res.write()
        //res.end()
    //}
//})

app.listen(4000,() => {
    console.log("server is running")
})