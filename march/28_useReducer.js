const numList = [2, 3, 4, 5, 8, 9, 10, 55, 99];

function oddEvenReducer(acc, curr) {
    if ( curr % 2 === 0) {
        return {...acc, even: acc.even + curr}
} else {
        return {...acc, odd: acc.odd + curr}
               
    }
}

const answerEx1 = numList.reduce(oddEvenReducer, {odd: 0, even:0});
console.log(answerEx1); 

// output: {odd: 171, even: 24}

// Exercise 2 -Q: modify your reducer function to accommodate this. Change the program to accommodate an array of objects. The object will have two keys: type and payload. The type will tell you whether the number is even or odd and the payload will have the number.
const numList2 = [
    { type: 'odd', payload: 1 },
    { type: 'odd', payload: 3 },
    { type: 'odd', payload: 55 },
    { type: 'even', payload: 22 },
    { type: 'even', payload: 44 },
  ]
  
  function oddEvenSum(acc, curr) {
      if (curr.type === 'odd') {
          return {...acc, odd: acc.odd + curr.payload}

      } else { 
          return {...acc, even : acc.even+ curr.payload}

      }
  }

  numList2.reduce(oddEvenSum, {odd: 0, even: 0})
  
  //output: {odd: 59, even: 66}


  function oddEvenReducer(acc, curr) {

    // switch (curr % 2 === 0 )

    if ( curr % 2 === 0) {
        return {...acc, even: acc.even + curr}
} else {
        return {...acc, odd: acc.odd + curr}
               
    }
}

//with switch statement 

function oddEvenReducer_switch6(acc, curr)  {
    switch (curr.type) {
        case "even" :
      return  {...acc, even : acc.even + curr.payload}
      case "odd" :
          return {...acc, odd: acc.odd + curr.payload}
    } 
}

numList2.reduce(oddEvenReducer_switch6, {odd: 0, even: 0})