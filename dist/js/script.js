/* Burger Button */
const burger = document.querySelector(".burger__menu");
const headerA = document.querySelector(".header__action");
burger.addEventListener("click", () =>{
    burger.classList.toggle("open");
    headerA.classList.toggle("open");
})

const header = document.querySelector(".header");
window.console.log(scrollY);
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.classList.add("dark");
  } else {
    header.classList.remove("dark");
  }
});