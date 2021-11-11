let userInp = document.querySelector("#userInp");
let btnCall = document.querySelector("#btnCall");
let outputDiv = document.querySelector("#outputDiv");

let url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function constructURL(someText) {
    return url + "?text=" + someText;
}

function makeCall() {
    fetch(constructURL(userInp.value))
        .then(response => response.json())
        .then(display => {
            outputDiv.innerText = display.contents.translated + " " + display.contents.text
        })
}

btnCall.addEventListener("click", makeCall);