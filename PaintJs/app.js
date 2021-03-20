const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const colorPads = document.querySelector(".controls__colors");
const range = document.querySelector("#jsRange");
const ModeBtn = document.querySelector("#jsMode");
const saveBtn = document.querySelector("#jsSave");
let fillMode = false;
let currentColor = "black";
const CANVAS_SIZE = 700;
let painting = false;

// canvas 사이즈를 지정해줘야한다. css 와는 별개임.
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

// default
ctx.strokeStyle = currentColor;
ctx.lineWidth = 2.5;

colorPads.childNodes.forEach((colorPad) => {
  colorPad.addEventListener("click", function (e) {
    currentColor = e.target.style.backgroundColor;
    ctx.strokeStyle = currentColor;
    ctx.fillStyle = currentColor;
  });
});

function startPainting() {
  painting = true;
}

function stopPainting() {
  painting = false;
}

function onMouseMove(e) {
  const x = e.offsetX;
  const y = e.offsetY;

  if (!painting) {
    // 시작점은 아무곳이나 될 수 있다.
    ctx.beginPath();
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseDown() {
  painting = true;
}
function handleMouseClick() {
  if (fillMode) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}
function handleCM(e) {
  e.preventDefault();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleMouseClick);
  canvas.addEventListener("contextmenu", handleCM);
}
if (range) {
  range.addEventListener("input", function (e) {
    ctx.lineWidth = e.target.value;
  });
}

ModeBtn.addEventListener("click", function (e) {
  if (fillMode) {
    fillMode = false;
    e.target.textContent = "fill";
  } else {
    fillMode = true;
    e.target.textContent = "painting";
  }
});
saveBtn.addEventListener("click", function (e) {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "paintJS";
  link.click();
});
