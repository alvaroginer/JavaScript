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

//Función para añadir poder editar una llamada
const renderCall = (eventCard, user, index) => {
  eventCard.innerHTML = "";
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
  eventCard.appendChild(editableCallContainer);

  //eventListener for the forms
  if (editableCallContainer) {
    editableCallContainer.querySelector("#interest-option").value =
      user.calls[index].customerInterest;
    editableCallContainer
      .querySelector("#interest-option")
      .addEventListener("change", function (event) {
        //console.log(call.id);
        let content = event.target.value;
        updateUser(user.id, index, { customerInterest: Number(content) });
      });

    editableCallContainer.querySelector("#objection-option").value =
      user.calls[index].objectionsRaised;
    editableCallContainer
      .querySelector("#objection-option")
      .addEventListener("change", function (event) {
        let content = event.target.value;
        updateUser(user.id, index, { objectionsRaised: Number(content) });
      });

    editableCallContainer.querySelector("#duration-option").value =
      user.calls[index].callDuration;
    editableCallContainer
      .querySelector("#duration-option")
      .addEventListener("change", function (event) {
        let content = event.target.value;
        updateUser(user.id, index, { callDuration: Number(content) });
      });

    editableCallContainer.querySelector("#potential-option").value =
      user.calls[index].conversionPotential;
    editableCallContainer
      .querySelector("#potential-option")
      .addEventListener("change", function (event) {
        let content = event.target.value;
        updateUser(user.id, index, { conversionPotential: Number(content) });
      });

    editableCallContainer.querySelector("#clousure-option").value =
      user.calls[index].callClosure;
    editableCallContainer
      .querySelector("#clousure-option")
      .addEventListener("change", function (event) {
        let content = event.target.value;
        updateUser(user.id, index, { callClosure: Number(content) });
      });

    editableCallContainer.querySelector("#technical-option").value =
      user.calls[index].technicalQuality;
    editableCallContainer
      .querySelector("#technical-option")
      .addEventListener("change", function (event) {
        let content = event.target.value;
        updateUser(user.id, index, { technicalQuality: Number(content) });
      });
  } else {
    console.log("no se ejecuta editableCallContainer");
  }
};

//Función para crear el div con la info de la llamada
const createDataCall = (eventCard, user) => {
  const callArray = user.calls;
  console.log(callArray);
  if (callArray.length === 0) {
    const emptyCallContainer = document.createElement("div");
    emptyCallContainer.className = "sub-section--container";
    emptyCallContainer.innerHTML = `<p>No calls registred, <span class="start-call-button">start one now.</span></p>`;
    eventCard.appendChild(emptyCallContainer);
  }
  callArray.forEach((call, index) => {
    const callInfoContainer = document.createElement("div");
    callInfoContainer.className = "sub-section--container";
    callInfoContainer.innerHTML = `<div class="display--flex space--between align-itmes__center">
                    <p class="margin-none">Call ${index + 1}</p>
                    <p class="sub-section--rating--container">${
                      call.callRating
                    }</p>
                  </div>
                  <hr />
                  <div class="display--flex">
                    <div class"width__100">
                        <p class="sub-section--container__title">Interest: <span class="call-interest-text">${
                          call.customerInterest
                        }</span></p>
                        <p class="sub-section--container__title">Objections:  <span class="call-objections-text">${
                          call.objectionsRaised
                        }</span></p>
                        <p class="sub-section--container__title">Duration: <span class="call-duration-text">${
                          call.conversionPotential
                        }</span></p>
                    </div>
                    <div class="margin--left__12">
                        <p class="sub-section--container__title">Potential: <span class="call-potential-text">${
                          call.conversionPotential
                        }</span></p>
                        <p class="sub-section--container__title">Clousure: <span class="call-clousure-text">${
                          call.callClosure
                        }</span></p>
                        <p class="sub-section--container__title">Technical: <span class="call-clousure-text">${
                          call.technicalQuality
                        }</span></p>
                    </div>
                    <div class="display--flex align-items__flex-end margin_12 justify-content-right">
                      <button class="edit--button">Edit</button>
                    </div>
                  </div>
                `;
    eventCard.appendChild(callInfoContainer);

    console.log(call);
    callInfoContainer
      .querySelector(".edit--button")
      .addEventListener("click", function () {
        renderCall(eventCard, user, index);
      });
  });
};

