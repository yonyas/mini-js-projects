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
  button.addEventListener("click", function (e) {
    var btnText = e.currentTarget.classList;
    if (btnText.contains("decrease")) {
      num.decrease();
      changeColor();
    } else if (btnText.contains("reset")) {
      num.reset();
      changeColor();
    } else if (btnText.contains("increase")) {
      num.increase();
      changeColor();
    }
  });
});
