/*//import core module
//var http = require('http')

//calling or importing grace local module
var grace = require('./module/app.js')
//implement core module
const requestListener = function(req, res) {
    res.writeHead(200);
    //implement local module
    console.log(grace.grace())
    res.end('Hello, World');
}

//calling server
const server = http.createServer(requestListener);
server.listen(8080);*/


/*//THIRD PARTY MODULE
//importing third party module
//const { application } = require('express')
var ep = require('express')
const app = ep()

app.get('/', function (req, res){
    res.send('Hello World')
})

app.listen(3000)*/


/*//ASYNCHRONOUS
console.log("-------starting-------")
function breakIndicator(){
    setTimeout(function()
     {console.log("break in 35 minutes time")},3000
     )
}
breakIndicator()
console.log("-------ending-------")*/


//PROMISES
//PROMISE THEN, CATCH TRY CATCH

//how to use it
var prn = new Promise((resolve,reject) =>{
    //your code
    var a = true
    var b = true
    if (a == b){
        resolve("true")
    }else{
        reject("false")
    }
})//.then(function(){})
prn.then (function(){
console.log('true message sent')
}).catch(function(){
    console.log('false returned')
})