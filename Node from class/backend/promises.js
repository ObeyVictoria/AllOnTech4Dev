/*function timer(){
    setTimeout(function(){
        console.log("async loading")}, 3000)
}
timer()
console.log("-------end-------")*/

var prn = new Promise((resolve,reject) =>{
    //your code
    var a = true
    var b = true
    if (a == b){
        resolve("true")
    }else{
        reject("false")
    }
})
prn.then(()=>{
console.log('positive result')
}).catch(()=>{
    
})
console.log(prn)
console.log("-------end-------")
