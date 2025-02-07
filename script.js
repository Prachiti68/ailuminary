// Mobile navigation
document.getElementById("menu-toggle").addEventListener("click", function() {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

//Animations
AOS.init({
  duration: 1000,  // Animation duration (in ms)
  easing: 'ease-in-out',  // Easing function
  once: true,  // Animation happens only once
  mirror: false  // Disable animation on scroll up
});

