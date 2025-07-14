document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.certifications-carousel');
    const certItems = document.querySelectorAll('.cert-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + certItems.length) % certItems.length;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % certItems.length;
        updateCarousel();
    });
});
