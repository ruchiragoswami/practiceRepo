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
        if (display.status === 401  ) {
            outputR.innerText = "Error 401: your are not logged in";
        } else if (display.status === 404) {
            outputR.innerText = "error 404";
        } else if (display.status === 200) {
            outputR.innerText = "Hurray! it's working!";
        }
    })
}

        
btnCall.addEventListener("click", clickHandler);
        

// Question 4 

let yName = document.querySelector("#yName");
let yPass  = document.querySelector("#yPass");
let btnCheck = document.querySelector("#btnCheck");
let output4 = document.querySelector("#output4"); 

function passCheck() {
    console.log(yName.value + yPass.value); 


    if (yPass.value.includes(yName.value) ) {
        output4.innerText ="Password can't have name";
    } else {
        output4.innerText = "Okay password!";
    }
}

btnCheck.addEventListener("click", passCheck);

// Question 3 

let btn3 = document.querySelector("#btn3");
let url3 = "https://mock-practice.prakhar10v.repl.co/items";
let output3 = document.querySelector("#output3");

 function makeCall3() {
     fetch(url3)
        .then(response => response.json())
        .then(display => {
            for (i=0; i<display.length; i++ ){
                // output3.innerText = `${display[i].item} `;
                display.forEach( () => {
                    output3.innerText =  display[i].price ;
                })            
            }

            // display.forEach( () => {
            //     output3.innerText =  display[i].price ;
            // })
            // output3.innerText = display.item; 
        })
 }
btn3.addEventListener("click", makeCall3);