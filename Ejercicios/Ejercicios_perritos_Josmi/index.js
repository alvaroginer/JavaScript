const perricosArray = [
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg",
];
console.log(perricosArray);

//Función para crear los contenedores de perros
const createDog = (dogImg) => {
  //Creamos el los dogCard
  const dogCard = document.createElement("div");
  dogCard.className = "container";
  dogCard.innerHTML = `<div class="img-container">
          <img src="${dogImg}" alt="" />
        </div>
        <div class="emoji-container">
          <p>❤️ <span class="like-counter">0</span></p>
          <p>🤬 <span class="dislike-counter">0</span></p>
        </div>
        <div class="emoji-container">
          <button class="like-button">Me gusta</button>
          <button class="dislike-button">No me gusta</button>
        </div>`;

  //Añadimos los EventListener a los botones de dentro de card
  dogCard.querySelector(".like-button").addEventListener("click", function () {
    console.log("El botón de like funciona");
    allLikes();
    dogCard.querySelector(".like-counter").textContent =
      Number(dogCard.querySelector(".like-counter").textContent) + 1;
  });

  dogCard
    .querySelector(".dislike-button")
    .addEventListener("click", function () {
      console.log("El botón de dislike funciona");
      dogCard.querySelector(".dislike-counter").textContent =
        Number(dogCard.querySelector(".dislike-counter").textContent) + 1;
    });
  return dogCard;
};

//Función para añadir los contenedores de perros y las imágenes al HTML
const addDog = async (num, start) => {
  //Añadimos las imágenes al array y añadimos los contenedores al html
  const allDogsContainer = document.querySelector(".dog-container");
  for (let i = 0; i < num; i++) {
    const dogImg = await getRandomDogImage();
    if (start) {
      perricosArray.unshift(dogImg);
      allDogsContainer.prepend(createDog(dogImg));
    } else {
      perricosArray.push(dogImg);
      allDogsContainer.appendChild(createDog(dogImg));
    }
  }
  totalDogs();
};

// Añadimos EventListeners a los botones de arriba
const buttonContainer = document.querySelector(".all-buttons");

buttonContainer
  .querySelector("#add-1-dog")
  .addEventListener("click", function () {
    addDog(1, false);
  });

buttonContainer
  .querySelector("#add-5-dog")
  .addEventListener("click", function () {
    addDog(5, false);
  });

buttonContainer
  .querySelector("#add-1-start")
  .addEventListener("click", function () {
    addDog(1, true);
  });

buttonContainer
  .querySelector("#add-5-start")
  .addEventListener("click", function () {
    addDog(5, true);
  });

//Funciones para que los contadores de abajo funcionen
const allCounters = document.querySelector(".container-counters");
const totalDogs = () => {
  allCounters.querySelector("#total-dogs-counter").textContent = `Total Dogs: ${
    perricosArray.length - 1
  }`;
};

//TERMINAR EL CONTADOR DE PERROS CON LIKES
const allLikedDogs = () => {
  document.querySelectorAll(".like-counter").forEach((dogContainer, index) => {
    const likedContainers = [];
    if (dogContainer > 0) {
      likedContainers.push(index);
    }
  });
};

const allLikes = () => {
  allCounters.querySelector("#likes-number").textContent =
    Number(allCounters.querySelector("#likes-number").textContent) + 1;
};
