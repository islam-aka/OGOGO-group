import Glider from 'glider-js';
import { media } from "./utils.js";
const aboutWrapper = document.querySelector(".about__track");

window.addEventListener('load', () => {
    if (media("(min-width: 1200px)")) {
        new Glider(aboutWrapper, {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: ".about__dots",
            arrows: {
                prev: '.about__wrapper--prev',
                next: '.about__wrapper--next',
            },
        });
    } else if (media("(max-width: 1200px)")) {
        new Glider(aboutWrapper, {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: ".about__dots",
            arrows: {
                prev: '.about__wrapper--prev',
                next: '.about__wrapper--next',
            },
        });
    } else if (media("(max-width: 992px)")) {
        new Glider(aboutWrapper, {
            slidesToShow: 1,
            slidesToScroll: 3,
            dots: ".about__dots",
            arrows: {
                prev: '.about__wrapper--prev',
                next: '.about__wrapper--next',
            },
        });
    }
});

const wrapper = document.querySelector(".about__phone").offsetWidth + 20;
const track   = document.querySelector(".about__phone--track");
const boxes   = document.querySelectorAll(".about__phone--box").length - 1;
const nextBtn = document.querySelector(".about__phone--next");
const prevBtn = document.querySelector(".about__phone--prev");

let position = 0;

nextBtn.addEventListener('click', () => {
    position === wrapper * boxes ? position = 0 : position += wrapper;
    track.style.transform = `translate(-${position}px)`;
});

prevBtn.addEventListener('click', () => {
    position === 0 ? position = wrapper * boxes : position -= wrapper;
    track.style.transform = `translate(-${position}px)`;
});