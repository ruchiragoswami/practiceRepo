// console.log('hello, functions practice'); 

// question 1- Given a and b, your function should return the value of ab
// Example: Input: power(2,3) ––> Output: 8

const a = 2;
const b = 3;
// const q1Output = document.querySelector('#q1-output'); 

console.log(Math.pow(a, b)); 

// question 2- 

let hexInput = document.querySelector('#hexInput');
let hexOutput = document.querySelector("#hexOutput");
let btnArea = document.querySelector("#btn-Area"); 



function calcArea()  {
    let side = hexInput.value;
    console.log(2.598 * Math.pow(side, 2) ); 

}




btnArea.addEventListener("click", calcArea); 