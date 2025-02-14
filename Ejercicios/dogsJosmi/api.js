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
  let url =
    breed === ""
      ? "https://dog.ceo/api/breeds/image/random"
      : `https://dog.ceo/api/breed/${breed}/images/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    return { url: json.message, breedName: breed };
  } catch (error) {
    console.error(error.message);
  }
}

// async function getDogImageBreed(breed) {
//   let url =
//     breed === ""
//       ? "https://dog.ceo/api/breeds/image/random"
//       : `https://dog.ceo/api/breed/${breed}/images/random`;

//   try {
//     console.log("esto es antes 2");
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();

//     return json.message
//   } catch (error) {
//     console.log("esto es antes 3");
//     console.error(error.message);
//   }
// }
