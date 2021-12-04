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

// In javaScript, functions are object