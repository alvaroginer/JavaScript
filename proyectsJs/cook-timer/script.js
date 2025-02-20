let minutesTimer = 0;
let secondsTimer = 0;
let countContainer =
  document.querySelector(".timer-counter-container--text") || null;

// Cambiar el valor de los minutos y segundos a una única y misma variable en segundos y a partir de ahí construir
let intervalId;
const counter = (minutes, seconds) => {
  //document.querySelector('audio[src="./audios/clock-start.mp3"]').play();

  intervalId = setInterval(() => {
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

    minutesTimer = minutes;
    secondsTimer = seconds;

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

      //Botón de pausa
      timerContainerNotification
        .querySelector(".counter-container--button-pause")
        .addEventListener("click", function () {
          clearInterval(intervalId);
        });

      //Botón de restart
      //Falta poner que restart cuando no se haya pausado se reinicie con el tiempo del principio
      // Falta que los botones aumenten de size al estar encima, añadir clase con hover
      timerContainerNotification
        .querySelector(".counter-container--button-restart")
        .addEventListener("click", function () {
          countContainer = document.querySelector(
            ".timer-counter-container--text"
          );
          clearInterval(intervalId);
          console.log(minutesTimer);
          console.log(secondsTimer);
          counter(minutesTimer, secondsTimer);
        });
    });
};

//Función para modificar el tiempo
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

//EventListener para que aparezca el contador
if (document.querySelector(".menu-container--button__big")) {
  document
    .querySelector(".menu-container--button__big")
    .addEventListener("click", function () {
      document.querySelector(".timer--container").style.display = "flex";
      console.log("esto funciona");
      createCounter(false);
    });
}

//EventListeners para los botones que amrcan el tiempo
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

/* Código para la página de Title y Categories */

const appetizerBtn = document.querySelector(".button--appetizers");
const mainCourseBtn = document.querySelector(".button--main-course");
const dessertBtn = document.querySelector(".button--dessert");

if (appetizerBtn) {
  appetizerBtn.addEventListener("click", function () {
    appetizerBtn.classList.toggle("timer-counter-container--button__selected");
    mainCourseBtn.classList.remove("timer-counter-container--button__selected");
    dessertBtn.classList.remove("timer-counter-container--button__selected");
  });
}

if (mainCourseBtn) {
  mainCourseBtn.addEventListener("click", function () {
    mainCourseBtn.classList.toggle("timer-counter-container--button__selected");
    appetizerBtn.classList.remove("timer-counter-container--button__selected");
    dessertBtn.classList.remove("timer-counter-container--button__selected");
  });
}

if (dessertBtn) {
  dessertBtn.addEventListener("click", function () {
    dessertBtn.classList.toggle("timer-counter-container--button__selected");
    mainCourseBtn.classList.remove("timer-counter-container--button__selected");
    appetizerBtn.classList.remove("timer-counter-container--button__selected");
  });
}

let receipeObject = {}; // Global para que sea accesible en ambos eventos
let categoryType = "";
let receipes = JSON.parse(localStorage.getItem("receipes")) || [];

//Primer Form
let titleData = "";
if (document.querySelector(".form-container-title")) {
  document
    .querySelector(".form-container-title")
    .addEventListener("input", function (event) {
      event.preventDefault();
      if (!receipeObject.id) {
        receipeObject = { id: new Date().getTime() };
        receipes.push(receipeObject);
      }

      //Guardamos titleData en localStorage para hacer una copia de seguridad para el borrado
      titleData = event.target.value.trim();
      localStorage.setItem("titleData", titleData);

      updateReceipe(receipeObject.id, { title: titleData });
      console.log(JSON.stringify(receipeObject));
    });
}

if (document.querySelector(".form-container-title")) {
  document
    .querySelector(".form-container-title")
    .addEventListener("submit", function (event) {
      event.preventDefault();
    });
}

//Segundo Form
const ingredients = [];
if (document.querySelector(".form-container-ingredients")) {
  document
    .querySelector(".form-container-ingredients")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(event.target);
      const ingredientsText = formData.get("ingredientsText");
      creatIngredient(ingredientsText);

      ingredients.push(ingredientsText);
      const receipesFromLocalStorage = JSON.parse(
        localStorage.getItem("receipes")
      );
      const receipeLength = receipesFromLocalStorage.length;
      updateReceipe(receipesFromLocalStorage[receipeLength - 1].id, {
        ingredients: ingredients,
      });
      //console.log(receipesResult);
      console.log(ingredients);

      event.target.reset();
    });
}

// Una vez termine el último form hay que reiniciar todas las variables para futuras recetas, hacerlo cuando se pulse el botón de terminar receta
//Tercer form
const steps = [];
if (document.querySelector(".steps-form")) {
  document
    .querySelector(".steps-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(event.target);
      const stepsText = formData.get("stepsText");
      console.log(stepsText);
      //Falta añadir los steps al html

      steps.push(stepsText);
      const receipesFromLocalStorage = JSON.parse(
        localStorage.getItem("receipes")
      );
      const receipeLength = receipesFromLocalStorage.length;
      updateReceipe(receipesFromLocalStorage[receipeLength - 1].id, {
        steps: steps,
      });

      creatSteps(stepsText);

      event.target.reset();
    });
}

