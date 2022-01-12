// Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
const num1 = 5;
const  num2= 13;
const num3 = 7;
const num4= 21;
const num5 = 48;

const addAll = (a, b , c, d, e ) => { 
   let sum =  a + b+ c + d+ e;
    console.log(sum);
} 

addAll(num1, num2, num3, num4, num5);

console.log('end'); 

// Write a program to take a number input from user and determine whether the number is odd or even.
let inputQ2 = document.querySelector("#inputQ2"); 
let output2 = document.querySelector("#output2");
let clickQ2 = document.querySelector("#clickQ2"); 


const oddOREven = inputQ2 => {

    let checkNum1 = inputQ2.value; 

    if(checkNum1 % 2 !== 0) { 
        console.log('odd')
    } else if(checkNum1 % 2 == 0) {
        console.log('even'); 
    } else {
        console.log('you came here'); 
    }
}

// oddOREven(inputQ2); 

clickQ2.addEventListener('click', oddOREven); 
