const carouselImages = document.querySelector('.carousel-images');
const slides = document.querySelectorAll('.slide');
let index = 0;

function moveCarousel() {
    index++;
    if (index >= slides.length) {
        index = 0; // Voltar ao primeiro slide
    }
    const offset = -index * 100; // Calcular o deslocamento
    carouselImages.style.transform = `translateX(${offset}%)`;
}

// Intervalo de 3 segundos para trocar o slide
setInterval(moveCarousel, 3000);
