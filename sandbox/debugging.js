/*Javascript file for debugging.html activity - Week 4*/

/*Activity 1*/ 

/*const PI = 3.14;
let radius = 3;
let area = 0;
area = radius * radius * PI;
console.log("Area 1:", area);

radius = 4;
area = radius * radius * PI;

console.log("Area 2:", area);*/

/*Activity 2*/

const PI = 3.14;
let area = 0;

function circleArea(radius) {
    const area = radius * radius * PI;  /*possible to: return radius * radius * PI;*/
    return area;  
}
area = circleArea(3);
console.log("Area 1:", area);

area = circleArea(4);
console.log("Area 2:", area);

