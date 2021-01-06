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

// scroll to the page
const navHeight = nav.getBoundingClientRect().height;
const linkBtns = document.querySelectorAll(".linkBtns");

linkBtns.forEach(function (linkBtn) {
  linkBtn.addEventListener("click", function (e) {
    e.preventDefault();
    // 현재 클릭링크의 about,,string 잡아서 높이 구하기
    const id = e.currentTarget.getAttribute("href").slice(1);
    const pageLink = document.querySelector(`#${id}`);
    let fixedNav = document
      .querySelector("nav")
      .classList.contains("fixed-nav");
    let height = pageLink.offsetTop;

    if (!fixedNav) {
      height -= navHeight;
    } else {
      height -= navHeight;
    }

    window.scrollTo({
      left: 0,
      top: height,
    });
  });
});
