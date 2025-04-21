document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle mobile menu visibility on hamburger click
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
    
    // Close the menu after clicking a nav link (for one-page navigation on mobile)
    document.querySelectorAll('.nav-links a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
      });
    });
    
    // Initialize AOS library for scroll animations
    AOS.init();
  });
  