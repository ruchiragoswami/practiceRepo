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


// Write a program to take a number input from user and determine whether the number is odd or even.
let givenInput = document.querySelector("#inputQ2"); 
let output2 = document.querySelector("#output2");
let clickQ2 = document.querySelector("#clickQ2"); 

let myNum = givenInput.value;

function checkOdd() {
    let num = givenInput.value; 
    if (num % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd'); 
    }
}



// const checkOdd = (myNum) => (myNum % 2 ===0 ? 'even' : 'odd'); 
    
   
// const oddOREven = (givenInput) => {
//     let checkNum = givenInput.value;
     
//     console.log(checkNum);
//     if(checkNum % 2 !== 0) {  
//         console.log('odd')
        
//     } else {
//         console.log('even'); 
//     }
// }

// oddOREven(inputQ2); 

clickQ2.addEventListener('click', checkOdd); 


// Question 3- Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

const num11 = 129;
const num12 = 251;

console.log("max number is: " + Math.max(num11, num12)); 
console.log("min number is: " + Math.min(num11, num12) ); 

//Question 4-  Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

const num41 = 8;
const num42= 23;
const num43 = 17;

const maxNum4 = (a, b, c) => {     
    console.log(Math.max(a, b, c) + " max number in answer4" )
} 

const minNum = (a, b, c) => {
    console.log(Math.min(a, b, c) + " min number in asnwer4");
}

maxNum4(num41, num42, num43); 
minNum(num42, num42, num43); 

