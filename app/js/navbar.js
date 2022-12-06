const navbar = document.querySelector(".header__navbar");
const burger = document.querySelector(".header__burger");
const popup = document.querySelector(".header__popup");
const links = document.querySelector(".header__list");

const close = () => {
    burger.classList.remove("active");
    navbar.classList.remove("active");
    popup.classList.remove("active");
};

burger.addEventListener('click', () => {
    burger.classList.toggle("active");
    navbar.classList.toggle("active");
    popup.classList.toggle("active");
});

popup.addEventListener('click', close);
links.addEventListener('click', e => {
    e.preventDefault();
    e.target.className.includes('header__link') && close();
})