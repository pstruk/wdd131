// import files from the ES module paws.mjs
import * as paws from './paws.mjs';

// Functions to insert dynamic home page content

// To get the index position for a random generated animal
function getRandomIndexNum(animalArray) {
    const randomIndexNum = paws.getRandomNumber(animalArray.length);
    return randomIndexNum;
}

function animalInfoTemplate(animal) {
    return `<section class="adoptionAnimal">
                <img src="${animal.image}" class="animalImage" alt="photo of a ${animal.category.slice(0, -1)}">
                <div class="animalInfo">   
                    <ul class="animalFacts">
                        <li><span class="bold_text">Name: </span><span id="petName">${animal.name}</span></li>
                        <li><span class="bold_text">Category: </span><span id="petCategory">${animal.category.slice(0, -1)}</span></li>
                        <li><span class="bold_text">Breed: </span><span id="petBreed">${animal.breed}</span></li>
                        <li><span class="bold_text">Sex: </span><span id="petSex">${animal.sex}</span></li>
                        <li><span class="bold_text">Weight: </span><span id="petWeight">${animal.weight}</span></li>
                        <li><span class="bold_text">Age: </span><span id="petAge">${animal.age}</span></li>
                        <li><span class="bold_text">Personality: </span><span id="petPersonality">${getPetPersonality(animal).trim().slice(0, -1)}</span></li>
                        <li><span class="bold_text">Color: </span><span id="petColor">${animal.color}</span></li>
                        <li><span class="bold_text">ID: </span><span id="petId">${animal.id}</span></li>
		            </ul> 
                </div>
            </section>`;
}

// Personality string for animalInfoTemplate()
function getPetPersonality(animal) {
    let personalityString = "";

    animal.personality.forEach(trait => {
        personalityString += trait + ", ";
    });
    return personalityString;
};

// To transform animal objects into html elements and insert them into  
// the home page, just before the Pet Care section
function renderAnimalInfo(animalList) {
    const petHtmlElement = document.querySelector("#petCare");
    let animalHtml = ``;

    animalList.map((animal) => {
        animalHtml += animalInfoTemplate(animal);
    })
    petHtmlElement.insertAdjacentHTML("beforebegin", animalHtml);
}

function initHome() {
    // get a random animal index from paws.animals
    const randomIndexNum = getRandomIndexNum(paws.animals);
    // get the associated animal info from the index position
    const randomAnimalInfo = paws.animals[randomIndexNum];
    // render the animal info to the webpage
    renderAnimalInfo([randomAnimalInfo]);
}

// Home page event Listener for loading of DOM content
document.addEventListener("DOMContentLoaded", function (event) {
    event.preventDefault();
    initHome();
})

// Search functions for the Home Page

function searchInputToLower() {
    // Get user input and convert it to lowercase. 
    const lowercaseInput = document.querySelector("#searchInput").value.toLowerCase();

    if (lowercaseInput !== "") {
        filterAnimals(lowercaseInput);
    }
}

// Check the search term against the "animals" list using: animal category, sex, or 
// personality trait   
function filterAnimals(query) {
    let filteredAnimals = paws.animals.filter(animal => {
        const categoryMatch = animal.category.toLowerCase().includes(query);
        const sexMatch = animal.sex.toLowerCase().match(new RegExp(`^${query}$`));
        const personalityMatch = animal.personality.find((item) => item.toLowerCase().includes(query));

        return categoryMatch || sexMatch || personalityMatch;
    })

    // Sort animal list alphabetically by name and render the filtered list to page 
    const sortedAnimalList = filteredAnimals.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

    removePreviousAnimals();

    if (sortedAnimalList.length > 0) {
        renderAnimalInfo(sortedAnimalList);
    } else {
        const formElement = document.querySelector("#searchForm");
        const message = animalNotFoundMessage();
        formElement.insertAdjacentHTML("afterend", message);
    }
}

// To remove any previously loaded animals before inserting the new ones
function removePreviousAnimals() {
    const sectionElements = document.querySelectorAll(".adoptionAnimal");
    sectionElements.forEach((item) => item.remove());
}

// To display an error message if the search item is not found
function animalNotFoundMessage() {
    return `<section class="adoptionAnimal">
    <div class="animalInfo">
        <p id="errorMessage">
            Search item not found. <br><br> Please try again with another item. 
        </p>
    </div>
    </section>`
}

// Event Listener for search button on home page
document.querySelector("#searchButton").addEventListener("click", function (event) {
    event.preventDefault();
    searchInputToLower();
});

