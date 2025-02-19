const perricosArray = [
  {
    url: "https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg",
    breedName: "affenpinscher",
    id: new Date().getTime() + Math.random(),
    like: 0,
    dislike: 0,
  },
];
console.log(perricosArray);

const breedToFilter = [];

const activeFilter = {
  dislike: false,
  like: false,
  breedToFilter,
};

//Funciones del timeout e inactividad
const timeoutId = setTimeout(() => {
  document.querySelector("#add-warning").style.display = "";
}, 3000);

function clearWarningMessage() {
  clearTimeout(timeoutId);
  document.querySelector("#add-warning").style.display = "none";
}

//Función que genera los botones con las razas y les añade los eventListeners
const breedFilter = {};
const generateBreedButtons = (dog) => {
  //Actualizamos el objeto
  if (!breedFilter[dog.breedName]) {
    breedFilter[dog.breedName] = {
      ...dog,
      total: 1,
    };

    console.log(breedFilter);

    //Creamos el objeto en el HTML
    const buttonBreedContainer = document.querySelector(
      ".created-breed-buttons-container"
    );

    const button = document.createElement("button");
    button.className = `${dog.breedName}-filter`;
    button.textContent = dog.breedName;
    buttonBreedContainer.appendChild(button);

    const buttonSelector = document.querySelector(`.${dog.breedName}-filter`);

    //Botón añade y elimina clases y el filtro por si está activo
    buttonSelector.addEventListener("click", function () {
      if (!breedToFilter.includes(dog.breedName)) {
        activeFilter.breedToFilter.push(dog.breedName);
        buttonSelector.classList.add("filter-selected");
        //console.log(breedToFilter);
      } else {
        activeFilter.breedToFilter.splice(
          breedToFilter.indexOf(dog.breedName),
          1
        );
        buttonSelector.classList.remove("filter-selected");
        //console.log(breedToFilter);
      }
      filterActive();
    });
    return;
  } else {
    breedFilter[dog.breedName].total++;
    console.log("se está sumando aquí");
    document.querySelector(`.${dog.breedName}-filter`).textContent = `${
      dog.breedName
    } (${breedFilter[dog.breedName].total})`;
    return;
  }
};
generateBreedButtons(perricosArray[0]);

//EventListener para el select de todas las razas de perro
let dogBreed = "random";
document
  .querySelector("#dog-select")
  .addEventListener("change", function (event) {
    dogBreed = event.target.value;
  });

//Función para añadir los contenedores de los perros cuanod se pulsa en alguno denlos botones
const dogList = document.querySelector("#dog-list");
const addPerrico = async (breed, addToStart) => {
  document.querySelector("#add-1-perrico").setAttribute("disabled", "disabled");

  const perricoImg = await getDogImageBreed(breed);

  document.querySelector("#add-1-perrico").removeAttribute("disabled");
  if (addToStart) {
    perricosArray.unshift(perricoImg);
  } else {
    perricosArray.push(perricoImg);
  }

  generateBreedButtons(perricoImg);
  renderPerricoArray(perricoImg);
};

//EvenListeners de los botones que añaden perros
document.querySelector("#add-1-perrico").addEventListener("click", function () {
  clearWarningMessage();
  addPerrico(dogBreed);
});

document
  .querySelector("#add-1-perrico-start")
  .addEventListener("click", function () {
    clearWarningMessage();

    addPerrico(dogBreed, true);
  });

document
  .querySelector("#add-5-perricos")
  .addEventListener("click", function () {
    clearWarningMessage();

    addPerrico(dogBreed);
    addPerrico(dogBreed);
    addPerrico(dogBreed);
    addPerrico(dogBreed);
    addPerrico(dogBreed);
  });

//EventListeners para los botones del filtro de Like y Dislike
const likeFilterButton = document.querySelector("#like-filter");

likeFilterButton.addEventListener("click", function () {
  if (!likeFilterButton.classList.contains("filter-selected")) {
    likeFilterButton.classList.add("filter-selected");
    activeFilter.like = true;
  } else {
    likeFilterButton.classList.remove("filter-selected");
    activeFilter.like = false;
  }
  filterActive();
});

const dislikeFilter = document.querySelector("#dislike-filter");

dislikeFilter.addEventListener("click", function () {
  if (!dislikeFilter.classList.contains("filter-selected")) {
    dislikeFilter.classList.add("filter-selected");
    activeFilter.dislike = true;
  } else {
    dislikeFilter.classList.remove("filter-selected");
    activeFilter.dislike = false;
  }
  filterActive();
});

// Función que filtra a los perros en función de si tienen like o dislike
// function filterPerricos() {
//   const isLikeFilterSelected =
//     likeFilterButton.classList.contains("filter-selected");
//   const isDislikeSelected = dislikeFilter.classList.contains("filter-selected");
//   console.log("filtering", {
//     isLikeFilterSelected,
//     isDislikeSelected,
//   });

