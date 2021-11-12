let userInp = document.querySelector("#userInp");
let btnReverse = document.querySelector("#btnReverse");
let outputP = document.querySelector("#outputP");

// console.log("ruchi");

function reverseIt() {
    let myInput = userInp.value;

    let splitInput = myInput.split("");
    console.log("this is split input: " + splitInput);

    let reverseInput = splitInput.reverse();
    console.log("reversed: " + reverseInput);

    let joinedInput = reverseInput.join("");
    console.log("joined : " + joinedInput); 

    outputP.innerText = joinedInput; 
}

btnReverse.addEventListener("click", reverseIt); 