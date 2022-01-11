// console.log('Ruchi, Jan 11') ;

/*
const tanay = 2
tanay = 3; 
// Assignment to a constant variable 

const obj = { a: 1, b: 2 }
obj.a = 22



// Will we get an wrror? 
const obj = { a: 1, b: 2 }
const obj2 = { a: 3, b: 4 }
obj = obj2 
// Yes, assignment to a constat variable



// Will we get an error?

// What will it return?

const array = [1, 2, 3, 4]
array.push(55)

// No error, it will return 5, the length of array. If console logged, it will give the items in the array

const getNum = () => 2
console.log(getNum);
console.log(getNum()); 

const isOne = (num) => num == 1;
console.log(isOne(14));
console.log(isOne(1));
console.log(isOne(6-5));


// Arrow Funcions To be run directly on console. They need a console.log statement in order to run here

const checkOne = (a) => a===1 ? true : false;
checkOne(3);
// false
checkOne(1);
// true
checkOne (9-8);
// true



// Arrow Function with more than one parameter

const isBigger = (a,b) => a > b ? console.log(a + " is greater than " + b ) : console.log(a + " is lesser than " + b);

isBigger(5,4);
isBigger(1, 34);
isBigger(78, 12);



//  How would you write this with the least amount of characters

const Add22andReturn = (param1) => param1 + 22;
console.log(Add22andReturn(22)); 
console.log(Add22andReturn(1));




const printSomethingAndReturn = (a) => {
    console.log('squaring a.....')
    return a * a
  }
  console.log(printSomethingAndReturn(2));

  const giveMeAnObject = (a) => ({ value: a })

console.log(giveMeAnObject(5))

*/ 

// Default parameters
 
const defualtEx = (a , b=4) => a +b;

console.log(defualtEx(4));

console.log(defualtEx(8)); 

console.log(defualtEx(6,7));

// Default values must be given from the right hand side 