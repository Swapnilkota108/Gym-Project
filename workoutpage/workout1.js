const menuIcon = document.querySelector(".icon-tabler-menu-2");
const menu = document.querySelector(".header-menu");
const closeMenu = document.querySelector(".icon-tabler-x");
const body = document.getElementsByName("body");
const menuAuth = document.querySelector(".menu-auth-elements")

menuIcon.addEventListener('click',()=>{
    menu.style.transform = `translateX(${0})`;
    body.style.backgroundColor = "black";
})

closeMenu.addEventListener("click",()=>{
    menu.style.transform = `translateX(${100}%)`;
})