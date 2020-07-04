var navbarToggler = document.getElementById("btn");
var navigationDiv = document.querySelector(".mobileNav");
var body = document.querySelector("body");
var show = document.getElementById("show");
var hide = document.getElementById("hide");

navbarToggler.addEventListener("click", displayNav);

function displayNav() {
    navigationDiv.classList.toggle("display");
    body.classList.toggle("overflow");
    show.classList.toggle("display");
    show.classList.toggle("hide");
    hide.classList.toggle("hide");
    hide.classList.toggle("display");
}