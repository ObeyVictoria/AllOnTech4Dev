const express = require('express');
const app = express();
const cors = require('cors');
const routerManager = require('./routes/routers.js');

app.use(cors())
app.use('/',routerManager.router)
// app.use('/fellows',routerManager.router)


app.listen(3001,()=>{
    console.log('server is running')
})