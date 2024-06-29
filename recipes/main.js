//main javascript file for recipebook webpage

import recipes from './recipes.mjs';

// generate a number between 0-8 to match # of recipes in our array
function randomNumber(num) {
    return Math.floor(Math.random()*8); // will give a number between 0-7 (inclusive)
}

function getRandomRecipe(list) {
    const listLength = recipes.length;
    const randomRecipeNum = Math.floor(Math.random()*listLength);
    return list[randomRecipeNum];
}


function recipeTemplate(recipe) {
    return `<section class="recipe">
    <img src="${recipe.image}" class="recipeImage" alt="Image of ${recipe.name}"/>
    <div class="recipeInfo">
        <ul class="recipeTags">
            ${tagsTemplate(recipe)}
        </ul>
        <h2><a href="#">${recipe.name}</a></h2>
            ${ratingTemplate(recipe.rating)}
        <p id="recipeDescription">
            ${recipe.description} 
        </p>
    </div>
    </section>`    
}

function tagsTemplate(recipe) {
	// loop through the tags list and transform the strings to HTML
        let tagHtml = ``;
        recipe.tags.forEach((tag) => {
            tagHtml +=`<li>${tag}</li>`;
        });
        
	    return tagHtml;
}


function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
    >`
    // our ratings are always out of 5, so create a for loop from 1 to 5
    // 		check to see if the current index of the loop is less than our rating
    // 		if so then output a filled star
    // 		else output an empty star
    let stars = ``; 
    for (let i=1; i<6; i++) {
        if (rating >= i) {
            stars += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            stars += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;    
        }
    } 
    html += stars;
    // 	after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const formElement = document.querySelector("form");
    
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings    
    let recipeHtml = ``;
    
    recipeList.forEach((recipe) => {
        recipeHtml += recipeTemplate(recipe);
    })
        
    // Set the HTML strings as the innerHTML of our output element.
    formElement.insertAdjacentHTML("afterend", recipeHtml);
}

function init() {
    // get a random recipe
    const recipe = getRandomRecipe(recipes);
    // render the recipe with renderRecipes.
    renderRecipes([recipe]);
}

document.addEventListener("DOMContentLoaded", function() {
    init();
});

document.querySelector("#searchButton").addEventListener("click", function(event) {
    event.preventDefault();
    searchHandler();
});

function searchHandler() {
    // use event.preventDefault() if problems with page reloading
    
    // Get user input and convert it to lowercase. 
    const lowerUserInput = document.querySelector(".searchInput").value.toLowerCase();
    
    if (lowerUserInput !== "") {
            filterRecipes(lowerUserInput);
    }

    // use this if you want to refresh a recipe by pushing the search button if no user input
    // if (lowerUserInput !== "") {
    //     filterRecipes(lowerUserInput);
    // } else {
    //     removePreviousRecipes();
    //     init();
    // }    
}

// Pass the query string into a filterRecipes(query) function
// that uses Array.filter to filter our recipes.
// Check the search term against the name, descriptions, tag, or ingredient list. 
function filterRecipes(query) {
    let filteredRecipes = recipes.filter(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(query); 
        const descriptionMatch = recipe.description.toLowerCase().includes(query); 
        const ingredientMatch = recipe.recipeIngredient.find((item) => item.toLowerCase().includes(query)); 
        const tagMatch = recipe.tags.find((item) => item.toLowerCase().includes(query));

        return nameMatch || descriptionMatch || ingredientMatch || tagMatch;
    })
        
    // Sort the recipes list by name alphabetically. 
    const sortedRecipeList = filteredRecipes.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    // console.log(sortedRecipeList);
    // Render the filtered list of recipes to the page. 
    removePreviousRecipes();

    if (sortedRecipeList.length > 0 ) {
            renderRecipes(sortedRecipeList);
    } else {
        const formElement = document.querySelector("form");
        const message = recipeNotFoundMessage();
        formElement.insertAdjacentHTML("afterend", message);
    }
}

//function to remove previously loaded recipes before inserting new ones
function removePreviousRecipes() {
    const sectionElements = document.querySelectorAll(".recipe");
    sectionElements.forEach((item) => item.remove()); 
}

//function to display error message if search item is not found in recipes
function recipeNotFoundMessage() {
    return `<section id="recipeDetails" class="recipe">
    <div class="recipeInfo">
        <p id="errorMessage">
            Search item not found. <br> Please try again with another item. 
        </p>
    </div>
    </section>`    

}

