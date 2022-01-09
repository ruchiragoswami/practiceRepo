// Arrow functions
let sum = function(a, b) {
    return a+b; 
     
}

console.log(sum(9, 2)); 
// sum(3,5); 

let sum2 = (a, b) =>  a+ b;

// alert('Arrow function sum is ' + sum2(9, 9)); 
console.log('Arrow function sum is ' + sum2(9, 9))
console.log('sum2 is ' + sum2(2, 6)); 

let double = x => x*2 ;
console.log('double is ' + double(21)); 

// If there are no arguments then the parenthesis will be empty, but they should be present

let greet = () => console.log('Greeting. No parenthesis in the arguments'); 
greet(); 

let nameGreet = (name) => console.log("Greetings " + name); 
nameGreet("Ruchi"); 

// Arrow  functions can be used in the same way as Function Expressions

let age = prompt("What is your age? " , 34);

let welcome = function checkAge() {
    if (age < 18) {
        console.log('minor');
    } else  {
        console.log('adult'); 25
    }
}
12
// welcome(); 
12
// the above code can be written as

let welcome2 = (age < 25 ) ? 
    () => console.log('bramhacharyashram') :
    () => console.log('Oter Ashram'); 
// welcome2();

let findAshram = () => {
    if (age < 25) {
        console.log("You are in Brahmacharyashram");
    } else if (age >=26 && age <=50) {
        console.log("you are in Grihasthaashram"); 
    } else {
        console.log('other'); 
    }
}

findAshram() ;

/*  
Arrow functions come in two flavours, with curly braces and without curly braces. 
Without curly braces : returns the result
With curly braces : multiple statements & explicit return the result
*/

// Task Rewrite with arrow function

let ask = (question, yes, no) => (confirm(question)) ? yes() : no();

// function ask(question, yes, no) {
//     if(confirm(question) ) {
//         yes();
//     } else {
//         no();
//     }
// }


ask(
    "Do you agree?", 
    () => alert('You agreed.') ,
    () => alert('You cancelled the execution')
)

// Task 2

const divideByTwo = (num1) => console.log(num1/2);
divideByTwo(4); 
divideByTwo(16); 