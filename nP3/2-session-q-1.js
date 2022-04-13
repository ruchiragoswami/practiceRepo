//Date : 13 April 

//Question 1: Given the below data for clothing stock.
const clothingStock = [
    {id: "0a1", color: "blue", category: "men shirt", item: "Regular Fit Men Shirt", inStock: true}, 
    {id: "0a2", color: "black", category: "women top", item: "Regular Fit Women Top", inStock: true}, 
    {id: "0a3", color: "grey", category: "men shirt", item: "Slim Fit Men Shirt", inStock: false},
    {id: "0a4", color: "grey", category: "men tshirt", item: "Slim Fit Men Tshirt", inStock: false},
    {id: "0a5", color: "red", category: "women top", item: "Slim Fit Women Top", inStock: true},
    {id: "0a6", color: "yellow", category: "men shirt", item: "Casual Fit Men Shirt", inStock: true},
    {id: "0a7", color: "orange", category: "men shirt", item: "Straight Fit Men Shirt", inStock: true},
    {id: "0a8", color: "orange", category: "women top", item: "Casual Fit Women Top", inStock: false}
]

// 1a. Console all the different colours available for men shirt.
// Expected Output: blue grey yellow orange

const mensShirtColor = (accObj, currObj) => (currObj.category === "men shirt") ? [...accObj, currObj.color] : [...accObj];

const answer1a = clothingStock.reduce(mensShirtColor, []); 
console.log(answer1a); 

//1b. Console all the different colours available for men shirt which are currently in stock.
// Expected Output: blue yellow orange

const differentColorMenShirt = (accObj, currObj) => (currObj.category === "men shirt" && inStock)  ? [...accObj, currObj.color] : [...accObj]; 

const answer1b = clothingStock.reduce(differentColorMenShirt, []);
console.log(answer1b); 

// 1c: Console an array which only contains the elements which are in stock.
/* Expected Output:
[
    {id: "0a1", color: "blue", category: "men shirt", item: "Regular Fit Men Shirt", inStock: true}, 
    {id: "0a2", color: "black", category: "women top", item: "Regular Fit Women Top", inStock: true},
    {id: "0a5", color: "red", category: "women top", item: "Slim Fit Women Top", inStock: true},
    {id: "0a6", color: "yellow", category: "men shirt", item: "Casual Fit Men Shirt", inStock: true},
    {id: "0a7", color: "orange", category: "men shirt", item: "Straight Fit Men Shirt", inStock: true}
] */

const itemsInStock = (accObj, currObj) => (currObj.inStock) ? {...accObj, currObj} : {...accObj}; 
const answer1c = clothingStock.reduce(itemsInStock, {});
console.log(answer1c); 