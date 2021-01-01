const qbox = document.querySelectorAll(".qbox");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const answer = document.querySelector(".answer");

qbox.forEach(function (n, i) {
  n.addEventListener("click", function (e) {
    console.log(e.currentTarget);
    e.currentTarget.querySelector(".plus").classList.toggle("hide");
    e.currentTarget.querySelector(".minus").classList.toggle("hide");
    e.currentTarget.querySelector(".answer").classList.toggle("hide");
  });
});
