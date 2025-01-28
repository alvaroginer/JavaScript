const secondHand = document.querySelector(".second-hand");
function setTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  console.log(seconds);
  const secondsDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
}

setInterval(setTime, 1000);
