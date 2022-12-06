import { position } from './utils.js';
const links = document.querySelector('.header__list');
const about = document.querySelector('.about');
const projects = document.querySelector('.taxi');
const news = document.querySelector('.news');
const teems = document.querySelector('.teems');

links.addEventListener('click', e => {
    e.preventDefault();
    const text = e.target.innerText;
    if (text === "О нас") {
        window.scroll(0, position(about));
    } else if (text === "Наши проекты") {
        window.scroll(0, position(projects));
    } else if (text === "Последние новости") {
        window.scroll(0, position(news));
    } else if (text === "Наша команда") {
        window.scroll(0, position(teems));
    }
});


