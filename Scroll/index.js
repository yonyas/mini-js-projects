const date = document.querySelector(".date");

date.textContent = new Date().getFullYear();

// nav
const toggleMenu = document.querySelector(".toggle-menu");
const links = document.querySelector(".links");

toggleMenu.addEventListener("click", function () {
  links.classList.toggle("show-links");
  links.classList.toggle("hide-links");
});