//   document.querySelectorAll(".card").forEach((perricoNode) => {
//     // si no hay ningún filtro aplicado, lo muestra
//     if (!isLikeFilterSelected && !isDislikeSelected) {
//       perricoNode.style.display = "";
//       return;
//     }
//     // si preciosismo aplicado y hay preciosisimo lo muestra
//     const likeCount = perricoNode.querySelector(".like-count").innerText;
//     if (likeCount !== "" && isLikeFilterSelected) {
//       perricoNode.style.display = "";
//       return;
//     }

//     // si feísimo aplicado y hay feísimo lo muestra
//     const dislikeCount = perricoNode.querySelector(".dislike-count").innerText;
//     if (dislikeCount !== "" && isDislikeSelected) {
//       perricoNode.style.display = "";
//       return;
//     }

//     perricoNode.style.display = "none";
//   });
// }

const renderPerricoArray = (dogObject, addToStart) => {
  const perricoCardElement = document.createElement("div");
  perricoCardElement.className = "card";

  perricoCardElement.innerHTML = `
    <img src="${dogObject.url}" alt="Perro" />
    <br />
    <p><span class="like-count">${dogObject.like}</span>❤️ <span class="dislike-count">${dogObject.dislike}</span>🤮</p>
    <button class="like">Preciosísimo</button> <button class="dislike">Feísisimo</button>`;

  if (addToStart) {
    dogList.prepend(perricoCardElement);
  } else {
    dogList.appendChild(perricoCardElement);
  }

  const likeButton = perricoCardElement.querySelector(".like");
  let index = perricosArray.indexOf(dogObject);
  likeButton.addEventListener("click", function () {
    const likeCountNode = perricoCardElement.querySelector(".like-count");
    perricosArray[index].like++;
    likeCountNode.innerText = perricosArray[index].like;
  });

  const dislikeButton = perricoCardElement.querySelector(".dislike");
  dislikeButton.addEventListener("click", function () {
    const likeCountNode = perricoCardElement.querySelector(".dislike-count");
    perricosArray[index].dislike++;
    likeCountNode.innerText = perricosArray[index].dislike;
  });

  //generateBreedButtons(dogObject);
};

renderPerricoArray(perricosArray[0]);

//Falta terminar la lógica del filtro
const filterActive = () => {
  //Reiniciamos HTML
  dogList.innerHTML = "";
  const hasAnyFiltersApplied =
    activeFilter.breedToFilter.length > 0 ||
    activeFilter.like ||
    activeFilter.dislike;

  const filterArray = !hasAnyFiltersApplied
    ? perricosArray
    : perricosArray.filter((dog) => {
        if (activeFilter.like && dog.like === 0) {
          console.log("entra en la condición 1");
          return false;
        }

        if (activeFilter.dislike && dog.dislike === 0) {
          console.log("entra en la condición 2");
          return false;
        }

        if (
          activeFilter.breedToFilter.length > 0 &&
          !activeFilter.breedToFilter.includes(dog.breedName)
        ) {
          console.log("entra en la condición 3");
          return false;
        }

        if (activeFilter.like && activeFilter.dislike) {
          console.log("entra en la condición 4");
          return dog.like > 0 && dog.dislike > 0;
        }
        return true;
      });

  console.log(filterArray);
  //Añadimos el código al html
  filterArray.forEach((dog) => {
    renderPerricoArray(dog);
  });
};

//Función para generar el select con todas las razas de los perros
const generateSelect = async () => {
  const dogBreed = await getDogBreed();
  console.log(Object.keys(dogBreed).length);
  Object.keys(dogBreed).forEach((breed) => {
    const option = document.createElement("option");
    option.className = `${breed}`;
    option.textContent = `${breed}`;
    document.querySelector("#dog-select").appendChild(option);
  });
};
generateSelect();

//EventListener del select para filtrar por las razas de perros que hay en la web
// let breedFilterDog = "";
// document
//   .querySelector("#filter-dog-select")
//   .addEventListener("change", function (event) {
//     breedFilterDog = event.target.value;
//     if (breedFilterDog === "Everything") {
//       dogList.innerHTML = "";
//       perricosArray.forEach((dog) => {
//         renderPerricoArray();
//       });
//       return;
//     }
//     filterByBreed();
//   });

// Función que filtra por razas
// const filterByBreed = () => {
//   const onlyBreedName = breedFilterDog.split(" ");
//   const filterBreed = perricosArray.filter((dogObject) => {
//     return dogObject.breedName === onlyBreedName[0];
//   });

//   dogList.innerHTML = "";

//   filterBreed.forEach((dog) => {
//     const dogCard = document.createElement("div");
//     dogCard.className = "card";
//     dogCard.innerHTML = `<img src="${dog.url}" alt="Perro" />
//     <br />
//     <p><span class="like-count"></span>❤️ <span class="dislike-count"></span>🤮</p>
//     <button class="like">Preciosísimo</button> <button class="dislike">Feísisimo</button>`;

//     dogList.appendChild(dogCard);
//   });

//   addSocialListeners();
// };
