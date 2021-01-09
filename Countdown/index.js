const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dueDateTag = document.querySelector(".dueDateTag");

const remaindays = document.querySelector(".remaindays");
const remainhours = document.querySelector(".remainhours");
const remainmins = document.querySelector(".remainmins");
const remainsecs = document.querySelector(".remainsecs");

const deadline = document.querySelector(".deadline");

//내가 넣은 임의의 날짜 화면 구현
const dueDate = new Date(2021, 11, 3, 9, 00);
console.log(dueDate);

let day = weekdays[dueDate.getDay()];
let date = dueDate.getDate();
let month = dueDate.getMonth() + 1;
let year = dueDate.getFullYear();
let hours = addZero(dueDate.getHours());
let minutes = addZero(dueDate.getMinutes());

dueDateTag.innerHTML = `Giveaway Ends On ${year} ${date} ${day}, ${hours}:${minutes}`;

function addZero(item) {
  if (item < 10) {
    return `0${item}`;
  } else {
    return item;
  }
}

let currentDate;
// 현재 날짜와의 차이 구하기
function getRemainingDate() {
  currentDate = new Date();
  remainsecs.textContent = Math.floor(((dueDate - currentDate) / 1000) % 60);
  remainmins.textContent = Math.floor(
    ((dueDate - currentDate) / 1000 / 60) % 60
  );
  remainhours.textContent = Math.floor(
    ((dueDate - currentDate) / 1000 / 60 / 60) % 24
  );
  remaindays.textContent = Math.floor(
    (dueDate - currentDate) / 1000 / 60 / 60 / 24
  );

  if (dueDate - currentDate < 0) {
    clearInterval(countdown);
    deadline.innerHTML = "The date has been expired";
  }
}
const countdown = setInterval(getRemainingDate, 1000);
