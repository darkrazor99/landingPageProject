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
const navList = document.getElementById("navbar__list");
const sections = document.getElementsByTagName("section");

// options for observer depending on screen width and height
let options;
if (window.innerWidth > 700) {
    options = {
        rootMargin:'-150px',
        threshold : 0.35
    }
} else if (window.innerWidth === 540 && window.innerHeight === 720)  { 
    options = {
        rootMargin: '0px',
        threshold : 1
    }
} else if (window.innerWidth > 540) {
    options = {
        rootMargin: '-100px',
        threshold : 0.40
    
    }
} else {
    options = {
        rootMargin: '-50px',
        threshold : 0.30
    }
}

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function hideNav(){
        document.querySelector('.page__header').style.opacity  = 0;
        setTimeout(hideNav,6000);
}

function showNav(){
    document.querySelector('.page__header').style.opacity = 1;
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

/**
* @description Generates the navigation menu for a landing page
*/
function genNav(){
    
    const fragment = document.createDocumentFragment();
    for(let i = 0; i < sections.length; i++){
        const newLi = document.createElement('li');
        newLi.innerHTML = sections[i].getAttribute('data-nav');
        newLi.setAttribute('class','menu__link') ;
        if(i===0){
            newLi.classList.toggle('active-link');
        }
        fragment.appendChild(newLi);
    }
    navList.appendChild(fragment);
}

/**
* @description Adds or removes an active class from an element
* @param {list of IntersectionObserverEntry} entries
* @param {IntersectionObserver} observer
*/
function setActive(entries, observer){
        
    for (const entry of entries) {

        if (entry.isIntersecting){
            // remove the active status from the previously active element and link
            document.querySelector('.your-active-class').classList.toggle('your-active-class');
            document.querySelector('.active-link').classList.toggle('active-link');
            // make the current element and link active
            entry.target.classList.toggle('your-active-class');
            const lis = document.querySelectorAll('li');
            for (const li of lis) {
                if(entry.target.getAttribute('data-nav') === li.innerHTML) {
                    li.classList.toggle('active-link');
                    break;
                }
            }
        }
    }
    
}

/**
* @description Scrolls to an element when it's link which is in the navMenu is clicked
* @param {object} event
*/
function scrollToElement(event){
    
    const sectionToScrollTo = event.target.innerHTML;

    for (const section of sections) {
        
        if( section.getAttribute('data-nav') === sectionToScrollTo) {
            section.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
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
navList.addEventListener('click', scrollToElement);

// Set sections as active
// I used observer
let observer = new IntersectionObserver(setActive, options);

// now to make the observer observe our sections
for (const section of sections) {
    observer.observe(section);
}
 
hideNav();
