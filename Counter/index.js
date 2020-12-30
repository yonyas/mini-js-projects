const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
const number = document.querySelector(".number");
const btn = document.querySelectorAll(".btn");

const changeColor = function () {
  if (number.textContent < 0) {
    number.style.color = "red";
  } else if (number.textContent > 0) {
    number.style.color = "green";
  } else {
    number.style.color = "black";
  }
};

function changeNum() {
  let num = 0;

  return {
    increase() {
      num++;
      number.textContent = num;
    },
    decrease() {
      num--;
      number.textContent = num;
    },
    reset() {
      num = 0;
      number.textContent = num;
    },
  };
}
var num = changeNum();

btn.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.textContent === "DECREASE") {
      num.decrease();
      changeColor();
    } else if (button.textContent === "RESET") {
      num.reset();
      changeColor();
    } else if (button.textContent === "INCREASE") {
      num.increase();
      changeColor();
    }
  });
});
