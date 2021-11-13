let btn16 = document.querySelector("#btn16");
let output16 = document.querySelector("#output16"); 

let object1 = {
    name: "Ram",
    age: "Treta" ,
    power: 2500
}

let object2 = {
    name: "Krishna",
    age: "Dwapar" ,
    power: 2625
}

function check16(object1, object2) {
    let totalPower1 = object1.power + object1.name.length*35;

    console.log(totalPower1); 
    let totalPower2 = object2.power + object2.name.length*35;
    console.log(totalPower2); 

    if (totalPower1 > totalPower2) {
        output16.innerText = object1.name + " has more power in total"; 
    } else if (totalPower1 < totalPower2 ) {
        output16.innerText = object2.name + " has more power in total"; 
    }

}

btn16.addEventListener("click", () => {
    check16(object1, object2);
}   ); 