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
const addNDogs = async (num) => {
  for (let i = 0; i < num; i++) {
    const dogImage = await getRandomDogImage();
    perricosArray.push(dogImage);

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
    listDogs.innerHTML += addHtml;

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

//Función que añade N número de perros al principio
const addNDogsStart = async (num) => {
  for (let i = 0; i < num; i++) {
    const dogImage = await getRandomDogImage();
    perricosArray.push(dogImage);

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
    listDogs.innerHTML = addHtml + listDogs.innerHTML;

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

// Filtra los perros con likes
const onlyLikedDogs = () => {
  document.querySelectorAll(".container").forEach((dogContainer) => {
    const likeCounter = dogContainer.querySelector(".like-counter");
    const likeButton = document.querySelector("#only-like-dogs");
    if (likeCounter.textContent === "0") {
      dogContainer.classList.toggle("display-none");
    }

    likeButton.classList.toggle("button-selected");
  });
};

//Filtro de perros sin likes
const onlyHatedDogs = () => {
  document.querySelectorAll(".container").forEach((dogcontainer) => {
    const dislikeCounter = dogcontainer.querySelector(".dislike-counter");
    const disLikeButton = dogcontainer.querySelector("#only-dislike-dogs");
    if (dislikeCounter.textContent === "0") {
      dogcontainer.classList.toggle("display-none");
    }

    disLikeButton.classList.toggle("button-selected");
  });
};

// Quita el filtro de los perros sin likes
// const returnAllDogs = () => {
//   document.querySelectorAll(".container").forEach((dogcontainer) => {
//     dogcontainer.classList.remove("display-none");
//   });
// };

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
let likeCounter = 0;
const totalLikes = () => {
  likeCounter += 1;
  document.querySelector("#likes-number").textContent = `${likeCounter}`;
};

//Contador de los perros filtrados
const numberOfFilteredDogs = () => {
  const filteredDogsNum = document.querySelectorAll(".display-none").length;
  document.querySelector("#filter-dogs-num").textContent = filteredDogsNum;
};

document.querySelector("#add-1-dog").addEventListener("click", function () {
  addNDogs(1);
  renderDogCounter(1);
});

document.querySelector("#add-5-dog").addEventListener("click", function () {
  addNDogs(5);
  renderDogCounter(5);
});

document.querySelector("#add-1-start").addEventListener("click", function () {
  addNDogsStart(1);
  renderDogCounter(1);
});

document.querySelector("#add-5-start").addEventListener("click", function () {
  addNDogsStart(5);
  renderDogCounter(5);
});

document
  .querySelector("#only-like-dogs")
  .addEventListener("click", function () {
    onlyLikedDogs();
    numberOfFilteredDogs();
  });

document
  .querySelector("#only-dislike-dogs")
  .addEventListener("click", function () {
    onlyHatedDogs();
    numberOfFilteredDogs();
  });

// document
//   .querySelector("#return-all-dogs")
//   .addEventListener("click", function () {
//     returnAllDogs();
//     numberOfFilteredDogs();
//   });
