//Función para extraer información del archivo json
async function extractDataJson() {
  try {
    const answer = await fetch("./data.json"); // Ruta del archivo JSON
    if (!answer.ok) {
      throw new Error("Error al cargar el JSON");
    }
    const data = await answer.json();
    return data.persons;
  } catch (error) {
    console.error("Hubo un problema con la carga del JSON:", error);
  }
}

const uploadData = async () => {
  const usersData = await extractDataJson();
  localStorage.setItem("users", JSON.stringify(usersData));
};
uploadData();

//hola hola
//Función para añadir poder editar una llamada
const editCall = (subSection, user, index) => {
  subSection.innerHTML = "";
  const editableCallContainer = document.createElement("div");
  editableCallContainer.className = "sub-section--container";
  editableCallContainer.innerHTML = `<div class="display--flex space--between align-itmes__center">
                    <p class="margin-none">Call 1</p>
                    <p class="sub-section--rating--container">${user.calls[index].callRating}</p>
                  </div>
                  <hr />
                  <div class="display--flex">
                    <div>
                      <div
                        class="display--flex align-itmes__center space--between"
                      >
                        <p class="sub-section--container__title">Interest: </p>
                        <select
                          name="interestRating"
                          class="sub-section--select-number margin--left__6"
                          id="interest-option"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <div
                        class="display--flex align-itmes__center space--between"
                      >
                        <p class="sub-section--container__title">Objections:</p>
                        <select
                          name="objectionsRating"
                          class="sub-section--select-number margin--left__6"
                          id="objection-option"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <div
                        class="display--flex align-itmes__center space--between"
                      >
                        <p class="sub-section--container__title">Duration:</p>
                        <select
                          name="durationRating"
                          class="sub-section--select-number margin--left__6"
                          id="duration-option"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                    </div>
                    <div class="margin--left__12">
                      <div
                        class="display--flex align-itmes__center space--between"
                      >
                        <p class="sub-section--container__title">Potential:</p>
                        <select
                          name="potentialRating"
                          class="sub-section--select-number margin--left__6"
                          id="potential-option"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <div
                        class="display--flex align-itmes__center space--between"
                      >
                        <p class="sub-section--container__title">Clousure:</p>
                        <select
                          name="clousureRating"
                          class="sub-section--select-number margin--left__6"
                          id="clousure-option"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <div
                        class="display--flex align-itmes__center space--between"
                      >
                        <p class="sub-section--container__title">Technical:</p>
                        <select
                          name="technicalRating"
                          class="sub-section--select-number margin--left__6"
                          id="technical-option"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                    </div>
                    <div class="display--flex width__100 align-items__flex-end justify-content-right margin--left__12">
                      <button class="finish-edit--button">Finish</button>
                    </div>
                  </div>`;
  subSection.appendChild(editableCallContainer);

  //eventListener for the forms
  let userUpdated = "";
  if (editableCallContainer) {
    const interestOption =
      editableCallContainer.querySelector("#interest-option");
    interestOption.value = user.calls[index].customerInterest;
    interestOption.addEventListener("change", function (event) {
      //console.log(call.id);
      let content = event.target.value;
      userUpdated = updateUser(
        user.id,
        {
          customerInterest: Number(content),
        },
        index
      );
    });

    const objectionOption =
      editableCallContainer.querySelector("#objection-option");
    objectionOption.value = user.calls[index].objectionsRaised;
    objectionOption.addEventListener("change", function (event) {
      let content = event.target.value;
      userUpdated = updateUser(
        user.id,
        {
          objectionsRaised: Number(content),
        },
        index
      );
    });

    const durationOption =
      editableCallContainer.querySelector("#duration-option");
    durationOption.value = user.calls[index].callDuration;
    durationOption.addEventListener("change", function (event) {
      let content = event.target.value;
      updateUser(user.id, { callDuration: Number(content) }, index);
    });

    const potentialOption =
      editableCallContainer.querySelector("#potential-option");
    potentialOption.value = user.calls[index].conversionPotential;
    potentialOption.addEventListener("change", function (event) {
      let content = event.target.value;
      userUpdated = updateUser(
        user.id,
        {
          conversionPotential: Number(content),
        },
        index
      );
    });

    const clousureOption =
      editableCallContainer.querySelector("#clousure-option");
    clousureOption.value = user.calls[index].callClosure;
    clousureOption.addEventListener("change", function (event) {
      let content = event.target.value;
      userUpdated = updateUser(
        user.id,
        {
          callClosure: Number(content),
        },
        index
      );
    });

    const technicalOption =
      editableCallContainer.querySelector("#technical-option");
    technicalOption.value = user.calls[index].technicalQuality;
    technicalOption.addEventListener("change", function (event) {
      console.log("estás cambiando technical");
      let content = event.target.value;
      userUpdated = updateUser(
        user.id,
        {
          technicalQuality: Number(content),
        },
        index
      );
    });
  }

  //EventListener para el botón de finalizar
  subSection
    .querySelector(".finish-edit--button")
    .addEventListener("click", function () {
      console.log("estás cambiando el rating general");
      const newCallRating = calculateGeneralRating(userUpdated);
      userUpdated = updateUser(user.id, newCallRating);
      subSection.innerHTML = "";
      showDataCall(subSection, userUpdated);
    });
};

