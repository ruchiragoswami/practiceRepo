let userInput = document.querySelector("#userInput");
let btnText = document.querySelectorAll(".btnText");
let outputP = document.querySelector("#outputP");

for (let i = 0; i<btnText.length; i++) {
    btnText[i].addEventListener("click", () => {
        if (btnText[i].value == "log") {
            outputP.innerText = userInput.value; 
            outputP.style.color = "black";
        } else if (btnText[i].value == "error"){
            outputP.innerText = userInput.value; 
            outputP.style.color = "red"; 

        } else if (btnText[i].value == "warn") {
            outputP.innerText = userInput.value; 
            outputP.style.color = "yellow"; 
        }
    })
}

let btnCall = document.querySelector("#callApi");
let outputR = document.querySelector("#outputR"); 
let url = "https://mystery-api.kushanksriraj.repl.co/get";


function clickHandler() {
    fetch(url)
    // .then( response => console.log(response))
    .then(display => {
        if (display.status== 401  ) {
            outputR.innerText = "Error 401: your are not logged in";
        } else if (display.status === 404) {
            outputR.innerText = "error 404";
        }
    })
}

        
btnCall.addEventListener("click", clickHandler);
        