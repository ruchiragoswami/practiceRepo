// console.log("ram");
let btnCheck =  document.querySelector("#btnCheck");
let output15 = document.querySelector("#output15"); 

var obj1 = {
    name: "ram",
    age: "Treta",
    power: 2500
}

var obj2 = {
    name: "krishna",
    age: "Dwapar",
    power: 2325
}

function checkPower() {
    if ( obj1.power > obj2.power) {
        output15.innerText = "Ram's power is more"; 
    } else if (obj1.power < obj2.power) {
        output15.innerText = "Krishna's power is more"; 
    }
}

btnCheck.addEventListener("click", checkPower); 