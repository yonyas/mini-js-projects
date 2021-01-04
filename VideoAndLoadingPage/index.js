const preloader = document.querySelector(".preloader");
const video = document.querySelector(".video-container");
const switchBtn = document.querySelector(".switch-btn");
const switchSlide = document.querySelector(".switch");

window.addEventListener("DOMContentLoaded", function () {
  preloader.classList.add("hidden");
});

switchBtn.addEventListener("click", function () {
  if (switchSlide.classList.contains("slide")) {
    video.play();
    switchSlide.classList.remove("slide");
  } else {
    video.pause();
    switchSlide.classList.add("slide");
  }
});
