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

// Elimina los perros sin likes
const onlyLikedDogs = () => {
  document.querySelectorAll(".container").forEach((dogcontainer) => {
    const likeCounter = dogcontainer.querySelector(".like-counter");
    if (likeCounter.textContent === "0") {
      dogcontainer.remove();
    }
  });
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
    if (Number(likedDogsCounter) > 0) {
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
  renderDogCounter(1);
});

document
  .querySelector("#only-like-dogs")
  .addEventListener("click", function () {
    onlyLikedDogs();
  });
