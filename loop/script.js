

//today class on function

function add(){
    var num1, num2;
    num1 = 4;
    num2 = 6;
    console.log(num1 + num2);
}

add()

function sub(){
    var num1, num2;
    num1 = 4;
    num2 = 6;
    console.log(num1 - num2);
}

sub()

function mul(){
    var num1, num2;
    num1 = 4;
    num2 = 6;
    console.log(num1 * num2);
}

mul()

function boolean(){
    var num1, num2;
    num1 = 4;
    num2 = "4";
    console.log(num1 === num2); //check the types of data
    console.log(num1 == num2); //check the values
}

boolean()


//parameterized functions
function mul()
{
    var anyNum = 5;
    var result = anyNum * 2;
    return result;
}


console.log(mul());

//todays class on function 12/9/2022
/*
classwork
1. student should be assigned retake class letter if grade is above 80, with less cert
2. student should be assigned wihdraw if students fails at both 
3. student hould be assigned graduation if graduation above 80 and cert are above 2 or equal 2
not the grade is not more than 100, soany input above 100 should give invalid grade
*/
var checker = function (grade,ncerts){
    if(grade > 100){
        console.log("invalid grade")
    }
    else if(grade >= 80 && ncerts < 2){
        console.log("retake class")
    }
    else if(grade >= 80 && ncerts >= 2){
        console.log("graduation")
    }
    else{
        console.log("withdraw")
    }
}

checker(85,2)