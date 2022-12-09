function selectFood () {
    var babyFood = document.getElementById("bfood").value

    switch (babyFood) {
        case "SMA":
            //console.log("do a purchase");
            //document.getElementById("output").innerHTML = "do a purchase"
            result("do a purchase")
            break;
        case "Cerelac":
            //console.log("do a purchase");
            //document.getElementById("output").innerHTML = "do a purchase 2"
            result("do a purchase")
            break;
        default:
            //console.log("return home");
            //document.getElementById("output").innerHTML = "return home"
            result("return home")
            break;
        } 
}

function result(action){
    document.getElementById("output").innerHTML = action;

}