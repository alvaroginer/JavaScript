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
let totalDogsNum = 0;
function renderDogCounter() {
  const totalDogsCounter = document.querySelector("#totalDogsCounter");
  let totalCounterContent = totalDogsCounter.textContent;
  totalDogsNum += 1;

  let finalCount = totalCounterContent.split(":");
  finalCount[1] = totalDogsNum;

  totalDogsCounter.textContent = finalCount.join(": ");
}

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
  renderDogCounter();
});

document.querySelector("#add-5-dog").addEventListener("click", function () {
  addNDogs(5);
});

// Función de contador de 'Me gusta' dentro del container
function addLikeCounter() {
  const counterElement = document.querySelector(".like-counter");
  let counterContent = counterElement.textContent;

  let parts = counterContent.split(":");
  if (parts.length === 2) {
    let count = Number(parts[1].trim());
    count++;
    parts[1] = count;
    counterElement.textContent = parts.join(": ");
  }
}

document.querySelector(".like-button").addEventListener("click", function () {
  addLikeCounter();
});
