console.log("30 Nov"); 
const circle = {
    radius : 1,
    location : {
        x:1,
        y:1
    },
    draw : function() {
        console.log('draw'); 
    }
}; 


// There are three members in the circle object, they are, radius, location and draw. If a member is a function, we refer it to as a method. Here, draw is a method. Other members are referred to as properties. 

// Properties are used to hold values while functions are defined to use some logic. 

circle.draw(); 
console.log(circle.location); 
console.log(circle.radius);

// Factory function

function createCircle(radius) {
    return {
        radius: radius,
        draw: function() {
            console.log("draw in factory function. Radius is: " + radius);
        }
    }
}

const circle2 = createCircle(2); 
circle2.draw(); 
console.log(circle2.radius);

// Constructor function 

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw in constructor function. Radius is: " + radius);
    }
}

const another = new Circle(4);
another.draw(); 
// in the above constructor function, 'this' is basically reference to the object executing this piece of code

// In javaScript, functions are object

// ***********
// primitives are copied by their values, see below

let number = 10;

function increase(number) {
    number++;
    console.log("increased number: " + number); 
}

increase(number);
console.log("original number: " + number);

// use object in the above function

let obj = {value: 10}
function increaseO(obj) {
    obj.value++; 
    console.log("increased object: " + obj.value);
}

increaseO(obj); 
console.log("original obj: " + obj.value);

/*
Remember: in JavaScript, we have value types & reference types. 
Value types are: string, number, boolean, symbol, null, undefined
Reference types are: objects, functions, arrays. (Functions and arrays are also objects)

Take Away Lesson from the exercise on line 55 to 74:
Primitives are copied by their value, objects are copied by their reference

*/