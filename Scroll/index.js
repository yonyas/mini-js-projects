const date = document.querySelector(".date");

date.textContent = new Date().getFullYear();

// nav
const toggleMenu = document.querySelector(".toggle-menu");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

toggleMenu.addEventListener("click", function () {
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// fixed nav
const nav = document.querySelector("nav");
const NAV_INVISIBLE_HEIGHT = 90;
const toTopBtn = document.querySelector(".to-top-btn");

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= NAV_INVISIBLE_HEIGHT) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }

  if (window.pageYOffset >= 500) {
    toTopBtn.classList.remove("hide");
  } else {
    toTopBtn.classList.add("hide");
  }
});
