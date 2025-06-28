  // =============================
//   THEME & COLOR CONTROLS
// =============================

// Grab references to DOM elements
const root = document.documentElement;                      // Root <html> element to update CSS variables
const darkToggle = document.getElementById("toggleDark");   // Button for toggling dark mode
const hueSelect = document.getElementById("themeHue");      // Dropdown to change theme color (hue)
const themeIcon = document.getElementById("themeIcon");     // The 🌙/☀️ icon inside the toggle button

// ================================
// 1. Apply saved preferences on page load
// ================================
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");        // 'dark' or 'light'
  const savedHue = localStorage.getItem("theme-hue");      // hue value (e.g. 210)

  // ✅ Apply dark mode ONLY if saved by user — light is the default
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");             // Add class to activate dark theme
    themeIcon.textContent = "🌙 " ;                          // Show sun icon when in dark mode
  } else {
    themeIcon.textContent = "☀️";                          // Default: moon icon for light theme
  }

  //  Apply saved hue if it exists
  if (savedHue) {
    root.style.setProperty("--theme-hue", savedHue);       // Set the --theme-hue CSS variable
    hueSelect.value = savedHue;                            // Set dropdown value to match
  }
});

// ================================
// 2. Toggle theme manually (user click)
// ================================
darkToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");    // Toggle class on body

  // Update icon based on new theme
  themeIcon.textContent = isDark ? "🌙" : "☀️" ;

  // Save the preference in localStorage
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ================================
// 3. Handle hue color change
// ================================
hueSelect.addEventListener("change", (e) => {
  const hue = e.target.value;                                      // Get selected hue value
  root.style.setProperty("--theme-hue", hue);                      // Update the CSS variable
  localStorage.setItem("theme-hue", hue);                          // Save hue preference
});

  
/*===================================== DARK THEME =========================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// PREVEIOSLY SELECTED TOPIC (checking from local storage)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun'

//We need to validate if the user has previously chosen a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon'?'add':'remove'](iconTheme)
}

// Activate/ deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //ADD or remove the dark/light icon -- icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //We save the theme and the current icon that the user has chosen
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
console.log("THEME SETTING IS WORKING!")
*/
// =============================
// MENU SHOW / HIDE HANDLING
// =============================

// =============================
// MENU SHOW / HIDE HANDLING
// =============================

// ============================
// MOBILE MENU TOGGLE CONTROL
// ============================

// Grab DOM elements
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navbarNav = document.getElementById('navbarNav');

// Show mobile menu
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navbarNav.classList.add('show-menu');
  });
}

// Hide mobile menu
if(navClose) {

  navClose.addEventListener('click', () => {
    navbarNav.classList.remove('show-menu');
  });
}

// Hide menu when a nav link is clicked (optional improvement)
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => link.addEventListener('click', () => {
  navbarNav.classList.remove('show-menu');
}));
//===================================== Typewriter Effect =========================


// ============================
// Typewriter Text Animation
// ============================

// Initialize the Typewriter effect on the element with ID #typewriter
const typewriter = new Typewriter('#typewriter', {
  strings: [
    'Heman Bassi',               // Your name
    'Web Developer',             // Role 1
    'Power Apps Developer',      // Role 2
    'e-Tutor',                   // Role 3
    'Data Analyst'               // Role 4
  ],
  autoStart: true,               // Start typing automatically on page load
  loop: true,                    // Keep looping the strings forever
  delay: 75,                     // Delay between each character typed
  deleteSpeed: 50,               // Speed of deleting characters
  cursor: '|'                    // The cursor style used during typing
});

// Confirm in the console that the typewriter is active
console.log("✅ Typewriter effect is active!");


//===================================== Portfolio Swiper =========================

var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel:{
        invert: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
  });
console.log("Swiper is working!")


//===================================== SCROLL UP =========================
function scrollUp(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll higher than 560 viewpoint /height , then the scroll up icon showld appear and on clicking should reach top of the page
    if(this.scrollY >= 560) {
        scrollup.classList.add('show-scroll');
    }
    else {
        scrollup.classList.remove('show-scroll')
    }
    console.log("Scroll up being called and working!")
}
window.addEventListener('scroll', scrollUp)

//===================================== SCROLL SECTION ACTIVE HIGHLIGHT =========================

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })


    console.log("Section highlight working!")
}
window.addEventListener('scroll', scrollActive)