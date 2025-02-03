const counter = () => {
  const countContainer = document.querySelector(".counter-container--text");
  let countContainerTime = countContainer.textContent;
  document.querySelector('audio[src="./audios/clock-start.mp3"]').play();

  if (countContainerTime !== "00:00") {
    const separatedTime = countContainerTime.split(":");

    let minutes = Number(separatedTime[0]);
    let seconds = Number(separatedTime[1]);
    let intervalId = setInterval(() => {
      if (seconds === 0 && minutes === 0) {
        clearInterval(intervalId);
        console.log("tiempo terminado");
        document.querySelector('audio[src="./audios/clock-final.mp3"]').play();
        return;
      }

      if (seconds === 0) {
        seconds = 59;
        minutes--;
      } else {
        seconds--;
      }

      countContainer.textContent = `${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
      }`;
    }, 1000);
  }
};

const createCounter = () => {
  const timerNode = document.createElement("div");
  timerNode.className = "timer-container--notification";
  timerNode.innerHTML = `
            <p class="font-size__24 color__yellow">Select your time</p>
            <div class="display__flex">
              <button class="timer-counter-container--button timer-counter-container--button-min">Minutes</button>
              <button class="timer-counter-container--button timer-counter-container--button-sec">Seconds</button>
            </div>
            <p class="font-size__60 margin__15 color__yellow timer-counter-container--text">00:00</p>
            <div class="display__flex">
              <button class="timer-counter-container--button">+</button>
              <button class="counter-container--button color__white">
                Start
              </button>
              <button class="timer-counter-container--button">-</button>
            </div>`;
  const timeContainer = document.querySelector(".timer--container");
  timeContainer.appendChild(timerNode);
};

const modifyTime = () => {
  // const minuteNode =
  // const secondNode =
  const time = document.querySelector(
    ".timer-counter-container--text"
  ).textContent;
  let [minutes, seconds] = time.split(":");
};

document
  .querySelector(".menu-container--button__big")
  .addEventListener("click", function () {
    document.querySelector(".timer--container").style.display = "flex";
    console.log("esto funciona");
    createCounter();
  });

document
  .querySelector(".egg-container--button-1")
  .addEventListener("click", function () {
    document.querySelector(".counter-container--text").textContent = "07:00";
  });

document
  .querySelector(".egg-container--button-2")
  .addEventListener("click", function () {
    document.querySelector(".counter-container--text").textContent = "05:00";
  });

document
  .querySelector(".counter-container--button")
  .addEventListener("click", function () {
    counter();
  });

document
  .querySelector(".timer-counter-container--button-min")
  .addEventListener("click", function () {
    document
      .querySelector(".timer-counter-container--button-min")
      .classList.toggle("timer-counter-container--button__selected");
  });
