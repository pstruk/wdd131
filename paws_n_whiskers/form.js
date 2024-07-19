// javascript file for form.html
// import from the ES module paws.mjs
import * as paws from './paws.mjs';

//To dynamically insert an extra question into the Adoption Form
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
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
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
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>`
            break;
    }
}

// Event Listener for a change on the child page adoption form
document.querySelector("#insertQuestion").addEventListener("change", function (event) {
    const selectedValue = event.target.value.toLowerCase();
    let residence = "";
    
    if (selectedValue === "house" ) {
        residence = "house";
    } else {
        residence = "apartment";
    }
    
    const residenceHtml = insertHouseAptQuestion(residence);
    document.querySelector("#petChoiceQuestion").insertAdjacentHTML("beforebegin", residenceHtml);
});

// To insert a personalized confirmation message using information from the submitted application

//create a submission object and gather the submission information
const submissionDetails = { name: "", email: "", totalHouseMembers: 0, pet: "" };

function getSubmissionInformation() {
    submissionDetails.name = document.querySelector("#firstName").value;
    submissionDetails.email = document.querySelector("#emailAddress").value;
    submissionDetails.totalHouseMembers = totalMembers();
    submissionDetails.pet = document.querySelector("#petChoice").value.toLowerCase();
    
    paws.submissionTemplate(submissionDetails);
}

function totalMembers() {
    const children = parseInt(document.querySelector("#numberOfKids").value);
    const adults = parseInt(document.querySelector("#numberOfAdults").value);
    const householdMembers = [children, adults];
    let totalHouseMembers = householdMembers.reduce((acc, members) => acc + (members));
    
    return totalHouseMembers;
}

// Event Listener for the adoption form submit button and a call to get the personalized receipt
document.querySelector("#adoptform").addEventListener("submit", getSubmissionInformation);


