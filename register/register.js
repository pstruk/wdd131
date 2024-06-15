// javascript for the youth registration form 

import {participantTemplateCount, successTemplate} from "./templates.js";

//set participants to 1 on loading and increment up when button is clicked
let participants = 1;
//add an event listener to the add participant button
document.querySelector("#add").addEventListener("click", function () {
  ++participants;
  participantTemplateCount(participants);
})

//Event Listener for form submission
document.querySelector("form").addEventListener("submit", submitForm);

//create registration object
const registrationProfile = {name: "", participantNum: 0, totalFees: 0};

//stop form from reloading page
function submitForm(event) {
  event.preventDefault();
  //gather summary information for object, incl. total fees
  registrationProfile.name = document.querySelector("#adult_name").value;
  registrationProfile.participantNum = participants;
  registrationProfile.totalFees = totalFees();
  //call summary function
  successTemplate(registrationProfile);
}

function totalFees() {
  // the selector below lets us grab any element that has an id that begins with "fee"
  let feeElements = document.querySelectorAll("[id^=fee]");
  console.log(feeElements);
  // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
  // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
  // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
  feeElements = [...feeElements];
  // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
  // Remember that the text that was entered into the input element will be found in the .value of the element.
  // once you have your total make sure to return it!
  let total = feeElements.reduce((acc, nd) => acc + parseInt(nd.value), 0);
  return total;
}



  
