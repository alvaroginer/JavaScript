const perricosArray = [
  {
    url: "https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg",
    breedName: "affenpinscher",
  },
];
console.log(perricosArray);

//Funciones del timeout e inactividad
const timeoutId = setTimeout(() => {
  document.querySelector("#add-warning").style.display = "";
}, 3000);

function clearWarningMessage() {
  clearTimeout(timeoutId);
  document.querySelector("#add-warning").style.display = "none";
}

//Función para añadir eventListeners a los botones de like y dislikes a los contenedores que se van crendo
function addSocialListeners() {
  document.querySelectorAll(".like").forEach((buttonNode) => {
    buttonNode.addEventListener("click", function () {
      const hermanico = buttonNode.previousElementSibling;
      const likeCountNode = hermanico.querySelector(".like-count");
      likeCountNode.innerText = Number(likeCountNode.innerText) + 1;
    });
  });

  document.querySelectorAll(".dislike").forEach((buttonNode) => {
    buttonNode.addEventListener("click", function () {
      console.log(buttonNode.closest(".card"));
      const likeCountNode = buttonNode
        .closest(".card")
        .querySelector(".dislike-count");
      likeCountNode.innerText = Number(likeCountNode.innerText) + 1;
    });
  });
}

//Función que genera el select para filtrar por razas
let breedFilter = {};
const generateBreedFilter = () => {
  breedFilter = {};
  perricosArray.forEach((dog) => {
    if (!breedFilter[dog.breedName]) {
      breedFilter[dog.breedName] = {
        total: 1,
        breed: dog.breedName,
        breedNameFilter: dog.breedName,
      };
    } else {
      breedFilter[dog.breedName].total++;
      breedFilter[dog.breedName].breedNameFilter = `${dog.breedName} (${
        breedFilter[dog.breedName].total
      })`;
    }
  });

  const selectElement = document.querySelector("#filter-dog-select");
  selectElement.innerHTML = "";
  const everythingSelect = document.createElement("option");
  everythingSelect.className = "everything";
  everythingSelect.textContent = "Everything";
  selectElement.appendChild(everythingSelect);

  Object.keys(breedFilter).forEach((breed) => {
    const option = document.createElement("option");
    option.className = breed;
    option.textContent = breedFilter[breed].breedNameFilter;
    selectElement.appendChild(option);
  });
};

//Función para mostrar al primer perro o a los que está filtrados y no se ven
function renderPerricoArray() {
  const dogList = document.querySelector("#dog-list");
  dogList.innerHTML = "";

  perricosArray.forEach((dogImage, index) => {
    const htmlAdd = `<div class="card">
  <img src="${dogImage.url}" alt="Perro" />
  <br />
  <p><span class="like-count"></span>❤️ <span class="dislike-count"></span>🤮</p>
  <button class="like">Preciosísimo</button> <button class="dislike">Feísisimo</button>
</div>`;

    dogList.innerHTML += htmlAdd;
  });

  addSocialListeners();
  generateBreedFilter();
}

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
  console.log(perricoImg);
  document.querySelector("#add-1-perrico").removeAttribute("disabled");
  if (addToStart) {
    perricosArray.unshift(perricoImg);
  } else {
    perricosArray.push(perricoImg);
  }

  const isAnyFilterSelected = document.querySelector(".filter-selected");

  const perricoCardElement = document.createElement("div");
  perricoCardElement.className = "card";
  perricoCardElement.style.display = isAnyFilterSelected ? "none" : "";

  perricoCardElement.innerHTML = `
  <img src="${perricoImg.url}" alt="Perro" />
  <br />
  <p><span class="like-count"></span>❤️ <span class="dislike-count"></span>🤮</p>
  <button class="like">Preciosísimo</button> <button class="dislike">Feísisimo</button>`;

  if (addToStart) {
    dogList.prepend(perricoCardElement);
  } else {
    dogList.appendChild(perricoCardElement);
  }

  const likeButton = perricoCardElement.querySelector(".like");

  likeButton.addEventListener("click", function () {
    const likeCountNode = perricoCardElement.querySelector(".like-count");
    likeCountNode.innerText = Number(likeCountNode.innerText) + 1;
  });

  const dislikeButton = perricoCardElement.querySelector(".dislike");
  dislikeButton.addEventListener("click", function () {
    const likeCountNode = perricoCardElement.querySelector(".dislike-count");
    likeCountNode.innerText = Number(likeCountNode.innerText) + 1;
  });

  generateBreedFilter();
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
  likeFilterButton.classList.toggle("filter-selected");
  filterPerricos();
});

const dislikeFilter = document.querySelector("#dislike-filter");

dislikeFilter.addEventListener("click", function () {
  dislikeFilter.classList.toggle("filter-selected");
  filterPerricos();
});

// Función que filtra a los perros en funciónd e si tienen like o dislike
function filterPerricos() {
  const isLikeFilterSelected =
    likeFilterButton.classList.contains("filter-selected");
  const isDislikeSelected = dislikeFilter.classList.contains("filter-selected");
  console.log("filtering", {
    isLikeFilterSelected,
    isDislikeSelected,
  });

  document.querySelectorAll(".card").forEach((perricoNode) => {
    // si no hay ningún filtro aplicado, lo muestra
    if (!isLikeFilterSelected && !isDislikeSelected) {
      perricoNode.style.display = "";
      return;
    }
    // si preciosismo aplicado y hay preciosisimo lo muestra
    const likeCount = perricoNode.querySelector(".like-count").innerText;
    if (likeCount !== "" && isLikeFilterSelected) {
      perricoNode.style.display = "";
      return;
    }

    // si feísimo aplicado y hay feísimo lo muestra
    const dislikeCount = perricoNode.querySelector(".dislike-count").innerText;
    if (dislikeCount !== "" && isDislikeSelected) {
      perricoNode.style.display = "";
      return;
    }

    perricoNode.style.display = "none";
  });
}

document
  .querySelector("#dislike-filter")
  .addEventListener("click", function () {
    console.log("dislike filter clicked");
  });

renderPerricoArray();

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
let breedFilterDog = "";
document
  .querySelector("#filter-dog-select")
  .addEventListener("change", function (event) {
    breedFilterDog = event.target.value;
    if (breedFilterDog === "Everything") {
      dogList.innerHTML = "";
      perricosArray.forEach((dog) => {
        renderPerricoArray();
      });
      return;
    }
    filterByBreed();
  });

// Función que filtra por razas
const filterByBreed = () => {
  const onlyBreedName = breedFilterDog.split(" ");
  const filterBreed = perricosArray.filter((dogObject) => {
    return dogObject.breedName === onlyBreedName[0];
  });

  dogList.innerHTML = "";

  filterBreed.forEach((dog) => {
    const dogCard = document.createElement("div");
    dogCard.className = "card";
    dogCard.innerHTML = `<img src="${dog.url}" alt="Perro" />
    <br />
    <p><span class="like-count"></span>❤️ <span class="dislike-count"></span>🤮</p>
    <button class="like">Preciosísimo</button> <button class="dislike">Feísisimo</button>`;

    dogList.appendChild(dogCard);
  });

  addSocialListeners();
};
