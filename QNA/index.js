const qboxs = document.querySelectorAll(".qbox");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const answer = document.querySelector(".answer");

qboxs.forEach(function (qbox, i) {
  qbox.addEventListener("click", function (e) {
    // console.log(qboxs);
    // console.log(e.currentTarget);
    // console.log(qboxs[0] === e.currentTarget);
    e.currentTarget.querySelector(".plus").classList.toggle("hide");
    e.currentTarget.querySelector(".minus").classList.toggle("hide");
    e.currentTarget.querySelector(".answer").classList.toggle("hide");
    qboxs.forEach(function (item) {
      if (item !== e.currentTarget) {
        item.querySelector(".answer").classList.add("hide");
      }
    });
  });
});
