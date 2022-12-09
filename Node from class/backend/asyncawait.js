function multiply(){
    return 4 * 5
}

async function compare()// or i can write it like this, compare = async()=>
{
    var rs = await multiply()
    var a = true
    var b = true
    if (a == b){
        var result = true
    }else{
        var result = false
    }
    //calling the multiply function
    return rs
}

//console.log(compare())
compare().then(function(data){console.log(data)})
console.log('-------end-------')