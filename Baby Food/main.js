/*function selectFood() {
    var steps =0;
    document.getElementById('output').innerHTML="";
    var limit = document.getElementById('bfood').value;
    var foodHolder = '<div class=".bfoodHolder"><img src="./images/cerelac.jpg" height="100px"></div>'
    while (steps<limit)
    {document.getElementById('output').innerHTML =document.getElementById('output').innerHTML + foodHolder + (steps = steps + 1)}
}
document.getElementById('output').innerHTML = "erterter"*/


/*var babyFood = document.getElementsByClassName("sme")
console.log(Array.isArray(babyFood))
console.log(Array.isArray(Array.from(babyFood)))
//console.log(babyFood[4])

function selectFood (babyFood) {
    //selectFood(babyFood[0])

    for(var i=0; i<babyFood.length; i++){
        console.log(babyFood[i])
    switch (babyFood) {
        case babyFood[0]:
            //console.log("do a purchase");
            //document.getElementById("output").innerHTML = "do a purchase"
            result("do a purchase")
            break;
        case babyFood[1]:
            //console.log("do a purchase");
            //document.getElementById("output").innerHTML = "do a purchase 2"
            result("do a purchase2")
            break;
        case babyFood[2]:
            result("gghhjjj")
            break
        case babyFood[3]:
            result("gghhjjj")
            break
        case babyFood[4]:
            result("gghhjjj")
            break
        case babyFood[5]:
            result("gghhjjj")
            break
    
        //default:
            //console.log("return home");
            //document.getElementById("output").innerHTML = "return home"
            //result("return home")
          //  break;
        } 
    }
}

function result(action){
    document.getElementById("name").innerHTML = action;
}

//function myv() {
    //document.getElementById("output").innerHTML = "buy me";
//}*/
const divs = document.getElementsByClassName("sme");

for (let div of divs) {
    div.addEventListener("click", selectFood);
  }
function selectFood (foodPicked) {
    var babyFoodId= foodPicked.target.id
        //console.log(babyFoodId)
    switch (babyFoodId) {
        case img1:
            //console.log("do a purchase");
            //document.getElementById("output").innerHTML = "do a purchase"
            result("Banana Baby Food")
            price("#3000")
            break;
        case img2:
            //console.log("do a purchase");
            //document.getElementById("output").innerHTML = "do a purchase 2"
            result("Carrot")
            price("#4000")
            break;
        case img3:
            result("Beechnut")
            price("#5000")
            break;
         case img4:
           result("Cerelac")
           price("#500")
           break;
        case img4:
           result("Nutrilac")
           price("#500")
           break;
        case img5:
           result("SMA")
           price("#500")
           break;
        case img6:
           result("Carrot")
           price("#500")
           break;                  
        default:
            //console.log("return home");
            //document.getElementById("output").innerHTML = "return home"
            result("Click on the product you want")
            price("click on a product")
            break;
        } 
}

function result(action){
    document.getElementById("result").innerHTML = action;
}

function price(action){
    document.getElementById("price").innerHTML = action;
}