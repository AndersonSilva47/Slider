
let totalSlides = document.querySelectorAll('.slider--item').length;
let heightSlider = document.querySelector('.slider').clientHeight;

let currentSlide = 0;

let sliderWidth = document.querySelector('.slider').clientWidth; //CONFIGURAÇÃO PARA ESPAÇO FIXO;

// document.querySelector('.slot--width').style.width = `calc(100vw * ${totalSlides})`; //CONFIGURAÇÃO PARA TELA TODA;

document.querySelector('.slot--width').style.width = `calc(${sliderWidth} * ${totalSlides}px)` //CONFIGURAÇÃO PARA ESPAÇO FIXO;


document.querySelector('.slider--controls').style.width = `${sliderWidth}px`; //CONFIGURAÇÃO PARA ESPAÇO FIXO;

document.querySelector('.slider--controls').style.height = `${heightSlider}px`;




function goPrev() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = totalSlides - 1;

    updateMargin();
}

function goNext() {
    currentSlide++;
    if (currentSlide > (totalSlides - 1)) currentSlide = 0;

    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    
    let newMargin = (currentSlide * sliderItemWidth);

    document.querySelector('.slot--width').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 4000)