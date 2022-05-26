const menu = document.querySelector(".nav__menu");
const close = document.querySelector(".nav__close");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.add("nav--open");
});

close.addEventListener("click", () => {
  nav.classList.remove("nav--open");
});
