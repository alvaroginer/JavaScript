async function getRandomDogImage() {
  const url = "https://dog.ceo/api/breeds/image/random";
  try {
    console.log("esto es antes 2");
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    return json.message;
  } catch (error) {
    console.log("esto es antes 3");
    console.error(error.message);
  }
}

async function getDogBreed() {
  const url = "https://dog.ceo/api/breeds/list/all";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    return json.message;
  } catch (error) {
    console.error(error.message);
  }
}

async function getDogImageBreed(breed) {
  let randomNum = Math.floor(Math.random() * 107 + 1);
  const allDogBreedObject = await getDogBreed();
  const breedsArray = Object.keys(allDogBreedObject);
  let randomBreed = breedsArray[randomNum];
  let url =
    breed === "random"
      ? `https://dog.ceo/api/breed/${randomBreed}/images/random`
      : `https://dog.ceo/api/breed/${breed}/images/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    return breed === "random"
      ? {
          url: json.message,
          breedName: randomBreed,
          id: new Date().getTime() + Math.random(),
        }
      : {
          url: json.message,
          breedName: breed,
          id: new Date().getTime() + Math.random(),
        };
  } catch (error) {
    console.error(error.message);
  }
}
