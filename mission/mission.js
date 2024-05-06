// JavaScript file for Mission 2 assignment

const themeSelector = document.querySelector('select'); 
themeSelector.addEventListener('change', changeTheme);

function changeTheme() {
    if (themeSelector.value === 'dark') { 
        document.querySelector('body').setAttribute('class', 'dark');
        document.querySelector('.logo').setAttribute('src', 'byui-logo_white.png');
    } else {
        document.querySelector('body').removeAttribute('class', 'dark');  
        document.querySelector('.logo').setAttribute('src', 'byui-logo_blue.webp'); 
    }
}


//check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!

// if the value is dark then:
// add the dark class to the body
// change the source of the logo to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.

// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.

