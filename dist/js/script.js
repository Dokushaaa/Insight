var navbar = document.getElementById("navbar");

const burgir = document.querySelector(".burgir__menu");
const headerA = document.querySelector(".header__action");
window.onscroll = function () {
  myFunction();
};
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("shabulords");
  } else {
    navbar.classList.remove("shabulords");
  }
}
const links = document.querySelectorAll(".links__item h4");
links.forEach((link) => {
  link.addEventListener("click", () => {
    link.querySelector("i").classList.toggle("open");
    link.nextElementSibling.classList.toggle("open");
  });
});

var sticky = navbar.offsetTop;
burgir.addEventListener("click", () =>{
    burgir.classList.toggle("open");
    headerA.classList.toggle("open");
});
// for projects



