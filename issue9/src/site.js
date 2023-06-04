//Function for mobile menu
function toggleMenu() {
    let div = document.querySelector(".nav-btn-container");
    if (div.style.display === "flex") {
        div.style.display = "none";
    } else {
        div.style.display = "flex";
    }
};

//About.html slideshow function
function showSlides() {
    let slides = document.querySelectorAll(".slideshow-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000);
};

//Mobile site nav bar
let menuBtn = document.querySelector(".mobile-menu");
menuBtn.addEventListener('click', toggleMenu);

//About.html slideshow call
let slideIndex = 0;
showSlides();