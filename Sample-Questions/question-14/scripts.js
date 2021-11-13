// console.log('ram'); 

let btnCheck = document.querySelector("#btnCheck"); 
let output14 = document.querySelector("#output14");

var Ram = {
    age: 125,
    yuga: "Treta"
}

var Krishna = {
    age: 31,
    yuga: "Dwapar"
}

function checkAge() {
    if (Ram.age > Krishna.age) {
        output14.innerText = "Ram's age is higher"; 
    } else  {
        output14.innerText = "Krishna's age is higher"; 
    }


}

btnCheck.addEventListener("click", checkAge);