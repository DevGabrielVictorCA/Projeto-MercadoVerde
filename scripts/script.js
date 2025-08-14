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


const hamburgerBtn = document.querySelector('.menu-hamburger');
const menu = document.querySelector('.menu');
hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open'); 
    menu.classList.toggle('open')
})

const listaMenu = document.querySelectorAll('.lista-menu');
listaMenu.forEach((item) =>{
    item.addEventListener('click', function(){
        hamburgerBtn.classList.remove('open'); 
        menu.classList.remove('open')
    })
})