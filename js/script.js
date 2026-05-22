"use strict"
// Mobile menue

const menuBarOpen = document.querySelector(".home-nav-link");
const menuToggle = document.querySelector(".menue-bar-bx");

menuToggle.addEventListener("click", () => {
    menuBarOpen.classList.toggle("active");
    menuToggle.classList.toggle("active");
});


const innerMenuToggle = document.querySelector(".inner-menue");
const innerMenuBarOpen = document.querySelector(".home-nav-link ul .drop-down-bx .drop-down-menue");

innerMenuToggle.addEventListener("click", () => {
    innerMenuBarOpen.classList.toggle("active");
});
