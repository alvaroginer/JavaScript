const perricosArray = [
  {
    url: "https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg",
    breedName: "affenpischer",
  },
];
console.log(perricosArray);

const timeoutId = setTimeout(() => {
  document.querySelector("#add-warning").style.display = "";
}, 3000);
// console.log(getRandomDogImage());

// addPerrico();

function clearWarningMessage() {
  clearTimeout(timeoutId);
  document.querySelector("#add-warning").style.display = "none";
}

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

//Función para mostrar al primer perro
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
}

let dogBreed = "";
document
  .querySelector("#dog-select")
  .addEventListener("change", function (event) {
    dogBreed = event.target.value;
  });

const dogList = document.querySelector("#dog-list");
const addPerrico = async (breed, addToStart) => {
  console.log("esto es antes");
  document.querySelector("#add-1-perrico").setAttribute("disabled", "disabled");
  const perricoImg = await getDogImageBreed(breed);
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
};

const buttonDisabled = () => {};

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

const generateSelect = async () => {
  const dogBreed = await getDogBreed();
  Object.keys(dogBreed).forEach((breed) => {
    const option = document.createElement("option");
    option.className = `${breed}`;
    option.textContent = `${breed}`;
    document.querySelector("#dog-select").appendChild(option);
  });
};
generateSelect();

const filterByBreed = () => {
  const filterBreed = perricosArray.filter((dogObject) => {
    return dogObject.breedName === dogBreed;
  });

  //dogList.innerHTML = "";

  filterBreed.forEach((dogImage, index) => {
    const dogCard = document.createElement("div");
    dogCard.className("card");
    dogCard.innerHTML = `<img src="${dogImage.url}" alt="Perro" />
  <br />
  <p><span class="like-count"></span>❤️ <span class="dislike-count"></span>🤮</p>
  <button class="like">Preciosísimo</button> <button class="dislike">Feísisimo</button>`;

    dogList.appendChild(htmlAdd);
  });

  addSocialListeners();
};

const filterButton = document.querySelector("#breed-filter");
filterButton.addEventListener("click", function () {
  filterButton.classList.toggle("filter-selected");
  if (filterButton.classList.contains("filter-selected")) {
    filterByBreed();
  }
  //Esta parte de la función no funciona
  dogList.innerHTML = "";
  perricosArray.forEach((dog) => {
    addPerrico(dog.breedName);
  });
});
