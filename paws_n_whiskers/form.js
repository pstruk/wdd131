// This javascript file is associated with form.html
// import from the ES6 module paws.mjs
import * as paws from './paws.mjs';

//To dynamically insert an extra question on the child page FORM---------------------------------------
function insertHouseAptQuestion(residence) {
    let element;

    switch (residence) {
        case "house":
            element = document.querySelector("#insertedQuestion");
            if (element !== null) {
                element.remove();
            }
            return `<div class="question" id="insertedQuestion">
                <label for="fencedYard">Do you have a fenced-in yard?<span>*</span></label> 
                <select id="fencedYard" required>
                    <option selected value="" disabled selected>Select One</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                </select>
            </div>`
            break;
        case "apartment":
            element = document.querySelector("#insertedQuestion");
            if (element !== null) {
                element.remove();
            }
            return `<div class="question" id="insertedQuestion">
                <label for="landlordPermission">Do you have your landlord's permission to have an animal?<span>*</span></label> 
                <select id="landlordPermission" required>
                    <option selected value="" disabled selected>Select One</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                </select>
            </div>`
            break;
    }
}

// Event Listener for a change on the child page adoption form
document.querySelector("#insertQuestion").addEventListener("change", function (event) {
    const selectedValue = event.target.value;
    let residence;
    if (selectedValue == 1) {
        residence = "house";
    } else {
        residence = "apartment";
    }
    const residenceHtml = insertHouseAptQuestion(residence);
    document.querySelector("#petChoiceQuestion").insertAdjacentHTML("beforebegin", residenceHtml);
});

// To insert a personalized confirmation message using information from the submitted application

//create a submission object
const submissionDetails = { name: "", email: "", totalHouseMembers: 0, pet: "" };

// //   gather submission information for object
function getSubmissionInformation() {

    submissionDetails.name = document.querySelector("#firstName").value;
    submissionDetails.email = document.querySelector("#emailAddress").value;
    submissionDetails.totalHouseMembers = totalMembers();
    // submissionDetails.pet = document.querySelector("#petChoice");
    // console.log(submissionDetails.value);

    const selectElement = document.querySelector("#petChoice");

    submissionDetails.pet = selectElement.options[selectElement.selectedIndex].text.toLowerCase();
    console.log(submissionDetails.pet);

    paws.submissionTemplate(submissionDetails);
}

function totalMembers() {
    const children = parseInt(document.querySelector("#numberOfKids").value);
    console.log(children);

    const adults = parseInt(document.querySelector("#numberOfAdults").value);
    console.log(adults);

    const householdMembers = [children, adults];
    console.log(householdMembers);

    let totalHouseMembers = householdMembers.reduce((acc, members) => acc + (members));
    console.log(totalHouseMembers);

    return totalHouseMembers;
}

// Event Listener for the child page adoption form submit button
// A personalized Submission Receipt to be returned to the user after they have submitted their form. 
// Attach an Event Listener to the adoption form

document.querySelector("#adoptform").addEventListener("submit", getSubmissionInformation);
// event.preventDefault(); 

