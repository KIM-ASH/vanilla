import "./styles.css";

// You're gonna need this

const clockContainer = document.querySelector("body");
const clockTitle = clockContainer.querySelector("h1.y");

function getTime() {
  // Don't delete this.

  const now = new Date();

  const xmasDay = new Date("2020-12-24:00:00:00:+0900");

  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;
  let distance = xmasDay - now;

  let dDays = Math.floor(distance / days);
  let dHours = Math.floor((distance % days) / hours);
  let dMiutes = Math.floor((distance % hours) / minutes);
  let dSeconds = Math.floor((distance % minutes) / seconds);

  clockTitle.innerText = `${dDays}D ${dHours < 10 ? `0${dHours}` : dHours}H ${
    dMiutes < 10 ? `0${dMiutes}` : dMiutes
  }M ${dSeconds < 10 ? `0${dSeconds}` : dSeconds}S`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
