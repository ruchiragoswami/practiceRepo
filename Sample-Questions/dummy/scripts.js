
let dob = 20;
let luckyNum = 5; 

let divide = (a, b ) =>  {
 let result=  a / b ; 
 return result;
}

// console.log(divide(dob, luckyNum)); 

let divide2 = (a, b) => {
    (a <= 0 || b == "" ) ? alert('Please enter a valid input') : console.log(a/b)
}

divide2(9, -12); 

