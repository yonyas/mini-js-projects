const currentColor = document.querySelector(".currentColor");
const colorList = ["grey", "blue", "green", "orange"];
const btn = document.querySelector(".btnIndex");
const main = document.querySelector(".main");

currentColor.textContent = colorList[0];
main.style.backgroundColor = colorList[0];

btn.addEventListener("click", function () {
  let index = Math.floor(Math.random() * colorList.length);
  currentColor.textContent = colorList[index];
  main.style.backgroundColor = colorList[index];
});