const createCall = () => {
  const callContainer = document.createElement("div");
  callContainer.className = "sub-section--container";
  callContainer.innerHTML = `<div class="display--flex space--between align-itmes__center">
                    <p class="margin-none">Call 1</p>
                    <p class="sub-section--rating--container">4.3</p>
                  </div>
                  <hr />
                  <div class="display--flex">
                    <div>
                      <div
                        class="display--flex align-itmes__center space--between"
                      >
                        <p class="sub-section--container__title">Interest:</p>
                        <select
                          name="interestRating"
                          class="sub-section--select-number margin--left__6"
                          id=""
                        >
                          <option value="text">1</option>
                          <option value="text">2</option>
                          <option value="text">3</option>
                          <option value="text">4</option>
                          <option value="text">5</option>
                        </select>
                      </div>
                      <div
                        class="display--flex align-itmes__center space--between"
                      >
                        <p class="sub-section--container__title">Objections:</p>
                        <select
                          name="interestRating"
                          class="sub-section--select-number margin--left__6"
                          id=""
                        >
                          <option value="text">1</option>
                          <option value="text">2</option>
                          <option value="text">3</option>
                          <option value="text">4</option>
                          <option value="text">5</option>
                        </select>
                      </div>
                      <div
                        class="display--flex align-itmes__center space--between"
                      >
                        <p class="sub-section--container__title">Duration:</p>
                        <select
                          name="interestRating"
                          class="sub-section--select-number margin--left__6"
                          id=""
                        >
                          <option value="text">1</option>
                          <option value="text">2</option>
                          <option value="text">3</option>
                          <option value="text">4</option>
                          <option value="text">5</option>
                        </select>
                      </div>
                    </div>
                    <div class="margin--left__12">
                      <div
                        class="display--flex align-itmes__center space--between"
                      >
                        <p class="sub-section--container__title">Potential:</p>
                        <select
                          name="interestRating"
                          class="sub-section--select-number margin--left__6"
                          id=""
                        >
                          <option value="text">1</option>
                          <option value="text">2</option>
                          <option value="text">3</option>
                          <option value="text">4</option>
                          <option value="text">5</option>
                        </select>
                      </div>
                      <div
                        class="display--flex align-itmes__center space--between"
                      >
                        <p class="sub-section--container__title">Clousure:</p>
                        <select
                          name="interestRating"
                          class="sub-section--select-number margin--left__6"
                          id=""
                        >
                          <option value="text">1</option>
                          <option value="text">2</option>
                          <option value="text">3</option>
                          <option value="text">4</option>
                          <option value="text">5</option>
                        </select>
                      </div>
                    </div>
                    <div class="display--flex width__100 align-items__flex-end justify-content-right">
                      <button class="finish-edit--button margin--left__12">Finish</button>
                    </div>
                  </div>`;
  return callContainer;
};

