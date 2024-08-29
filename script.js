const slides = document.querySelectorAll('.header-slideshow img');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.classList.add('inactive');
        if (i === index) {
            slide.classList.remove('inactive');
            slide.classList.add('active');
        }
    });
}

document.getElementById("nextSlide").addEventListener("click", function() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.getElementById("prevSlide").addEventListener("click", function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Optional: Continue automatic slide change even with manual controls
setInterval(function() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);


// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.getElementById("contactToggleBtn").addEventListener("click", function() {
    // Toggle the active class on button
    this.classList.toggle("active");
    
    // Toggle the visibility of the expanded contact info
    var contactInfo = document.getElementById("contactInfoExpanded");
    contactInfo.classList.toggle("active");
});