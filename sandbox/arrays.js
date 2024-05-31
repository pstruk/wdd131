//  arrays.js for arrays.html

// Activity 1 - Map()
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`; //the html string made from step
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join('');  // set the innerHTML. If join() is empty commas will be inserted between items
console.log(stepsHtml);

//Activity 2 - Map() - creates a new array/original array is unchanged, need to provide a callback function that will get applied to every element of the original array 
const grades = ['A', 'B', 'A'];
function gpa(grade) {     //process to convert grades in array to gpa points
  let gpaNumber = 0;
  if (grade === 'A') {
        gpaNumber = 4;
} else if (grade === 'B') {
    gpaNumber = 3;
}
return gpaNumber;     //return `<li>${gpaNumber}</li>`; use if sending to a webpage
}
const gpaPoints = grades.map(gpa);

console.log(gpaPoints);     //document.querySelector("#myList").innerHTML=gpaPoints.join(''); use for a webpage

//Activity 3 - Reduce() - final result is a single value, need to supply a "reducer" callback function to be applied on each element of the array "in order". first argument is accumulator and second is next value in array. good for summing/finding max value 
const gradeList = ['A', 'B', 'A'];
function gpa(grade) {
    let gpaNumber = 0;
    if (grade === 'A') {
        gpaNumber = 4;
} else if (grade === 'B') {
    gpaNumber = 3;
}
return gpaNumber;
}
const gpaPoint = gradeList.map(gpa);  // console.log(gpaPoint);
const total = gpaPoint.reduce((acc, item) => acc + item);
const finalGpa = total/gpaPoint.length; 

console.log("GPA:", Math.round(finalGpa * 100)/100);   //console.log(total);

    //A. solution for #3
    // const gpaPoint = gradeList.map(gpa);
    // const totals = gpaPoint.reduce(function(total, item) {
    //   return total + item;
    // });
    // const finalGpa = totals / gpaPoint.length;
    // console.log(finalGpa);
    
    //B. solution for #3
    // // this is the same thing as above, but with an arrow function
    // const total = gpaPoint.reduce((total, item) => total + item);
    // const finalGpa = total / gpaPoint.length;
    // console.log(finalGpa);
    
    //C. solution for #3 - simplified further
    // const finalGpa = gpaPoint.reduce((total, item) => total + item) / gpaPoints.length;
    // console.log(finalGpa);

//Activity 4 - filter() - used to filter out elements that don't match a criteria, need to provide a callback function, creates a new array  
const fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const bigFruit = fruit.filter((fruit) => fruit.length > 6);

console.log(bigFruit);

    //B. Solution for #4
    // const bigFruit = fruit.filter(function (fruit) {
    //     return fruit.length > 6;
    // });
    // console.log(bigFruit);

// //Activity 5 - indexOf - use to find the index position of an array item
const arrayList = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = arrayList.indexOf(luckyNumber);

// console.log(luckyIndex);

    //B. Solution for 5 (includes -1 to indicate error)
    // let luckyIndex = -1;
    // arrayList.forEach(function (item, index) {
    //     if (item === luckyNumber) {
    //         luckyIndex = index;
    //     }
    // });    console.log(luckyIndex);

