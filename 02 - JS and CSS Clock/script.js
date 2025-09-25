const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 60) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  // To prevent the transition effect when the second hand resets to 0
  if (seconds == 0) {
    secHand.style.transitionDuration = "0s";
    minHand.style.transitionDuration = "0s";
    hourHand.style.transitionDuration = "0s";
  } else {
    secHand.style.transitionDuration = "0.05s";
    minHand.style.transitionDuration = "0.05s";
    hourHand.style.transitionDuration = "0.05s";
  }
}
setInterval(setTime, 1000);
