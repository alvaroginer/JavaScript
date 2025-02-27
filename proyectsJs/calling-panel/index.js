//Tipo de objeto que hay que pasar
const person1 = {
  id: 12345,
  name: "John Doe",
  number: "+1234567890",
  email: "johndoe@gmail.com",
  currentInterest: true,
  calls: [
    {
      number: 1,
      customerInterest: 5,
      objectionsRaised: 4,
      conversionPotential: 5,
      callClosure: 5,
      callDuration: 3,
      technicalQuality: 4,
    },
    {
      number: 2,
      customerInterest: 4,
      objectionsRaised: 2,
      conversionPotential: 3,
      callClosure: 2,
      callDuration: 2,
      technicalQuality: 4,
    },
  ],
  callsRating: 0,
  emails: {
    sent: 4,
    open: 2,
    clicked: 1,
    openRate: Math.round(50 / 10),
    block: 0,
    rebound: 0,
    rating: 0,
  },

  overallRating: 0,
};

//Función para extraer información del archivo json
async function extractDataJson() {
  try {
    const answer = await fetch("./data.json"); // Ruta del archivo JSON
    if (!answer.ok) {
      throw new Error("Error al cargar el JSON");
    }
    const data = await answer.json();
    return data.persons;
    console.log(data); // Aquí puedes usar los datos como un objeto
  } catch (error) {
    console.error("Hubo un problema con la carga del JSON:", error);
  }
}

const uploadData = async () => {
  const usersData = await extractDataJson();
  localStorage.setItem("users", JSON.stringify(usersData));
};

uploadData();

//Función para crear el div de la llamada
// Hacer prependChild y ordenar las llamadas de última a anterior

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

    userCard
      .querySelector(".calls-button-section")
      .addEventListener("click", function () {
        console.log("botón llamada funciona");
      });

    userCard
      .querySelector(".mails-button-section")
      .addEventListener("click", function () {
        console.log("botón mail funciona");
      });

    userCard
      .querySelector(".notes-button-section")
      .addEventListener("click", function () {
        console.log("botón notas funciona");
      });
  });
};
renderData();

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