const paintInputs = (checkBoxContainer, value) => {
  let checkBoxes = checkBoxContainer.querySelectorAll(".step-checkbox");
  console.log(checkBoxes);
  for (let i = 0; i < value; i++) {
    console.log(value);
    if (checkBoxes[i]) {
      checkBoxes[i].style.backgroundColor = "#617383";
    }
  }
};

//Función para crear el div con la info de la llamada
const showDataCall = (subSection, user) => {
  const callArray = user.calls;
  console.log("callArray", callArray);

  if (callArray.length === 0) {
    //subSection.querySelector(".sub-section--header").style.display = "none";
    const emptyCallContainer = document.createElement("div");
    emptyCallContainer.innerHTML = `<p>No calls registred, <span class="start-call-button">start one now.</span></p>`;
    subSection.appendChild(emptyCallContainer);
    return emptyCallContainer;
  } else {
    callArray.forEach((call, index) => {
      //hay que hacer el updateUser
      const callInfoContainer = document.createElement("div");
      callInfoContainer.className = "call-card";
      callInfoContainer.innerHTML = `
            <div class="call-card--header">
              <p class="call--title">Llamada ${index + 1}</p>
              <div class="call--header__data-container">
                <div class="title-container">
                  <p class="title-container--text__orange">Fecha</p>
                  <p class="title-container--text__grey">12/11/25</p>
                </div>
                <div class="title-container">
                  <p class="title-container--text__orange">Duración</p>
                  <p class="title-container--text__grey">00:12:24</p>
                </div>
                <div>
                  <button class="sub-section--header__button">...</button>
                  <div class="call-card--select">
                    <div class="display--flex gap--5 align-itmes__center call-card--button call-card--button__edit">
                      <img class="call-card--button__img" src="./imgs/pencil.png" alt="Edit button">
                      <p>Edit Call</p>
                    </div>
                    <div class="display--flex gap--5 align-itmes__center call-card--button call-card--button__delete">
                      <img class="call-card--button__img" src="./imgs/delete.png" alt="Edit button">
                      <p>Delete Call</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <div class="call-card--main display--flex space--between">
              <div class="main--data-container">
                <div class="data-box data-box--interest">
                  <p class="data-box--title">Interest</p>
                  <input type="checkbox" class="step-checkbox">
                  <input type="checkbox" class="step-checkbox">
                  <input type="checkbox" class="step-checkbox">
                  <input type="checkbox" class="step-checkbox">
                  <input type="checkbox" class="step-checkbox">
                </div>
                <div class="data-box data-box--objections">
                  <p class="data-box--title">Objections</p>
                  <input type="checkbox" class="step-checkbox">
                  <input type="checkbox" class="step-checkbox">
                  <input type="checkbox" class="step-checkbox">
                  <input type="checkbox" class="step-checkbox">
                  <input type="checkbox" class="step-checkbox">
                </div>
                <div class="data-box data-box--potential">
                  <p class="data-box--title">Potential</p>
                  <input type="checkbox" class="step-checkbox">
                  <input type="checkbox" class="step-checkbox">
                  <input type="checkbox" class="step-checkbox">
                  <input type="checkbox" class="step-checkbox">
                  <input type="checkbox" class="step-checkbox">
                </div>
                <div class="data-box data-box--clousure">
                  <p class="data-box--title">Clousure</p>
                  <input type="checkbox" class="step-checkbox">
                  <input type="checkbox" class="step-checkbox">
                  <input type="checkbox" class="step-checkbox">
                  <input type="checkbox" class="step-checkbox">
                  <input type="checkbox" class="step-checkbox">
                </div>
              </div>
              <div class="text-align-center display--flex align-itmes__center">
                <div class="main--call-rating">
                  <p class="call-rating--title">Call rate</p>
                  <p class="call-rating--number">${call.callRating}</p>
                </div>
              </div>
            </div>
          </div>`;
      subSection.appendChild(callInfoContainer);

      //Pintas los cuadrados de los distintos colores
      const dataInterest = callInfoContainer.querySelector(
        ".data-box--interest"
      );
      if (dataInterest) {
        paintInputs(dataInterest, call.customerInterest);
      }

      const dataObjections = callInfoContainer.querySelector(
        ".data-box--objections"
      );
      if (dataObjections) {
        paintInputs(dataObjections, call.objectionsRaised);
      }

      const dataPotential = callInfoContainer.querySelector(
        ".data-box--potential"
      );
      if (dataPotential) {
        paintInputs(dataPotential, call.conversionPotential);
      }

      const dataClousure = callInfoContainer.querySelector(
        ".data-box--clousure"
      );
      if (dataClousure) {
        paintInputs(dataClousure, call.callClosure);
      }
    });
  }

  // //Modificamos el rating general
  // const ratingContainerText = subSection.closest(".event-card--text");
  // if (ratingContainerText) {
  //   //ratingContainerText.textContent = `${user.overallRating}`;
  //   console.log("está mostrandonel rating correcto");
  //   ratingContainerText.querySelector(
  //     ".rating-container--text"
  //   ).textContent = `${user.overallRating}`;
  // }
};

