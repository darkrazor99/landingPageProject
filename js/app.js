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
const list = document.getElementById("navbar__list");
const sections = document.getElementsByTagName("section");

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
    // const sections = fragment.querySelectorAll("section");
    // select the navigation ul
    for (const section of sections) {
        const newLi = document.createElement('li');
        newLi.innerHTML = section.getAttribute('data-nav');
        newLi.setAttribute('class','menu__link') ;
        fragment.appendChild(newLi);
    }
    list.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
// needs work
function setActive(element){
    
    // remove the active status from the previously active element
    document.querySelector('your-active-class').classList.toggle('your-active-class');
    // make the current element active
    element.classList.toggle('your-active-class');
}
// Scroll to anchor ID using scrollTO event (done)
function scrollToElement(event){
    
    const sectionToScrollTo = event.target.innerHTML;

    for (const section of sections) {
        
        if( section.getAttribute('data-nav') === sectionToScrollTo) {
            section.scrollIntoView();
            break;
        }
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
document.addEventListener('DOMContentLoaded',genNav);

// Scroll to section on link click
list.addEventListener('click', scrollToElement);

// Set sections as active


