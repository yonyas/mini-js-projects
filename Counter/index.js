const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
const number = document.querySelector(".number");
const btn = document.querySelectorAll(".btn");

var changeColor = function () {
  if (number.textContent < 0) {
    number.style.color = "red";
  } else if (number.textContent > 0) {
    number.style.color = "green";
  } else {
    number.style.color = "black";
  }
};

var changeNum = function () {};

btn.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.textContent === "DECREASE") {
    } else if (button.textContent === "RESET") {
    } else if (button.textContent === "INCREASE") {
    }
  });
});
