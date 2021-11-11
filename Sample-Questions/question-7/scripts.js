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


// let userInp2 = document.querySelector("#userInp2"); 
let callApi = document.querySelector("#callApi");
let outputDiv2 = document.querySelector("#outputDiv2"); 

// let url2 = "https://unitube-server.herokuapp.com/playlists"; 

// for error 401, use above url and for 404, the one below

let url2 = "https://jsonplaceholder.typicode.com/dummyUsers"; 

function makeCall() {
    fetch(url2)
    .then(response => {
        if (response.status === 401) {
            outputDiv2.innerText = 'you are not logged in';
        } else if ( response.status === 404 ) {
            outputDiv2.innerText = "404 Page Not Found"
        }
    })
}

callApi.addEventListener("click", makeCall);