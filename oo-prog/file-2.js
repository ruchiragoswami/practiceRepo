// Arrow functions
let sum = function(a, b) {
    return a+b; 
     
}

console.log(sum(9, 2)); 
// sum(3,5); 

let sum2 = (a, b) =>  a+ b;

alert('Arrow function sum is ' + sum2(9, 9)); 
console.log('sum2 is ' + sum2(2, 6)); 

let double = x => x*2 ;
console.log('double is ' + double(21)); 