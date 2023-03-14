//get all the divs that have the class of sme
const divs = document.getElementsByClassName("sme");

//loop through each sme div and add the click event that executes the selectFood function
for (let div of divs) {
    div.addEventListener("click", selectFood);
}

function selectFood(elementClicked) {
    //get the id of the div and store in babyFood
    var babyFood = elementClicked.target.id

    //use switch to check for babyFood id that matches
    //then execute result function that shows name of baby food of that id
    //then execute price function that shows price of baby food of that id
    switch (babyFood) {
        case "img1":
            result("Banana Baby Food")
            price("#3000")
            break;
        case "img2":
            result("Nutrilac")
            price("#4000")
            break;
        case "img3":
            result("Beechnut")
            price("#5000")
            break;
         case "img4":
           result("Cerelac")
           price("#6000")
           break;
        case "img5":
           result("Carrot")
           price("#7000")
           break;
        case "img6":
           result("SMA")
           price("#8000")
           break;                  
        default:
            result("Click on the product(image) you want")
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