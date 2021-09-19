/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav (done)
function genNav(){
    
    const fragment = document.createDocumentFragment();
    // select all the sections
    const sections = document.getElementsByTagName("section");
    // const sections = fragment.querySelectorAll("section");
    // select the navigation ul
    const list = document.getElementById("navbar__list");
    for (const section of sections) {
        const newLi = document.createElement('li');
        newLi.innerHTML = section.getAttribute('data-nav');
        newLi.setAttribute('class','menu__link') ;
        fragment.appendChild(newLi);
    }
    list.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
function setActive(element){
    // remove the active status from the previously active element
    document.querySelector('your-active-class').classList.toggle('your-active-class');
    // make the current element active
    element.classList.toggle('your-active-class');
}
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
document.addEventListener('DOMContentLoaded',genNav);

// Scroll to section on link click

// Set sections as active


