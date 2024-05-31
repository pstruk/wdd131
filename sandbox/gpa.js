// javascript file for gpa.html

function getGrades(inputSelector) {
  // get grades from the input box
  const grades = document.querySelector("#grades").value;
  // split them into an array (String.split(','))
  const gradesArray = grades.split(",");
  // clean up any extra spaces, and make the grades all uppercase. (Array.map())
  const upperGradesArray = gradesArray.map((item) => item.toUpperCase().trim())
    .filter((item) => item.length > 0);
  // return grades
  return upperGradesArray;   //[A, B, C, D]
}

function lookupGrade(grade) {
  // converts the letter grade to it's GPA point value and returns it
  let points = 0;
  if (grade === 'A') {
    gradeNumber = 4;
  } else if (grade === 'B') {
    gradeNumber = 3;
  } else if (grade === 'C') {
    gradeNumber = 2;
  } else if (grade === 'D') {
    gradeNumber = 1;
  } else {
    gradeNumber = 0;
  }
  return gradeNumber;    //[A]-> [4]
}

function calculateGpa(grades) {
  // gets a list of grades passed in
  const totalGrades = grades.reduce((acc, item) => acc + item); 
  // convert the letter grades to gpa points
  // calculates the GPA
  const gpa = totalGrades / grades.length;
  // return the GPA
  return gpa.toFixed(2);
}

function outputGpa(gpa, selector) {
  // takes a gpa value and displays it in the HTML in the element identified by the selector
  document.querySelector(selector).innerText = gpa;
}

function clickHandler() {
  // when the button in our html is clicked:
  // get the grades entered into the input
  const results = getGrades().map((item) => lookupGrade(item));
  // calculate the gpa from the grades entered
  const gpa = calculateGpa(results);
  // // display the gpa
  outputGpa(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);