//Función para crear el GeneralRating
const calculateGeneralRating = (person) => {
  // Calculamos el Mail Rating
  const emailValue =
    person.emails.sent * 0.1 +
    person.emails.open * 0.2 +
    person.emails.clicked * 0.3 +
    person.emails.openRate * 0.2 +
    person.emails.block * -0.1 +
    person.emails.rebound * -0.1;
  const emailRating = ((emailValue / 2) * 5) / 10;
  person.emails.rating = emailRating;

  //Calculamos el Call Rating
  const callsRating = [];
  let totalCallsRating = 0;
  if (person.calls.length > 0) {
    person.calls.forEach((call) => {
      const callRate =
        call.customerInterest * 0.2 +
        call.objectionsRaised * 0.15 +
        call.conversionPotential * 0.2 +
        call.callClosure * 0.2 +
        call.callDuration * 0.1 +
        call.technicalQuality * 0.15;
      callsRating.push(callRate);
      call.callRating = callRate.toFixed(1);
      console.log("callRating", call.callRating);
    });

    const sumAllRates = callsRating.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    totalCallsRating = sumAllRates / callsRating.length;
    person.callsRating = totalCallsRating;
  }

  //Final rating
  person.overallRating = (emailRating + totalCallsRating).toFixed(1);
  //console.log(person.overallRating);
  return person;
};

//Función que actualiza la información de un contacto
const updateUser = (id, propToChange, callIndex) => {
  const userDataLocalStorage = JSON.parse(localStorage.getItem("users"));
  const index = userDataLocalStorage.findIndex((user) => user.id === id);
  //console.log("prop to change", propToChange);

  //Actualizamos el user entero
  if (callIndex === undefined) {
    userDataLocalStorage[index] = {
      ...userDataLocalStorage[index],
      ...propToChange,
    };
    //console.log("updated entire user", userDataLocalStorage[index]);
    const usersToStr = JSON.stringify(userDataLocalStorage);
    localStorage.setItem("users", usersToStr);
    //console.log("esto es users en local", JSON.parse(localStorage.getItem("users")));
    return userDataLocalStorage[index];
  }

  //Actualizamos las llamadas de un User
  if (index !== -1) {
    userDataLocalStorage[index].calls[callIndex] = {
      ...userDataLocalStorage[index].calls[callIndex],
      ...propToChange,
    };
    console.log("call updated", userDataLocalStorage[index].calls[callIndex]);
    const usersToStr = JSON.stringify(userDataLocalStorage);
    localStorage.setItem("users", usersToStr);
    return userDataLocalStorage[index];
  }
};

