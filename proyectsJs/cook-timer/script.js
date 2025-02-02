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
