/*JavaScript file linked to the coolpics webpage*/
const menuButton = document.querySelector("#menuButton");
const gallery = document.querySelector(".gallery");

// let events = [];

function toggleMenu() {
    const allListItems = document.querySelectorAll("li");

    allListItems.forEach(li => {
        li.classList.toggle("hide");
    });
}

menuButton.addEventListener("click", toggleMenu)
window.addEventListener("resize", handleResize)
window.addEventListener("load", handleResize)
gallery.addEventListener("click", viewHandler)


function handleResize() {
    const pgWidth = document.documentElement.clientWidth;
    const allListItems = document.querySelectorAll("li");
    
    if (pgWidth > 1000) {
        allListItems.forEach(li => {
            li.classList.remove("hide");
        });
    } else {
        allListItems.forEach(li => {
            li.classList.add("hide");
        });
    }
}

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    
    // create a variable to hold the element that was clicked on from event.target
        const clickImg = event.target;    //target picture clicked on
        console.log(clickImg);
	// get the src attribute from that element and 'split' it on the "-"
        const imgSrc = clickImg.src;   //get the src attribute from the image data 
        console.log(imgSrc);
        
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
        const splitSource = imgSrc.split("-");    //split the source into 2 parts in an array   
        const firstPart = splitSource[0];      //take the first part (item) in the array
        const modifiedSrc = firstPart + "-full.jpeg";    //append the new ending to the first item
        console.log("Modified src:", modifiedSrc);
        // insert the viewerTemplate into the top of the body element
	    // (element.insertAdjacentHTML("afterbegin", htmltoinsert));
        figure.insertAdjacentHTML("", "modifiedSrc");
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
}

// function closeViewer() {

// }

