const numList = [2, 3, 4, 5, 8, 9, 10, 55, 99];
undefined
function oddEvenReducer(acc, curr) {
    if ( curr % 2 === 0) {
        return {...acc, even: acc.even + curr}
} else {
        return {...acc, odd: acc.odd + curr) 
               }
    }