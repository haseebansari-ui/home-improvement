"use strict"


// Mobile menue

const menuBarOpen = document.querySelector(".home-nav-link");
const menuToggle = document.querySelector(".menue-bar-bx");
const closeHomeIcone = document.querySelector(".hm-menue-bar-bx");


if(menuToggle){
    menuToggle.addEventListener("click", ()=>{

        menuBarOpen.classList.add("active");
    })   
} 
if(closeHomeIcone){
    closeHomeIcone.addEventListener("click", ()=>{

        menuBarOpen.classList.remove("active");
    })
}



// Inner menu

const innerMenuToggle = document.querySelector(".inner-menue");
const innerMenuBarOpen = document.querySelector(".home-nav-link ul .drop-down-bx .drop-down-menue");


if(innerMenuToggle){
    innerMenuToggle.addEventListener("click", () => {
    innerMenuBarOpen.classList.toggle("active");
});
}



// FAQ

const accordian = document.querySelectorAll('.contentBx');

for (let i = 0; i < accordian.length; i++) {
	accordian[i].addEventListener('click', function () {
		this.classList.toggle('active');
	});
}

// ===============
// 	Scroll Header
// ===============

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    header.classList.add("h-scroll");
  } else {
    header.classList.remove("h-scroll");
  }
});


// FORM SUBMIT

const quoteForm = document.getElementById("quoteForm");
const successMessage = document.getElementById("successMessage");

if (quoteForm) {

    quoteForm.addEventListener("submit", function (e) {
        console.log(e);
        

        // STOP PAGE RELOAD
        e.preventDefault();

        // SHOW SUCCESS MESSAGE
        successMessage.style.display = "block";

        // RESET FORM
        quoteForm.reset();

        // HIDE MESSAGE AFTER 4 SEC
        setTimeout(() => {

            successMessage.style.display = "none";

        }, 4000);

    });

}