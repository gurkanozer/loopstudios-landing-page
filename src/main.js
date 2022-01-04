import "./style/main.css";

const header = document.querySelector("header");
const navbar = document.querySelector(".navbar");
const btnToggle = document.querySelector(".header__toggle-btn");


btnToggle.addEventListener("click", ()=>{
    btnToggle.classList.toggle("active");
    navbar.classList.toggle("active");
    header.classList.toggle("active");
});

// Scroll Event
document.addEventListener("scroll",()=>{
    let scrollPos = window.scrollY;
    if(scrollPos > 180)
        header.classList.add("scrolled");
    else header.classList.remove("scrolled");
    });

//Window Resize

window.addEventListener('resize', ()=>{
    navbar.classList.remove("active");
    navbar.classList.remove("active");
    header.classList.remove("active");
});