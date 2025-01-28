//Manillas del reloj
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

//Contadores del reloj
const secondsNum = document.querySelector(".seconds");
const minutesNum = document.querySelector(".minutes");
const hoursNum = document.querySelector(".hours");

function setTime() {
  const now = new Date();

  //Segundos
  const seconds = now.getSeconds();
  console.log("Segundos:", seconds);
  const secondsDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  secondsNum.textContent = `${seconds < 10 ? `0${seconds}` : seconds}`;

  //Minutos
  const minutes = now.getMinutes();
  console.log("Minutos:", minutes);
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  minutesNum.textContent = `${minutes < 10 ? `0${minutes}` : minutes}`;

  //Horas
  const hours = now.getHours();
  console.log("Horas:", hours);
  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  hoursNum.textContent = `${hours < 10 ? `0${hours}` : hours}`;
}

setInterval(setTime, 1000);

// Falta hacer un contador hasta el cumpleaños