const usersContainer = document.querySelector(".users-grid");
const renderUsers = () => {
  //Update users with the new data
  const usersLocalStorage = JSON.parse(localStorage.getItem("users"));
  usersLocalStorage.forEach((user) => {
    const newUserData = calculateGeneralRating(user);
    updateUser(user.id, newUserData);
  });

  const finalUsers = JSON.parse(localStorage.getItem("users"));
  console.log("finalusers", finalUsers);
  finalUsers.forEach((user, index) => {
    const userCard = document.createElement("div");
    userCard.className = "card width__100 display-inline-block";
    userCard.innerHTML = `<div class="event-card user-card grid-cell">
          <div class="display--flex">
            <div>
              <div class="rating-container">
                <p class="margin-none">${user.overallRating}</p>
              </div>
              <p class="margin-none text-align-center font-size__12">ID: ${user.id}</p>
            </div>
            <div class="event-card--text__p display--flex flex-direction-column margin--left__24">
              <h3 class="event-card--text__title">${user.name}</h3>
              <div class="display--flex">
                <p class="margin-none color-orange">Estado:</p>
                <select name="userState" class="margin--left__6">
                  <option value="text">Interesado</option>
                  <option value="text">No interesado</option>
                  <option value="text">Conversión</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
          <div class="event-card--button-container display--flex space--between">
            <button class="button-container--button calls-button-section">
              <img src="./imgs/phone.svg" alt="" />
            </button>
            <button class="button-container--button mails-button-section">
              <img src="./imgs/email.svg" alt="" />
            </button>
            <button class="button-container--button notes-button-section">
              <img src="./imgs/account-box-edit-outline.svg" alt="" />
            </button>
          </div>
          </div>
          <div class="event-card--sub-section">
          <div class="sub-section--header">
            <p class="sub-section--header__title">Llamadas</p>
            <button class="sub-section--header__button">+</button>
          </div>
          <div class="call-cards--container"></div>`;
    usersContainer.appendChild(userCard);

    const finalRating = userCard.querySelector(".rating-container");
    if (user.overallRating >= 7.5) {
      finalRating.style.background =
        "linear-gradient(180deg, #c8c3c3, #40AB16)";
    } else if (user.overallRating >= 5 && user.overallRating < 7.5) {
      finalRating.style.background =
        "linear-gradient(180deg, #c8c3c3, #AB9C16)";
    } else if (user.overallRating < 5) {
      finalRating.style.background =
        "linear-gradient(180deg, #c8c3c3, #812433)";
    }

    const callSection = userCard.querySelector(".calls-button-section");
    const callCardsContainer = userCard.querySelector(".call-cards--container");
    callSection.addEventListener("click", function () {
      callSection.classList.toggle("button-container--button__selected");
      //let loadUsers = JSON.parse(localStorage.getItem("users"));
      //console.log("users in local Storage", loadUsers);
      if (
        callSection.classList.contains("button-container--button__selected")
      ) {
        userCard.querySelector(".event-card--sub-section").style.display =
          "block";
        showDataCall(callCardsContainer, finalUsers[index]);
      } else {
        userCard.querySelector(".event-card--sub-section").style.display =
          "none";
        callCardsContainer.innerHTML = "";
      }
    });

    userCard
      .querySelector(".mails-button-section")
      .addEventListener("click", function () {
        console.log("botón mail funciona");
        // userCard
        //   .querySelector(".mails-button-section")
        //   .classList.toggle("button-container--button__selected");
        // if (
        //   userCard
        //     .querySelector(".mails-button-section")
        //     .classList.contains("button-container--button__selected")
        // ) {
        //   userCard.querySelector(".event-card--sub-section").style.display =
        //     "block";
        // } else {
        //   userCard.querySelector(".event-card--sub-section").style.display =
        //     "none";
        // }
      });

    userCard
      .querySelector(".notes-button-section")
      .addEventListener("click", function () {
        console.log("botón notas funciona");
        // userCard
        //   .querySelector(".notes-button-section")
        //   .classList.toggle("button-container--button__selected");
        // if (
        //   userCard
        //     .querySelector(".notes-button-section")
        //     .classList.contains("button-container--button__selected")
        // ) {
        //   userCard.querySelector(
        //     ".event-card--sub-section"
        //   ).style.borderRadius = "5px 0 5px 5px";
        //   userCard.querySelector(".event-card--sub-section").style.display =
        //     "block";
        // } else {
        //   userCard.querySelector(
        //     ".event-card--sub-section"
        //   ).style.borderRadius = "5px";
        //   userCard.querySelector(".event-card--sub-section").style.display =
        //     "none";
        // }
      });
  });
};
renderUsers();

// More functionalities
/* Sort by:
 - Call Rating
 - Email Rating
 - General Rating
 - Less time to call
 - Total Calls
 - Name A-Z

  Filter by:
 - Call Rating positive (>=3)
 - Email Rating positive (>=3)
 - Minium Number of Calls
 - Combined data
 */
