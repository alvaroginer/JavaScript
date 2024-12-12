function XO(str) {
  if (
    !str.includes("x", "X", "o", "O") &&
    (str.includes("x", "X") || str.includes("o", "O"))
  ) {
    const howManyX1 = str.replace(/[^x,X]/g, "").length;
    const howManyO1 = str.replace(/[^o,O]/g, "").length;
    const proveX1andO1 = howManyX1 === howManyO1;
    return proveX1andO1;
  } else if (!str.includes("x", "X", "o", "O")) {
    return true;
  }
  const howManyX = str.replace(/[^x,X]/g, "").length;
  const howManyO = str.replace(/[^o,O]/g, "").length;
  const proveXandO = howManyX === howManyO;
  return proveXandO;
}

console.log(XO("op"));

// Opción smileys 1
function countSmileys(arr) {
  let smileysNum = 0;

  arr.forEach(function (face) {
    const hasCorrectEyes = face[0] === ":" || face[0] === ";";
    const mouthPosition = face.length - 1;
    const hasCorrectMouth =
      face[mouthPosition] === ")" || face[mouthPosition] === "D";

    if (face.length === 2) {
      if (hasCorrectEyes && hasCorrectMouth) {
        smileysNum += 1;
      }
    }

    if (face.length === 3) {
      if (
        hasCorrectEyes &&
        (face[1] === "-" || face[1] === "~") &&
        hasCorrectMouth
      ) {
        smileysNum += 1;
      }
    }
  });

  return smileysNum;
}

//Title Case resuelto
function titleCase(title, minorWords) {
  if (!title) {
    return "";
  }

  const resultArr = [];
  const titleArr = title.toLowerCase().split(" ");
  let minorWordsArr = [];
  if (minorWords !== undefined) {
    minorWordsArr = minorWords.toLowerCase().split(" ");
  }

  titleArr.forEach(function (letter, index) {
    if (index === 0 || !minorWordsArr.includes(letter)) {
      const separatedWord = letter[0].toUpperCase() + letter.slice(1);
      resultArr.push(separatedWord);
    } else {
      resultArr.push(letter);
    }
  });
  const resultString = resultArr.join(" ");
  return resultString;
}

console.log(titleCase("the quick brown fox"));

// Katas Ternarios
/** Crear una función que, dados dos parámetros, name y age:
 * Si name y age tienen un valor devolveremos Hola me llamo [NAME] y tengo [AGE] años
 * Si age no tiene valor pero name si devolveremos Hola me llamo [NAME]
 * Si ninguno tiene valor devolvermos No quiero decirte mi nombre, pringao
 */

// const whatName = (name1, age) => {
//   if (name1 !== undefined && age !== undefined){
//     return `Hola me llamo ${name1} y tengo ${age} años`
//   } else if (name1 !== undefined && age === undefined){
//     return `Hola me llamo ${name1}`
//   }
//   return 'No quiero decirte mi nombre, pringao'
// }

const whatName = (name1, age) => {
  const personNameAndAge =
    name1 !== undefined && age !== undefined
      ? `Hola me llamo ${name1} y tengo ${age} años`
      : name1 !== undefined && age === undefined
      ? `Hola me llamo ${name1}`
      : "No quiero decirte mi nombre, pringao";
  return personNameAndAge;
};

console.log(whatName("Alvaro"));
