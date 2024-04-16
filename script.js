const date = document.querySelector(".date");
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

const myDate = new Date();
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
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

date.innerHTML = `${myDate.getDate() < 10 ? "0" : ""} ${myDate.getDate()}`;
day.innerHTML = `${weekdays[myDate.getDay()]}`;
month.innerHTML = `${months[myDate.getMonth()]}`;
year.innerHTML = `${myDate.getFullYear()}`;

const p = document.querySelector(".clock p");
setInterval(function () {
  const date = new Date();
  const hours = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  p.innerHTML = `${hours < 10 ? "0" : ""}${hours} : ${
    min < 10 ? "0" : ""
  }${min} : ${sec < 10 ? "0" : ""}${sec}`;
}, 1000);
