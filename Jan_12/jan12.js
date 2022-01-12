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