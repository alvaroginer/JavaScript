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

// hacer un sort de A
// hacer un forEach de cada letter de A a una nueva variable
// separar el array con un espacio mediante un condicional en el que ponga que if (letter !== array[index-1]){newArr.push(' ')}
// coger el nuevo array y hacer un join(' ')
// hacer un find de newArr y poner un condicional de si numbers.length % === 0 return numbers[0]

function findOdd(A) {
  const sortedA = A.sort((a, b) => a - b);
  const newArr = [];
  sortedA.forEach(function (letter, index) {
    if (letter !== A[(index - 1) % A.length]) {
      newArr.push(" ");
    }
    newArr.push(letter);
  });

  const arrWithOut0 = newArr.slice(1);

  const numToString = arrWithOut0.map(function (numbers) {
    numbers = numbers.toString(numbers);
    return numbers;
  });

  console.log(numToString);

  const arrOdd = arrWithOut0.find(function (numbers) {
    if (numbers.length % 2 !== 0) {
      return numbers[0];
    }
  });
  return arrOdd;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

//
function capitalize(s) {
  const newS = s.split("");
  const integerLetters = [];
  newS.forEach(function (letter, index) {
    if (index % 2 === 0) {
      integerLetters.push(letter.toUpperCase());
    } else {
      integerLetters.push(letter);
    }
  });

  const oddLetters = [];
  newS.forEach(function (letter, index) {
    if (index % 2 !== 0) {
      oddLetters.push(letter.toUpperCase());
    } else {
      oddLetters.push(letter);
    }
  });

  return [integerLetters.join(""), oddLetters.join("")];
}

console.log(capitalize("abcdef"));

//
function sumDigits(number) {
  if (number < 0) {
    const toPositive = number * -1;
    const addedNumber = Array.from(String(toPositive), Number);
    console.log(addedNumber);
    const finalNum = addedNumber.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return finalNum;
  }
  const addedNumber = Array.from(String(number), Number);
  console.log(addedNumber);
  const finalNum = addedNumber.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return finalNum;
}

console.log(sumDigits(32));

//
function deleteNth(arr, n) {
  arrToObj = {};
  return arr.filter(function (x) {
    arrToObj[x] = arrToObj[x || 0] + 1;
    return arrToObj[x] <= n;
  });
}

console.log(deleteNth([20, 37, 20, 21], 1));

//
//debería crea una especie de bucle en el que haga push dentro de un array todas las veces que h * bounce sea >= window
function bouncingBall(h, bounce, window) {
  let viewedBall = 1;
  const howManyBounces = [h];
  if ((bounce > 0 && bounce < 1) || window < h || h > 0) {
    for (let i = 0; howManyBounces[i] * bounce > window; i++) {
      howManyBounces.push(howManyBounces[i] * bounce);
      viewedBall = viewedBall + 2;
    }
    return viewedBall;
  }
  return -1;
}

console.log(bouncingBall(2, 0.5, 1));

function powersOfTwo(n) {
  const powerTwo = [];
  for (let i = 0; powerTwo.length <= n; i++) {
    powerTwo.push(2 ** i);
  }
  return powerTwo;
}

console.log(powersOfTwo(2));

//
const reverseSeq = (n) => {
  const reverseN = [];
  for (n; n > 0; n--) {
    reverseN.push(n);
  }
  return reverseN;
};

console.log(reverseSeq(5));

// Queue time
//
function queueTime(customers, n) {
  const checkouts = [];
  for (let i = 0; checkouts.length < n; i++) {
    checkouts.push(0);
  }
  customers.forEach(function (number, index) {
    const minIndex = checkouts.indexOf(Math.min(...checkouts));
    checkouts[minIndex] += number;
  });
  return Math.max(...checkouts);
}

console.log(queueTime([2, 2, 3, 3, 4, 4], 2));

//

function howMuchILoveYou(nbPetals) {
  const nbPetalsIndex = ((nbPetals - 1) % 6) + 1;

  switch (nbPetalsIndex) {
    case 1:
      return "I love you";
    case 2:
      return "a little";
    case 3:
      return "a lot";
    case 4:
      return "passionately";
    case 5:
      return "madly";
    case 6:
      return "not at all";
  }
}

console.log(howMuchILoveYou(6));

function add(a, b) {
  const numberA = Number(a);
  const numberB = Number(b);
  return (BigInt(a) + BigInt(b)).toString(); // Fix me!
}
console.log(add("123", "321"));

//
// utilizas un forEach
// el objetivo es seleccionar el número mayor de la fila
// posteriromente tienes que seleccionar el número más grande entre el número con el mismo index que el de la fila de antes o con uno más
//
//
function longestSlideDown(pyramid) {
  const biggestNumbers = [];
  pyramid.forEach(function (row, index) {
    pyramid = biggestNumbers.push(
      Math.max(row[(index - 1) % row.length], row[(index - 2) % row.length])
    );
  });
  console.log(biggestNumbers);
  //return biggestNumbers.reduce(
  //(accumulator, currentValue) => accumulator + currentValue,
  //0,
  //)
}

console.log(longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]));


// Prueba 2

function longestSlideDown(pyramid) {
  const biggestNumbers = [];
  pyramid.forEach(function (row, indexRow) {
    row.forEach(function (number, indexNumber){
      if (row.length <= 2){
        biggestNumbers.push(Math.max(row))
      }
      biggestNumbers.push(Math.max(row[index1], row[]))
    })
  });
  console.log(biggestNumbers);
  //return biggestNumbers.reduce(
  //(accumulator, currentValue) => accumulator + currentValue,
  //0,
  //)
}

console.log(longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]));
