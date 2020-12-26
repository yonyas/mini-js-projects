const currentColor = document.querySelector(".currentColor");
const hexList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//  #f15025
const btnHex = document.querySelector(".btnHex");
const main = document.querySelector(".main");

currentColor.textContent = "#F15025";
main.style.backgroundColor = "#F15025";

btnHex.addEventListener("click", function () {
  let hexColor = "#";
  for (i = 0; i < 6; i++) {
    hexColor += hexList[getRandomNum()];
  }
  currentColor.textContent = hexColor;
  main.style.backgroundColor = hexColor;
});

var getRandomNum = function () {
  return Math.floor(Math.random() * hexList.length);
};
