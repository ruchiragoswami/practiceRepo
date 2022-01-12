// console.log('12 Jan'); 


const arr1 = [1,3,5];
const arr2 = [2,4,6];

const mergeArray  = (x, y) =>  { [...x, ...y];
    console.log([...x, ...y]); 
}

mergeArray(arr1, arr2); 


/*
const toSentenceCase = (str => {
str.split(' ').map(i) => i[0]
})
*/ 


// const toggleCase = str => str.split("").map((letter, index) => (index % 2) ? letter.toUpperCase() : letter.toLowerCase()).join("")
// For toggling 👆
// const toggleCase = str => str.split("").map((letter) => (letter === letter.toLowerCase()) ? letter.toUpperCase() : letter.toLowerCase()).join("");
// This one sorry👆


const factorial = (num) =>  {
    if (num === 1) return 1;
    else return num*factorial(num -1 ); 
    
}

console.log(factorial(5)); 
console.log(factorial(7)); 

/*
const factorial = num => num > 1 ? num * factorial(num - 1) : 1
console.log(factorial(5))

other way
const fact = (n) => n<=1?1 : n*fact(n-1);  
*/