//renderizamos la información y creamos el html con los user-cards
const usersContainer = document.querySelector(".users-grid");
const renderData = () => {
  const usersLocalStorage = JSON.parse(localStorage.getItem("users"));
  usersLocalStorage.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.className = "event-card user-card grid-cell margin--bt__24";
    userCard.innerHTML = `<div class="event-card--text">
          <div class="display--flex">
            <div>
              <div class="rating-container">${user.overallRating}</div>
              <p class="margin-none text-align-center font-size__12">
                ID: ${user.id}
              </p>
            </div>
            <div
              class="event-card--text__p display--flex flex-direction-column margin--left__24"
            >
              <h3 class="event-card--text__title">${user.name}</h3>
              <div class="display--flex">
                <p class="margin-none color-orange">Estado:</p>
                <select name="userState" id="" class="margin--left__6">
                  <option class="" value="text">Interesado</option>
                  <option value="text">No interesado</option>
                  <option value="text">Conversión</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
          <div
            class="event-card--button-container display--flex space--between"
          >
            <button class="button-container--button calls-button-section">
              <img src="./imgs/phone.svg" alt="" />
            </button>
            <button class="button-container--button mails-button-section">
              <img src="./imgs/email.svg" alt="" />
            </button>
            <button class="button-container--button notes-button-section">
              <img src="./imgs/account-box-edit-outline.svg" alt="" />
            </button>
          </div><div class="event-card--sub-section"></div>`;
    usersContainer.appendChild(userCard);

    const subSectionContainer = userCard.querySelector(
      ".event-card--sub-section"
    );

    userCard
      .querySelector(".calls-button-section")
      .addEventListener("click", function () {
        console.log("botón llamada funciona");
        userCard
          .querySelector(".calls-button-section")
          .classList.toggle("button-container--button__selected");
        if (
          userCard
            .querySelector(".calls-button-section")
            .classList.contains("button-container--button__selected")
        ) {
          userCard.querySelector(
            ".event-card--sub-section"
          ).style.borderRadius = "0 5px 5px 5px";
          userCard.querySelector(".event-card--sub-section").style.display =
            "block";
          createDataCall(subSectionContainer, user);
        } else {
          userCard.querySelector(
            ".event-card--sub-section"
          ).style.borderRadius = "5px";
          userCard.querySelector(".event-card--sub-section").style.display =
            "none";
          subSectionContainer.innerHTML = "";
        }
      });

    userCard
      .querySelector(".mails-button-section")
      .addEventListener("click", function () {
        console.log("botón mail funciona");
        userCard
          .querySelector(".mails-button-section")
          .classList.toggle("button-container--button__selected");
        if (
          userCard
            .querySelector(".mails-button-section")
            .classList.contains("button-container--button__selected")
        ) {
          userCard.querySelector(".event-card--sub-section").style.display =
            "block";
        } else {
          userCard.querySelector(".event-card--sub-section").style.display =
            "none";
        }
      });

    userCard
      .querySelector(".notes-button-section")
      .addEventListener("click", function () {
        console.log("botón notas funciona");
        userCard
          .querySelector(".notes-button-section")
          .classList.toggle("button-container--button__selected");
        if (
          userCard
            .querySelector(".notes-button-section")
            .classList.contains("button-container--button__selected")
        ) {
          userCard.querySelector(
            ".event-card--sub-section"
          ).style.borderRadius = "5px 0 5px 5px";
          userCard.querySelector(".event-card--sub-section").style.display =
            "block";
        } else {
          userCard.querySelector(
            ".event-card--sub-section"
          ).style.borderRadius = "5px";
          userCard.querySelector(".event-card--sub-section").style.display =
            "none";
        }
      });
  });
};
renderData();

const updateUser = (id, callIndex, propToChange) => {
  const userDataLocalStorage = JSON.parse(localStorage.getItem("users"));
  const index = userDataLocalStorage.findIndex((user) => user.id === id);
  console.log(propToChange);
  if (index !== -1) {
    userDataLocalStorage[index].calls[callIndex] = {
      ...userDataLocalStorage[index].calls[callIndex],
      ...propToChange,
    };
    console.log(userDataLocalStorage[index].calls[callIndex]);
    const usersToStr = JSON.stringify(userDataLocalStorage);
    localStorage.setItem("users", usersToStr);
  }
};

const calculateGeneralRating = (person) => {
  // Calculamos el Mail Rating
  const emailValue =
    person.emails.sent * 0.1 +
    person.emails.open * 0.2 +
    person.emails.clicked * 0.3 +
    person.emails.openRate * 0.2 +
    person.emails.block * -0.1 +
    person.emails.rebound * -0.1;
  const emailRating = (emailValue / 2) * 5;
  person.emails.rating = emailRating;

  //Calculamos el Call Rating
  const callsRating = [];
  person.calls.forEach((call) => {
    const callRate =
      call.customerInterest * 0.2 +
      call.objectionsRaised * 0.15 +
      call.conversionPotential * 0.2 +
      call.callClosure * 0.2 +
      call.callDuration * 0.1 +
      call.technicalQuality * 0.15;
    callsRating.push(callRate);
  });

  const sumAllRates = callsRating.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const totalCallsRating = sumAllRates / callsRating.length;
  person.callsRating = totalCallsRating;

  //Final rating
  person.overallRating = emailRating + totalCallsRating;

  return person;
};

//console.log(calculateGeneralRating(person1));

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
