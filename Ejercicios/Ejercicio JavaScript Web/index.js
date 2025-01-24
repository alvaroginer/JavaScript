const perricosArray = [
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg",
];
console.log(perricosArray);

// Añadir contenedores de perros
function renderDogArray() {
  const listDogs = document.querySelector(".dog-container");
  listDogs.innerHTML = "";

  perricosArray.forEach((dogImage) => {
    const addHtml = `<div class="container">
        <div class="img-container">
          <img src="${dogImage}" alt="" />
        </div>
        <div class="emoji-container">
          <p class="like-counter">❤️:0</p>
          <p>🤬</p>
        </div>
        <div class="emoji-container">
          <button class="like-button">Me gusta</button>
          <button class="not-like-button">No me gusta</button>
        </div>
      </div>`;

    listDogs.innerHTML += addHtml;
  });
}

// Arreglar contador
let totalDogsNum = 1;
function renderDogCounter(num) {
  const totalDogsCounter = document.querySelector("#totalDogsCounter");
  let totalCounterContent = totalDogsCounter.textContent;
  totalDogsNum += num;

  let finalCount = totalCounterContent.split(":");
  finalCount[1] = totalDogsNum;

  totalDogsCounter.textContent = finalCount.join(": ");
}

// Función que añade un número N de perros
const addNDogs = async (num) => {
  for (let i = 0; i < num; i++) {
    const dogImage = await getRandomDogImage();
    perricosArray.push(dogImage);
    renderDogArray();
  }
};

renderDogArray();

document.querySelector("#add-1-dog").addEventListener("click", function () {
  addNDogs(1);
  renderDogCounter(1);
});

document.querySelector("#add-5-dog").addEventListener("click", function () {
  addNDogs(5);
  renderDogCounter(5);
});

// Función de contador de 'Me gusta' dentro del container
function addLikeCounter() {
  document.querySelectorAll(".like-counter").forEach((text) => {
    let counterContent = text.textContent;

    let parts = counterContent.split(":");
    let count = Number(parts[1]);
    count++;
    parts[1] = count;
    counterContent.textContent = parts.join(": ");
  });
}

document.querySelectorAll(".like-button").forEach((element) => {
  element.addEventListener("click", function () {
    addLikeCounter();
  });
});
