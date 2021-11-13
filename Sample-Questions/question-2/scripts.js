let userInp = document.querySelector("#userInp");
let btnFont = document.querySelectorAll(".btnFont");
let outputP = document.querySelector("#outputP"); 
let output4 = document.querySelector("#output4");

let size = 16; 

for (let i=0; i< btnFont.length; i++ ) {
    btnFont[i].addEventListener("click", () => {
        if (btnFont[i].value === "increase") {
            size= size + 2;
            outputP.innerText = userInp.value; 
            outputP.style.fontSize= size + "px"; 
        } else if (btnFont[i].value == "decrease") {
            size = size - 2;
            outputP.innerText = userInp.value; 
            outputP.style.fontSize= size + "px";
        } else if (btnFont[i].value ==="h1") {
            output4.innerHTML = `<h1> ${userInp.value} </h1>`
            output4.style.color = "red"; 
        }
    })
}