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