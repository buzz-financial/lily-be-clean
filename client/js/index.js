const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
});

const slides = document.querySelectorAll('.carousel-slide');
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');

let currentIndex = 0;

function updateCarousel() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active', 'left', 'right', 'hidden');

    if (index === currentIndex) {
      slide.classList.add('active');
    } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
      slide.classList.add('left');
    } else if (index === (currentIndex + 1) % slides.length) {
      slide.classList.add('right');
    } else {
      slide.classList.add('hidden');
    }
  });
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

// optional autoplay
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}, 5000);

window.addEventListener('DOMContentLoaded', updateCarousel);
