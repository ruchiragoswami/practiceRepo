let userInp = document.querySelector('#userInp');
let output = document.querySelector("#output");

function countChar() {
    let userChar = userInp.value; 
    // let userChar = userInp.length; 
    let remainingChar = 10- userChar.length;
    output.innerText =  remainingChar;

    if (remainingChar < 0 ) {
        output.style.color = "red"; 
    } else {
        output.style.color = "black"; 
    }

}


userInp.addEventListener("input", countChar); 