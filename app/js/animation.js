import gsap from "gsap";
import { media } from './utils.js';
gsap.registerPlugin(ScrollTrigger);


window.addEventListener('load', () => {
    if (media("(min-width: 993px)")) {
        gsap.from('.header__item', { duration: 0.4, x: -1500, stagger: 0.2 });
        gsap.from('.hero__img', { duration: 1, opacity: 0, x: -1000 });
        gsap.from('.taxi__img', {
            duration: 0.7, delay: 0.5, y: -1000, opacity: 0, scrollTrigger: { trigger: ".taxi__img" },
        });
        gsap.from('.taxi__text', {
            duration: 0.7, y: 1000, opacity: 0, scrollTrigger: { trigger: ".taxi__img" },
        });
        gsap.from('.academy__content', {
            duration: 0.7, x: 1000, opacity: 0, scrollTrigger: { trigger: ".taxi" },
        });
        gsap.from('.academy__video', {
            duration: 0.7, x: -1000, opacity: 0, scrollTrigger: { trigger: ".taxi" },
        });
        gsap.from('.development__img img', {
            duration: 0.5, x: -1000, opacity: 0, stagger: 0.1, scrollTrigger: { trigger: ".academy" },
        });
        gsap.from('.news__box--one', {
            duration: 0.5, x: -1000, opacity: 0, scrollTrigger: { trigger: ".teems" },
        });
        gsap.from('.news__box--two', {
            duration: 0.7, x: 1000, opacity: 0, scrollTrigger: { trigger: ".teems" },
        });
        gsap.from('.news__box--three', {
            duration: 0.9, x: -1000, opacity: 0, scrollTrigger: { trigger: ".teems" },
        });
        gsap.from('.news__box--four', {
            duration: 1, x: 1000, opacity: 0, scrollTrigger: { trigger: ".teems" },
        });
    } else {
        gsap.from('.hero__title', { duration: 0.7, y: -1500 });
        gsap.from('.hero__btns',  { duration: 0.7, y: 1500  });
        gsap.from('.taxi__content--img', {
            duration: 0.7, delay: 0.5, y: -1000, opacity: 0, 
            scrollTrigger: { trigger: ".taxi__text" },
        });
        gsap.from('.news__box--one', {
            duration: 0.5, x: -1000, opacity: 0, scrollTrigger: { trigger: ".news__box--one" },
        });
        gsap.from('.news__box--two', {
            duration: 0.7, x: 1000, opacity: 0, scrollTrigger: { trigger: ".news__box--one" },
        });
        gsap.from('.news__box--three', {
            duration: 0.9, x: -1000, opacity: 0, scrollTrigger: { trigger: ".news__box--one" },
        });
        gsap.from('.news__box--four', {
            duration: 1, x: 1000, opacity: 0, scrollTrigger: { trigger: ".news__box--one" },
        });
    }
});