const allBtn = document.querySelector(".allBtn");
const breakfastBtn = document.querySelector(".breakfastBtn");
const lunchBtn = document.querySelector(".lunchBtn");
const shakesBtn = document.querySelector(".shakesBtn");
const dinnerBtn = document.querySelector(".dinnerBtn");

const menu = document.querySelectorAll(".menu");

menu.forEach(function (menubox, i) {
  allBtn.addEventListener("click", function () {
    menubox.classList.remove("hide");
    menubox.classList.add("show");
  });
  showContents(breakfastBtn, "breakfast", menubox);
  showContents(lunchBtn, "lunch", menubox);
  showContents(shakesBtn, "shakes", menubox);
  showContents(dinnerBtn, "dinner", menubox);

  //   dinnerBtn.addEventListener("click", function () {
  //     menubox.classList.remove("show");
  //     menubox.classList.add("hide");
  //     if (menubox.classList.contains("dinner")) {
  //       menubox.classList.remove("hide");
  //       menubox.classList.add("show");
  //     }
  //   });
});

function showContents(btn, contents, menubox) {
  btn.addEventListener("click", function () {
    menubox.classList.remove("show");
    menubox.classList.add("hide");
    if (menubox.classList.contains(contents)) {
      menubox.classList.remove("hide");
      menubox.classList.add("show");
    }
  });
}
