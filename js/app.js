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
const  sections=document.querySelectorAll('section');
const navLink=document.querySelectorAll('navbar__list li a');

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

function CreateMenu()
{
    let docFargment=document.createDocumentFragment();
    for(let section of sections)
    {
        let listItem=document.createElement('li');
        listItem.classList.add("navItem");
        let anchor=document.createElement('a');
        anchor.innerHTML=document.getElementById(section.id).getAttribute('data-nav');
        anchor.href='#' + section.id;
        anchor.id='Nav'+section.id;
        //if(section.id===sections[0].id){listItem.classList.add('activeNav');}
      
        anchor.addEventListener('click', function(event)
        {
            event.preventDefault();
            section.scrollIntoView({behavior: "smooth", block: "center"}); 

        }); 
        listItem.appendChild(anchor);
        docFargment.appendChild(listItem);

    }
    document.getElementById('navbar__list').appendChild(docFargment);
}
CreateMenu();




const navigationOptions = {
    rootMargin: '-50px 0px -55%'
  };
  
  let observer = new IntersectionObserver(function (entries, self) {
    entries.forEach(entry => {
     // console.log(entry);
      if (entry.isIntersecting) {
        toggleActiveState(entry); 
      }
    });
  }, navigationOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  function toggleActiveState(entry) {
    const id = entry.target.id;
    const currentlyActive = document.querySelector('.theActive');
    const shouldBeActive = document.getElementById(id);

    const currentlyActiveNav = document.querySelector('.activeNav');
    const shouldBeActiveNav = document.getElementById('Nav'+id).parentElement;
    if (currentlyActive) {
      currentlyActive.classList.remove('theActive');
    }
    if (shouldBeActive) {
      shouldBeActive.classList.add('theActive');
    }

    if (currentlyActiveNav) {
        currentlyActiveNav.classList.remove('activeNav');
      }
      if (shouldBeActiveNav) {
        shouldBeActiveNav.classList.add('activeNav');
      }
  }


  function myMenu(event) {
    debugger
    event.preventDefault(); 
    document.getElementById('navbar__list').classList.toggle('open')
   
  }