if (document.querySelector(".button-next-2")) {
  document
    .querySelector(".button-next-2")
    .addEventListener("click", function () {
      if (ingredients.length > 0) {
        window.location.href = "./steps.html";
      }
    });
}

if (document.querySelector(".button-next-1")) {
  document
    .querySelector(".button-next-1")
    .addEventListener("click", function () {
      if (Object.keys(receipeObject).length >= 1) {
        if (
          appetizerBtn.classList.contains(
            "timer-counter-container--button__selected"
          )
        ) {
          categoryType = "appetizer";
        }

        if (
          mainCourseBtn.classList.contains(
            "timer-counter-container--button__selected"
          )
        ) {
          categoryType = "main-course";
        }

        if (
          dessertBtn.classList.contains(
            "timer-counter-container--button__selected"
          )
        ) {
          categoryType = "dessert";
        }
        updateReceipe(receipeObject.id, { category: categoryType });
        window.location.href = "./ingredients.html";
        return;
      } else {
        alert("Incluye un titular y selecciona una categoría");
      }
    });
}

// Cuando se termine de crear una receta toca reiniciar el titleData de localStorage
const eliminateReceipe = () => {
  titleData = localStorage.getItem("titleData");
  if (titleData !== "") {
    const receipesLocalStorage =
      JSON.parse(localStorage.getItem("receipes")) || [];
    if (receipesLocalStorage.length > 0) {
      receipesLocalStorage.pop();
      console.log("estás borrando");
      console.log(receipesLocalStorage);
      localStorage.setItem("receipes", JSON.stringify(receipesLocalStorage));
      titleData = "";
      localStorage.setItem("titleData", titleData);
    }
  } else {
    console.log("titleData está vacío");
  }
  window.location.href = "./receipes.html";
};

if (document.querySelectorAll(".button-back")) {
  document.querySelectorAll(".button-back").forEach((btn) => {
    btn.addEventListener("click", function () {
      eliminateReceipe();
    });
  });
}

if (document.querySelector(".finish-receipe-button")) {
  document
    .querySelector(".finish-receipe-button")
    .addEventListener("click", function () {
      if (steps.length > 0) {
        finishNotification();
        console.log("está en la condición adecuada");
      } else {
        console.log("entra aquí");
      }
    });
}

const updateReceipe = (id, propToChange) => {
  const index = receipes.findIndex((r) => r.id === id);
  if (index !== -1) {
    receipes[index] = { ...receipes[index], ...propToChange };
    const receipesToStr = JSON.stringify(receipes);
    localStorage.setItem("receipes", receipesToStr);
    console.log("esta función es la guardado", receipes);
    return receipes[index];
  }
  console.log("no lo encuentra");
  return null;
};

// Visibilize ingrdients and stpes in HTML

const creatIngredient = (ingredient) => {
  const ingredientContainer = document.createElement("p");
  ingredientContainer.className = "ingredients-container--text";
  ingredientContainer.textContent = `${ingredient}`;
  document
    .querySelector(".ingredients-container")
    .appendChild(ingredientContainer);
};

const creatSteps = (steps) => {
  const stepsContainer = document.createElement("p");
  stepsContainer.className = "steps-container--text";
  stepsContainer.textContent = steps;
  document.querySelector(".steps-container").appendChild(stepsContainer);
};

const finishNotification = () => {
  document.querySelector(".finish--container").style.display = "flex";

  const finishNot = document.createElement("div");
  finishNot.className = "finish-container--notification";
  finishNot.innerHTML = `
            <p class="font-size__24 color__yellow timer-counter-container--title">Are you sure you want to finish your recipe?</p>
            <div class="display__flex timer-counter-container--button-container">
              <button class="timer-counter-container--button finish-conatiner-yes font-size__24">Yes</button>
              <button class="timer-counter-container--button finish-container-no font-size__24">No</button>
            </div>`;
  const timeContainer = document.querySelector(".finish--container");
  timeContainer.appendChild(finishNot);

  document
    .querySelector(".finish-conatiner-yes")
    .addEventListener("click", function () {
      titleData = "";
      localStorage.setItem("titleData", titleData);
      document.querySelector(".finish--container").innerHTML = "";
      document.querySelector(".finish--container").style.display = "none";
      window.location.href = "./home.html";
    });

  document
    .querySelector(".finish-container-no")
    .addEventListener("click", function () {
      document.querySelector(".finish--container").innerHTML = "";
      document.querySelector(".finish--container").style.display = "none";
      document.querySelector(".ingredients-container").innerHTML = "";
    });
};

const showReceipes = () => {
  const localStorageReceipe =
    JSON.parse(localStorage.getItem("receipes")) || [];
  if (localStorageReceipe.length > 0) {
    localStorageReceipe.forEach((receipe, index) => {
      const receipeCard = document.createElement("div");
      receipeCard.className = "creceipe-card";
      receipeCard.innerHTML = `<span class="receipe-category">${
        index + 1
      }.</span><p class="font-size__24 color__yellow timer-counter-container--title">${
        receipe.title
      }</p>`;
      //Falta appendChild
    });
  } else {
    //Falta reinicar el html del contenedor
  }
};
