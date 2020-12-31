const barBtn = document.querySelector(".bar-btn");
const gnb = document.querySelector(".gnb");

barBtn.addEventListener("click", function () {
  //   if (gnb.classList.contains("hidden")) {
  //     gnb.classList.remove("hidden");
  //     gnb.classList.add("show");
  //   } else {
  //     gnb.classList.remove("show");

  //     gnb.classList.add("hidden");
  //   }
  gnb.classList.toggle("show");
});
