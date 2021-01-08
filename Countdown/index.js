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
const day = document.querySelector(".day");
const date = document.querySelector(".date");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");

const remaindays = document.querySelector(".remaindays");
const remainhours = document.querySelector(".remainhours");
const remainmins = document.querySelector(".remainmins");
const remainsecs = document.querySelector(".remainsecs");

//내가 넣은 임의의 날짜 화면 구현
const dueDate = new Date(2021, 0, 10, 9, 00);
console.log(dueDate);
day.textContent = weekdays[dueDate.getDay()];
date.textContent = dueDate.getDate();
month.textContent = dueDate.getMonth() + 1;
year.textContent = dueDate.getFullYear();
if (dueDate.getHours() < 10) {
  hour.textContent = `0${dueDate.getHours()}`;
} else {
  hour.textContent = dueDate.getHours();
}
if (dueDate.getMinutes() < 10) {
  minute.textContent = `0${dueDate.getMinutes()}`;
} else {
  minute.textContent = dueDate.getMinutes();
}

// 현재 날짜와의 차이 구하기
function getRemainingDate() {
  let currentDate = new Date();
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
}
setInterval(getRemainingDate, 1000);
