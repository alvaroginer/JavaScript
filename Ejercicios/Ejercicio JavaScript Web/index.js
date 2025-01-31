const perricosArray = [
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg",
];
console.log(perricosArray);

// Añadir contenedores de perros
// function renderDogArray() {
//   const listDogs = document.querySelector(".dog-container");
//   listDogs.innerHTML = "";

//   perricosArray.forEach((dogImage) => {
//     const addHtml = `<div class="container">
//         <div class="img-container">
//           <img src="${dogImage}" alt="" />
//         </div>
//         <div class="emoji-container">
//           <p>❤️ <span class="like-counter">0</span< </p>
//           <p>🤬:0</p>
//         </div>
//         <div class="emoji-container">
//           <button class="like-button">Me gusta</button>
//           <button class="not-like-button">No me gusta</button>
//         </div>
//       </div>`;

//     listDogs.innerHTML += addHtml;

//     console.log("me estoy ejecutando");
//   });

//   const likeCountNodes = document.querySelectorAll(".like-counter");

//   document.querySelectorAll(".like-button").forEach((element, index) => {
//     element.addEventListener("click", function () {
//       console.log("este código funciona");

//       likeCountNodes[index].textContent =
//         Number(likeCountNodes[index].textContent) + 1;
//     });
//   });
// }

// Función que añade un número N de perros
const addNDogs = async (num, addStart) => {
  for (let i = 0; i < num; i++) {
    const dogImage = await getRandomDogImage();
    if (addStart) {
      perricosArray.unshift(dogImage);
    } else {
      perricosArray.push(dogImage);
    }

    const addHtml = `<div class="container">
        <div class="img-container">
          <img src="${dogImage}" alt="" />
        </div>
        <div class="emoji-container">
          <p>❤️ <span class="like-counter">0</span></p>
          <p>🤬 <span class="dislike-counter">0</span></p>
        </div>
        <div class="emoji-container">
          <button class="like-button">Me gusta</button>
          <button class="dislike-button">No me gusta</button>
        </div>
      </div>`;

    const listDogs = document.querySelector(".dog-container");

    if (addStart) {
      listDogs.innerHTML = addHtml + listDogs.innerHTML;
    } else {
      listDogs.innerHTML += addHtml;
    }

    const likeCountNodes = document.querySelectorAll(".like-counter");

    document.querySelectorAll(".like-button").forEach((element, index) => {
      element.addEventListener("click", function () {
        console.log("el botón de like funciona");

        likeCountNodes[index].textContent =
          Number(likeCountNodes[index].textContent) + 1;
        likedDoggs();
        totalLikes();
      });
    });

    const dislikeCountNodes = document.querySelectorAll(".dislike-counter");
    document.querySelectorAll(".dislike-button").forEach((element, index) => {
      element.addEventListener("click", function () {
        console.log("el botón de dislike funciona");

        dislikeCountNodes[index].textContent =
          Number(dislikeCountNodes[index].textContent) + 1;
      });
    });
  }
};

// Contador total de perros
let totalDogsNum = 0;
function renderDogCounter(num) {
  const totalDogsCounter = document.querySelector("#totalDogsCounter");
  let totalCounterContent = totalDogsCounter.textContent;
  totalDogsNum += num;

  let finalCount = totalCounterContent.split(":");
  finalCount[1] = totalDogsNum;

  totalDogsCounter.textContent = finalCount.join(": ");
}

// Contador de los perros que tienen like
const likedDoggs = () => {
  const likedPublications = [];
  document.querySelectorAll(".like-counter").forEach((element, index) => {
    const likedDogsCounter = element.textContent;
    if (likedDogsCounter > 0) {
      console.log("estás accediendo bien a los datos", index);
      likedPublications.push(index);
    }
  });
  document.querySelector(
    ".likedDogsNumber"
  ).textContent = `${likedPublications.length}`;
};

// Contador de todos los likes
let allLikeCounter = 0;
const totalLikes = () => {
  allLikeCounter += 1;
  document.querySelector("#likes-number").textContent = `${allLikeCounter}`;
};

//Contador de los perros filtrados
const numberOfFilteredDogs = () => {
  const filteredDogsNum = document.querySelectorAll(".display-none").length;
  document.querySelector("#filter-dogs-num").textContent = filteredDogsNum;
};

document.querySelector("#add-1-dog").addEventListener("click", function () {
  if (hasFilter) {
    alert("Para añadir más perros tienes que quitar los filtros");
  } else {
    addNDogs(1);
    renderDogCounter(1);
  }
});

document.querySelector("#add-5-dog").addEventListener("click", function () {
  if (hasFilter) {
    alert("Para añadir más perros tienes que quitar los filtros");
  } else {
    addNDogs(5);
    renderDogCounter(5);
  }
});

document.querySelector("#add-1-start").addEventListener("click", function () {
  if (hasFilter) {
    alert("Para añadir más perros tienes que quitar los filtros");
  } else {
    addNDogs(1, true);
    renderDogCounter(1);
  }
});

document.querySelector("#add-5-start").addEventListener("click", function () {
  if (hasFilter) {
    alert("Para añadir más perros tienes que quitar los filtros");
  } else {
    addNDogs(5, true);
    renderDogCounter(5);
  }
});

//Funcionan lo filtros individualmente
let hasFilter = false;
let hasDisLikeFilter = false;
let hasLikeFilter = false;
const filterDogs = () => {
  document.querySelectorAll(".container").forEach((dogContainer, index) => {
    const likeCount = dogContainer.querySelector(".like-counter");
    const disLikeCount = dogContainer.querySelector(".dislike-counter");

    if (!hasLikeFilter && !hasDisLikeFilter) {
      dogContainer.style.display = "";
      return;
    }

    if (likeCount.textContent > "0" && hasLikeFilter === true) {
      console.log("entra encondición 2", index);
      dogContainer.style.display = "";
      return;
    }

    if (disLikeCount.textContent > "0" && hasDisLikeFilter === true) {
      console.log("entra en condición 3", index);
      dogContainer.style.display = "";
      return;
    }

    dogContainer.style.display = "none";
  });
};

const likeButton = document.querySelector("#only-like-dogs");
likeButton.addEventListener("click", function () {
  hasLikeFilter = !hasLikeFilter;
  likeButton.classList.toggle("button-selected");
  filterDogs();
  numberOfFilteredDogs();
});

const disLikeButton = document.querySelector("#only-dislike-dogs");
disLikeButton.addEventListener("click", function () {
  hasDisLikeFilter = !hasDisLikeFilter;
  disLikeButton.classList.toggle("button-selected");
  filterDogs();
  numberOfFilteredDogs();
});
