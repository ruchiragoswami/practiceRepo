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

