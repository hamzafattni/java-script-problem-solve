
//  Question :-01


let firstname = document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
let h3 = document.querySelector("h3");

function yourname() {
    console.log(firstname.value, lastname.value);
    h3.innerHTML = "Your Name: " + firstname.value + " " + lastname.value;
}



// Question :-02


function calculate() {
    const num1 = document.querySelector("#num1").value;
    const num2 = document.querySelector("#num2").value;
    const operator = document.querySelector("#operator").value
    switch (operator) {
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;
        case "/":
            console.log(num1 / num2);
            break;                                    
    
        default:
            console.log("bhai mera operator tu sahi daal daa");
    }
}



//  Question :-03


const monthdropdown = document.querySelector("#monthdropdown")
function genrater(){
    const slectMonths = monthdropdown.value
    switch(slectMonths){
        case("January"):
        console.log("Season is Winter")
        break;
        case("Feb"):
        console.log("Season is winter")
        break;
        case("March"):
        console.log("Season is Winter")
        break;
        case("April"):
        console.log("Season is summer")
        break;
        case("May"):
        console.log("Season is summer")
        break;
        case("June"):
        console.log("Season is summer")
        break;
        case("July"):
        console.log("Season is summer")
        break;
        case("August"):
        console.log("Season is summer")
        break;
        case("September"):
        console.log("Season is summer")
        break;
        case("october"):
        console.log("Season is Winter")
        break;
        case("November"):
        console.log("Season is Winter")
        break;
        case("December"):
        console.log("Season is Winter")
        break;
        default:
            console.log("bhai kio month to select kar phela ")
    }
}