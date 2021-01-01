const closeBtn = document.querySelector(".close");
const btn = document.querySelector(".btn");

closeBtn.addEventListener("click", function () {
  document.querySelector(".main").classList.add("show");
});

btn.addEventListener("click", function () {
  document.querySelector(".main").classList.toggle("show");
});
