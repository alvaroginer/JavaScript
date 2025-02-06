let minutesTimer = 0;
let secondsTimer = 0;
let countContainer =
  document.querySelector(".timer-counter-container--text") || null;

// Cambiar el valor de los minutos y segundos a una única y misma variable en segundos y a partir de ahí construir
const counter = (minutes, seconds) => {
  //document.querySelector('audio[src="./audios/clock-start.mp3"]').play();

  let intervalId = setInterval(() => {
    if (seconds === 0 && minutes === 0) {
      clearInterval(intervalId);
      console.log("tiempo terminado");
      //document.querySelector('audio[src="./audios/clock-final.mp3"]').play();
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
};

// Creamos la notificación de contador
const createCounter = () => {
  const timerNode = document.createElement("div");
  timerNode.className = "timer-container--notification";
  timerNode.innerHTML = `
            <button class='button__close'>X</button>
            <p class="font-size__24 color__yellow timer-counter-container--title">Select your time</p>
            <div class="display__flex timer-counter-container--time-button-container">
              <button class="timer-counter-container--button timer-counter-container--button-min font-size__24">Minutes</button>
              <button class="timer-counter-container--button timer-counter-container--button-sec font-size__24">Seconds</button>
            </div>
            <p class="font-size__60 margin__15 color__yellow timer-counter-container--text">00:00</p>
            <div class="display__flex timer-counter-container--button-container">
              <button class="timer-counter-container--button counter-container--button-add font-size__24">+</button>
              <button class="counter-container--button counter-container--button-start color__white font-size__24">
                Start
              </button>
              <button class="timer-counter-container--button counter-container--button-rest font-size__24">-</button>
            </div>`;
  const timeContainer = document.querySelector(".timer--container");
  timeContainer.appendChild(timerNode);

  // Funcionamiento botón de X
  document
    .querySelector(".button__close")
    .addEventListener("click", function () {
      document.querySelector(".timer--container").style.display = "none";
      document.querySelector(".timer--container").innerHTML = "";
      clearInterval(intervalId);
      minutesTimer = 0;
      secondsTimer = 0;
    });

  // Funcionamiento botón minutes
  document
    .querySelector(".timer-counter-container--button-min")
    .addEventListener("click", function () {
      document
        .querySelector(".timer-counter-container--button-min")
        .classList.toggle("timer-counter-container--button__selected");
      console.log("estás cambiando la clase del botón minutos");
    });

  //Funcionamiento botón seconds
  document
    .querySelector(".timer-counter-container--button-sec")
    .addEventListener("click", function () {
      document
        .querySelector(".timer-counter-container--button-sec")
        .classList.toggle("timer-counter-container--button__selected");
      console.log("estás cambiando la clase del botón segundos");
    });

  //Funcionamiento botón +
  document
    .querySelector(".counter-container--button-add")
    .addEventListener("click", function () {
      modifyTime(true);
    });

  // Funcionamiento botón -
  document
    .querySelector(".counter-container--button-rest")
    .addEventListener("click", function () {
      modifyTime(false);
    });

  // Funcionamiento botón start
  document
    .querySelector(".counter-container--button-start")
    .addEventListener("click", function () {
      countContainer = document.querySelector(".timer-counter-container--text");
      counter(minutesTimer, secondsTimer);
      console.log("ha terminado la función del contador");

      //Con el contador en marcha ocultamos los botónes de modificar tiempo
      if (
        timeContainer.querySelector(
          ".timer-counter-container--button-container"
        )
      ) {
        timeContainer
          .querySelector(".timer-counter-container--button-container")
          .classList.add("display__none");
      }

      //Con el contador en marcha ocultamos los botones de minutes y seconds
      if (
        timeContainer.querySelector(
          ".timer-counter-container--time-button-container"
        )
      ) {
        timeContainer
          .querySelector(".timer-counter-container--time-button-container")
          .classList.add("display__none");
      }
      //Con el contador en marcha ocultamos el título
      if (timeContainer.querySelector(".timer-counter-container--title")) {
        timeContainer
          .querySelector(".timer-counter-container--title")
          .classList.add("display__none");
      }

      //Modificamos el nuevo contador con los correspondientes botones
      const controlBtnNode = document.createElement("div");
      controlBtnNode.className =
        "timer-counter-container--control-buttons-container display__flex";
      controlBtnNode.innerHTML = `<button class="timer-counter-container--button counter-container--button-pause font-size__24">Pause</button>
              <button class="counter-container--button counter-container--button-restart color__white font-size__24">
                Restart
              </button>`;
      const timerContainerNotification = document.querySelector(
        ".timer-container--notification"
      );
      timerContainerNotification.appendChild(controlBtnNode);

      //Falta que funcionen los nuevos botones
    });
};

const modifyTime = (add) => {
  const minuteNode = document.querySelector(
    ".timer-counter-container--button-min"
  );
  const secondNode = document.querySelector(
    ".timer-counter-container--button-sec"
  );

  if (
    minuteNode.classList.contains(
      "timer-counter-container--button__selected"
    ) &&
    secondNode.classList.contains("timer-counter-container--button__selected")
  ) {
    alert("Desactiva uno de los dos parámetros para modificar el tiempo");
    return;
  }

  if (
    minuteNode.classList.contains("timer-counter-container--button__selected")
  ) {
    add === true ? minutesTimer++ : minutesTimer--;
    if (minutesTimer < 0) {
      minutesTimer = 59;
    } else if (minutesTimer > 59) {
      minutesTimer = 0;
    }
    console.log(minutesTimer);
  }

  if (
    secondNode.classList.contains("timer-counter-container--button__selected")
  ) {
    add === true ? secondsTimer++ : secondsTimer--;
    if (secondsTimer < 0) {
      secondsTimer = 59;
    } else if (secondsTimer > 59) {
      secondsTimer = 0;
    }
    console.log(secondsTimer);
  }

  document.querySelector(".timer-counter-container--text").textContent = `${
    minutesTimer < 10 ? `0${minutesTimer}` : minutesTimer
  }:${secondsTimer < 10 ? `0${secondsTimer}` : secondsTimer}`;
};

if (document.querySelector(".menu-container--button__big")) {
  document
    .querySelector(".menu-container--button__big")
    .addEventListener("click", function () {
      document.querySelector(".timer--container").style.display = "flex";
      console.log("esto funciona");
      createCounter(false);
    });
}

if (document.querySelector(".egg-container--button-1")) {
  document
    .querySelector(".egg-container--button-1")
    .addEventListener("click", function () {
      document.querySelector(".counter-container--text").textContent = "07:00";
      console.log("estoy clickando en huevo duro");
    });
}

if (document.querySelector(".egg-container--button-2")) {
  document
    .querySelector(".egg-container--button-1")
    .addEventListener("click", function () {
      document.querySelector(".counter-container--text").textContent = "05:00";
      console.log("estoy clickando en huevo duro");
    });
}

if (document.querySelector(".counter-container--button")) {
  document
    .querySelector(".counter-container--button")
    .addEventListener("click", function () {
      countContainer = document.querySelector(".counter-container--text");
      if (
        document.querySelector(".counter-container--text").textContent ===
        "07:00"
      ) {
        counter(7, 0);
      } else if (
        document.querySelector(".counter-container--text").textContent ===
        "05:00"
      ) {
        counter(5, 0);
      }
    });
}
