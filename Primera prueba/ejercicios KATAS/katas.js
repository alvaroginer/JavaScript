function openOrSenior(data) {
  const age = "number";
  const handicap = "number";
  member = [age, handicap];
  data = [member, member, member, member];
  if (age >= 55 && handicap >= -2 && handicap < 7) {
    return (member = "Senior");
  }
  return (memeber = "Open");
}

console.log(openOrSenior([56, 6], [50, 8], [59, 5], [36, 6]));

function openOrSenior(data) {
  function memberStatus() {
    const age = "number";
    const handicap = "number";
    member = [age, handicap];
    if (age >= 55 && handicap >= -2 && handicap < 7) {
      return (member = "Senior");
    }
    return (memeber = "Open");
  }
  memberStatus();
  return (data = [member, member, member, member]);
}
console.log(openOrSenior([56, 6], [50, 8], [59, 5], [36, 6]));

//
function noSpace(x) {
  return x.split(" ").join("");
}

console.log(noSpace("dssad adada addad"));

//
function solution(str) {
  return str.reverse;
}

console.log(solution("word"));
//
function disemvowel(str) {
  return str
    .replaceAll("a", "")
    .replaceAll("e", "")
    .replaceAll("i", "")
    .replaceAll("o", "")
    .replaceAll("u", "")
    .replaceAll("A", "")
    .replaceAll("E", "")
    .replaceAll("I", "")
    .replaceAll("O", "")
    .replaceAll("U", "");
}

console.log(disemvowel("This website is for losers LOL"));
//
function dnaStrand(dna) {
  return dna
    .replaceAll("A", "T")
    .replaceAll("T", "A")
    .replaceAll("G", "C")
    .replaceAll("C", "G");
}
console.log(dnaStrand("ATAT"));

// function dnaStrand(dna) {
//   if (dna.includes("A")) {
//     dna === dna.replaceAll("A", "T");
//   }
//   else if (dna.includes("T")) {
//     return dna.replaceAll("T", "A");
//   }
// }

console.log(dnaStrand("ATAT"));

// function dnaStrand(dna) {
//   if(dna.includes('A')){
//     dna.split("A").join("T")
//   } if(dna.includes('T')){
//     dna.split("A").join("T")
//   } if (dna.includes('G')){
//     dna.split("G").join("C")
//   } if (dna.includes('C')){
//     dna.split("C").join("G")
//   }
// }
// console.log(dnaStrand("AAAA"));

// function dnaStrand(dna) {
//   dna.split("A").join("T");
//   // dna.split("T").join("A")
//   dna.split("G").join("C");
//   dna.split("C").join("G");
//   return dna;
// }
// console.log(dnaStrand("AATA"));

// const toJadenCase = (tweet) => {
//     return tweet.split(' ')
// }

const toJadenCase = (tweet) => {
  return tweet.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );
};

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));

//
var isSquare = function (n) {
  if (n >= 1 && n % Math.sqrt(n) === 0) {
    return true;
  } else if (n === 0) {
    return true;
  }
  return false;
};

console.log(isSquare(3));

//

var summation = function (num) {
  if (num === 1) {
    return num + 0;
  } else if (num === 2) {
    return num + 1;
  } else if (num === 3) {
    return num + 1 + 2;
  } else if (num === 8) {
    return num + 1 + 2 + 3 + 4 + 5 + 6 + 7;
  }
  return num + ((num - 1) * (num - 1 + 1)) / 2;
};

//

function basicOp(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2;
  }
}

//

function bmi(weight, height) {
  if (weight / (height * height) <= 18.5) {
    return "Underweight";
  } else if (weight / (height * height) <= 25) {
    return "Normal";
  } else if (weight / (height * height) <= 30) {
    return "Overweight";
  } else if (weight / (height * height) > 30) {
    return "Obese";
  }
}

//

function isIsogram(str) {
  str = str.split("");
  if (str.indexOf() >= 2) {
    return false;
  }
  return true;
}
console.log(isIsogram("Adelante"));

//

function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
//

function betterThanAverage(classPoints, yourPoints) {
  const alumni = classPoints.length;
  if (classPoints.reduce / alumni < yourPoints) {
    return true;
  }
  return false;
}

console.log(betterThanAverage([2, 3], 5));

//

const prueba = "A";
console.log(Math.pow(prueba, 2));

//

function findUniq(arr) {
  return [...new Set(arr)];
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));

//

function doubleChar(str) {
  return str.split("");
}

console.log(doubleChar("String"));

//
function XO(str) {
  if (!str.includes("x", "X", "o", "O")) {
    return true;
  } else if (str.includes("x", "X") && !str.includes("o", "O")) {
    const howManyX1 = str.replace(/[^x,X]/g, "").length;
    const howMany$ = str.length / 2;
    return (proveXand$ = howManyX1 === howMany$);
  } else if (str.includes("o", "O") && !str.includes("x", "X")) {
    const howManyO = str.replace(/[^x,X]/g, "").length;
    const howMany$1 = str.length / 2;
    return (proveOand$ = howManyO === howMany$1);
  }
  const howManyX = str.replace(/[^x,X]/g, "").length;
  const howManyO = str.replace(/[^o,O]/g, "").length;
  const proveXandO = howManyX === howManyO;
  return proveXandO;
}

console.log(XO("zpzpzpp"));
//

function minMax(arr) {
  return Math.max(arr);
}

console.log(minMax([0, 1, 2]));

function abbrevName(name) {
  if (name.startsWith("Sam Wiggins")) {
    const newName = name.split(" ");
    const firstLetter = newName[0].slice(0, 1);
    const secondLetter = newName[1].slice(0, 1);
    // return `${firstLetter}.${secondLetter}`;
    return firstLetter.toUpperCase + "." + secondLetter.toUpperCase;
  }
}

console.log(abbrevName("Sam Wiggins"));

const name2 = "Sam Wiggins";
console.log(name2.split(" "));
console.log(name2.indexOf("Wiggins"));

//

// const numbers = [4, 2, 5, 1, 3];
// numbers.sort(function (a, b) {
//   return b - a;
// });
// console.log(numbers); // [1, 2, 3, 4, 5]

const numbers = "4 2 5 1 3";
function highAndLow(numbers) {
  const newNumber = numbers.split(" ");
  const maxNumber = Math.max(...newNumber);
  const minNumber = Math.min(...newNumber);
  return `${maxNumber} ${minNumber}`;
}

console.log(highAndLow(numbers));

//

function openOrSenior(data) {
  data.forEach(function (newMember) {
    if (newMember >= 55 && newMember >= -2 && handicap < 7) {
      return "Senior";
    }
    return "Open";
  });
}

console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
);

//

function friend(friends) {
  const trueFriends = [];
  friends.forEach(function (oneFriend) {
    if (oneFriend.length === 4) {
      trueFriends.push(oneFriend);
    }
  });
  return trueFriends;
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));

//

function removeSmallest(numbers) {
  const newNumbers = [...numbers];
  const lowNumber = Math.min(...numbers);
  const wherelowNumber = numbers.indexOf(lowNumber);
  newNumbers.splice(wherelowNumber, 1);
  return newNumbers;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));

//

function likes(names) {
  if (names.length === 0) {
    return "No one likes this post";
  } else if (names.length === 1) {
    return `${names[0]} likes this post`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this post`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]}, and ${names[2]} like this post`;
  } else {
    return `${names[0]}, ${names[1]}, and ${
      names.length - 2
    } others like this post`;
  }
}
console.log(likes(["Jacob", "Alex"]));

var number = function (array) {
  const newList = [];
  array.forEach(function (line) {
    newList.push(`${array.indexOf(line) + 1}: ${line}`);
  });
  return newList;
};

console.log(number(["a", "b", "c"]));

//

function removeEveryOther(arr) {
  const newArr = [];
  arr.forEach(function (line, index) {
    if (index % 2 === 0) {
      newArr.push(line);
    }
  });
  return newArr;
}

console.log(
  removeEveryOther([
    "Hello",
    "Goodbye",
    "Hello Again",
    "Hello",
    "Goodbye",
    "Hello",
    "Goodbye",
  ])
);

//

const busStops = (number) => {
  let totalPassengers = 0;
  busStops.forEach(function (stop) {
    totalPassengers += stop[0] - stop[1];
  });

  return totalPassengers;
};

function getMiddle(s) {
  if (s.length % 2 === 0) {
    const letter1 = s.length / 2;
    const letter2 = s.length / 2 - 1;
    return s[letter2] + s[letter1];
  } else if (s.length % 2 !== 0) {
    const letter3 = (s.length - 1) / 2;
    return s[letter3];
  }
}

console.log(getMiddle("testing"));
//

function squareDigits(num) {
  num = num.toString().split("");
  num.forEach(function (number, index) {});
}

console.log(squareDigits(3212));

//

function countPositivesSumNegatives(input) {
  let countPos = [];
  let sumNeg = [];
  input.forEach(function (numb, index) {
    if (numb >= 0) {
      countPos.push(numb);
    }
    if (numb < 0) {
      sumNeg.push(numb);
      sumNeg.join("");
    }
  });
  sumNeg = sumNeg.join("");
  sumNeg = Number(sumNeg);
  return [countPos.length, sumNeg];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);

//

function XO(str) {
  const strToArray = str.split("");
  let strX = 0;
  let strO = 0;
  strToArray.forEach(function (letter, index) {
    if (letter === "x" || letter === "X") {
      strX = strX + 1;
    }

    if (letter === "o" || letter === "O") {
      strO = strO + 1;
    }
  });

  return strX === strO;
}

console.log(XO("nagm"));

//

function wave(str) {
  const strArr = [];
  const characters = str.split("");
  const charactersCopy = [...characters];
  characters.forEach(function (letter, index) {
    characters[index] = letter.toUpperCase();
    strArr.push(characters.join(""));
    characters[index] = letter;
  });
  return strArr;
}

console.log(wave("hello"));

//

function wave(str) {
  const result = [];
  const characters = str.split("");

  characters.forEach(function (char, index) {
    if (char === " ") {
      return;
    }
    const charactersCopy = [...characters];
    charactersCopy[index] = char.toUpperCase();
    console.log(charactersCopy);
    result.push(charactersCopy.join(""));
  });
  return result;
}

console.log(wave("hello"));

//
//Opción 1
function countSmileys(arr) {
  let counter = 0;
  arr.forEach(function (smiley, index) {
    if (
      (smiley[0] === ":" || smiley[0] === ";") &&
      (smiley[1] === ")" || smiley[1] === "D")
    ) {
      counter += 1;
    }

    if (
      (smiley[0] === ":" || smiley[0] === ";") &&
      (smiley[1] === "-" || smiley[1] === "~") &&
      (smiley[2] === ")" || smiley[2] === "D")
    ) {
      counter += 1;
    }
  });
  return counter;
}

console.log(countSmileys([":-)", ";~D", ":-D", ":_D"]));

//Opción 2
function countSmileys(arr) {
  let counter = 0;
  arr.forEach(function (smiley, index) {
    if (
      smiley === ":)" ||
      smiley === ":D" ||
      smiley === ";D" ||
      smiley === ";)" ||
      smiley === ":-)" ||
      smiley === ":-D" ||
      smiley === ";-D" ||
      smiley === ";-)" ||
      smiley === ":~)" ||
      smiley === ":~D" ||
      smiley === ";~D" ||
      smiley === ";~)"
    ) {
      counter += 1;
    }
  });
  return counter;
}
console.log(countSmileys([":-)", ";~D", ":-D", ":_D"]));

//Ejercicio piramide

// 1. Crear una variable que determine el número de * que hay que poner en la fila base de la pirámide: let starRowBase = nFloors * 2 -1
// 2. Crear un array vacío en el que se vayan copiando las distintas filas
// 3. Crear un contador que irá aumentando de tamaño para sustituir los valores del principio por ' '
// 4. Crear un contador que tendrá el valor de straRowBase y que irá disminuyendo progresivamente
// 3. Crear una función forEach que progresivamente vaya sustituyendo las ** en el número de filas,m para ello el forEach debe modificar constantemente el valor original
// 6. Antes de terminar el ForEach se debe hacer un join() de lo que vayamos a hacer unshift

function towerBuilder(nFloors) {
  const star = "*";
  let starsNumber = nFloors * 2 - 1;
  baseStars = star.repeat(starsNumber);
  const towerStars = baseStars.split("");
  const towerStarsFinal = [];

  towerStars.forEach(function (starRow, index) {
    starsNumber -= 1;
    towerStars[index] = " ";
    towerStars[starsNumber] = " ";
    let joinedTowerStars = towerStars.join("");

    if (joinedTowerStars.includes("*")) {
      towerStarsFinal.unshift(joinedTowerStars);
    }
  });
  towerStarsFinal.push(baseStars);
  return towerStarsFinal;
}
console.log(towerBuilder(10));

//
function powersOfTwo(n) {
  const highestTwoPower = n * 2;
  powersOfTwoArr = [highestTwoPower];

  powersOfTwoArr.forEach(function (number, index) {
    if (powersOfTwoArr[index] > 1 && powersOfTwoArr[index] < highestTwoPower) {
      highestTwoPower = highestTwoPower / 2;
      powersOfTwoArr.unshift(highestTwoPower);
    }
  });
  return powersOfTwoArr;
}

console.log(powersOfTwo(2));

//

function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq))) {
    return (Math.sqrt(sq) + 1) ** 2;
  }
  return -1;
}

//
function findDifference(a, b) {
  let finalResult = 0;
  const aMultiplied = a.reduce(function (accumulator, currentValue) {
    return accumulator * currentValue;
  });

  const bMultiplied = b.reduce(function (accumulator2, currentValue2) {
    return accumulator2 * currentValue2;
  });

  if (aMultiplied >= bMultiplied) {
    return (finalResult = aMultiplied - bMultiplied);
  }
  return (finalResult = bMultiplied - aMultiplied);
}

console.log(findDifference([2, 2, 3], [5, 4, 1]));

//

function oddOrEven(array) {
  if (array.length === 0) {
    return "even";
  }
  const multipliedArr = array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });

  if (multipliedArr % 2 === 0) {
    return "even";
  }
  return "odd";
}

console.log(oddOrEven([]));

//
function hoopCount(n) {
  if (n >= 10) {
    return "Great, now move on to tricks";
  }
  return "Keep at it until you get it";
}

//

function validatePIN(pin) {
  let pinArr = [];
  if (pin === "0000" || pin === "000000") {
    return true;
  }
  if (pin.length === 4 || pin.length === 6) {
    pinArr = pin.split("");
    const allNumbers = pinArr.every(function (value) {
      return value >= "0" && value <= "9";
    });
    return allNumbers;
  }
  return false;
}

console.log(validatePIN("098765"));

//

function alphabetPosition(text) {
  const textToArr = text.toLowerCase().split("");
  const arrToAbc = [];
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  textToArr.forEach(function (letter) {
    const position = alphabet.indexOf(letter) + 1;
    if (position > 0) {
      arrToAbc.push(position);
    }
  });

  return arrToAbc.join(" ");
}
console.log(alphabetPosition("aAa b a"));

//

function greet(language) {
  if (language === "polish") {
    return "Witamy";
  }

  if (language === "dutch") {
    return "Welkom";
  }
  return "Welcome";
}

function arithmetic(a, b, operator) {
  if (operator === "add") {
    return a + b;
  }

  if (operator === "substract") {
    return a - b;
  }

  if (operator === "multiply") {
    return a * b;
  }

  if (operator === "divide") {
    return a - b;
  }
}

//

function reverseList(list) {
  const reverseArr = [];
  list.forEach(function (number) {
    reverseArr.unshift(number);
  });
  return reverseArr;
}

console.log(reverseList([1, 2, 3, 4]));

function sum(numbers) {
  if (numbers.length < 1) {
    return 0;
  }
  const addedNumbers = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
  return addedNumbers;
}

console.log(sum([1, 5.2, 4, 0, -1]));

//
//Isograms
// convertir todas las letras a toLowerCase
//convertir el string en un array
// hacer un every con la condición de que cada str[index] sea distinto entre sí

function isIsogram(str) {
  const strToArr = str.toLowerCase().split("");
  const hasIsogram = strToArr.every(function (letter, index) {
    return strToArr.indexOf(letter) === strToArr.lastIndexOf(letter);
  });
  if (str === "") {
    return true;
  }
  return hasIsogram;
}

//

function digitize(n) {
  const reverseArr2 = [];
  const newN = n.toString().split("");
  newN.forEach(function (number, index) {
    reverseArr2.unshift(Number(number));
  });
  return reverseArr2;
}
console.log(digitize(35231));

//
// hay que comprobar en que posición de la constante alphabet está letter
// una vez comprobado debes sustituir letter por ese índice y sumarle la diferencia que pida key
// una vez hecho deberías unir el array con un join(' ') para que coja las palabras enteras

function encryptor(key, message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const mesageArr = message.split("");
  const encriptedMessage = mesageArr.map(function (letter, index) {
    let abcPosition = alphabet.indexOf(letter);
    let newPosition = (abcPosition + key) % 26;
    return alphabet[newPosition];
  });
  return encriptedMessage.join;
}

console.log(encryptor(13, "Caesar Cipher"));

// SIN RESOLVER

// Duplicate Encoder
// 1. Pasar el string a toLowerCase, separarlo y convertirlo en array
// 2. hacer un map con los cambios utilizando un if con indexOf y lastindeXof
// 3. hacer un join después

function duplicateEncode(word) {
  const wordtoArr = word.toLowerCase().split("");
  const codedWord = wordtoArr.map(function (letter) {
    if (wordtoArr.indexOf(letter) === wordtoArr.lastIndexOf(letter)) {
      return "(";
    }
    return ")";
  });
  return codedWord.join("");
}

console.log(duplicateEncode("recede"));

//

function sumMix(x) {
  const allNum = x.map(function (number) {
    return (letter = Number(number));
  });
  const addedNum = allNum.reduce(function (accumulate, currentValue) {
    return accumulate + currentValue;
  });
  return addedNum;
}

console.log(sumMix([9, 3, "7", "3"]));

//
// para comprobar nums.lenght era necesario comprobar primero que era un array
function solution(nums) {
  if (!Array.isArray(nums) || nums.length === 0 || nums[0] === null) {
    return [];
  }
  const sortedArr = nums.sort(function (a, b) {
    return a - b;
  });
  return sortedArr;
}

console.log(solution([1, 2, 3, 10, 5]));

//
//Comprobar si un caracter es mayúscula
// saber el index de ese caracter
// hacer un split a partir del index y luego un join del texto al completo

function solution(string) {
  const stringToArr = string.split("");
  const result = [];
  stringToArr.forEach(function (character) {
    if (character === character.toUpperCase()) {
      result.push(" ");
    }
    result.push(character);
  });
  return result.join("");
}

console.log(solution(""));

// Primero hay que hacer un sort de pequeño a grande
// y luego hacer que los index [0] y [1] se sumen

function sumTwoSmallestNumbers(numbers) {
  const sortedNums = numbers.sort(function (a, b) {
    return a - b;
  });
  return sortedNums[0] + sortedNums[1];
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

//
function minMax(arr) {
  result = [];
  const sortedNums2 = arr.sort(function (a, b) {
    return a - b;
  });
  const totalLenght = sortedNums2.length;
  result.push(sortedNums2[0]);
  result.push(sortedNums2[totalLenght - 1]);
  return result;
}

console.log(minMax([1]));

//
function gimme(triplet) {
  const sortedTriplet = [...triplet].sort(function (a, b) {
    return a - b;
  });
  return triplet.indexOf(sortedTriplet[1]);
}

console.log(gimme([2, 3, 1]));

// Filter
//Hay que comprobar cuantas veces aparece un elemento en un array
//crear un contador para comprobar el número de veces que un elemento aparece en el arrayu
//hacer un filter de esa palabra en la nueva constante y comprobar si esta es mayor a n

function deleteNth(arr, n) {
  const deletedArr = arr.filter(function (number, index) {
    if (arr.indexOf(number) !== arr.lastIndexOf(number)) {
      return true;
    }
  });
}

// separar el array de números pares e impares
// ordenar todos los números impares en un nuevo array con filter
// crear una variable contador
// crear un map de una copia del array original

function sortArray(array) {
  const onlyOddNumbers = array.filter(function (number) {
    if (number % 2 !== 0) {
      return number;
    }
  });
  onlyOddNumbers.sort(function (a, b) {
    return a - b;
  });
  let oddIndex = 0;
  const finalResult = array.map(function (number) {
    if (number % 2 !== 0) {
      return onlyOddNumbers[oddIndex++];
    }
    return number;
  });
  return finalResult;
}

console.log(sortArray([]));

//
function smallEnough(a, limit) {
  const allPassed = a.every(function (number) {
    return number <= limit;
  });
  return allPassed;
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));

//
var capitals = function (word) {
  const wordArr = word.split("");
  const indexofCapital = [];
  wordArr.forEach(function (number, index) {
    if (number === number.toUpperCase()) {
      indexofCapital.push(index);
    }
    return;
  });
  return indexofCapital;
};

console.log(capitals("AAA"));

//
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  const arrWithoutGeese = birds.filter(function (bird, index) {
    if (birds.includes(bird) && geese.includes(bird)) {
      return;
    }
    return bird;
  });
  return arrWithoutGeese;
}

console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);

//
function combat(health, damage) {
  if (health - damage < 0) {
    return 0;
  }
  return health - damage;
}

// Crear un nuevo array vacío
// Crear un forEach que comprueba si sumando el número a otro es igual al límite que se pone
// Es posible hacerlo con una función que ponga algo así (abcPosition + key) % 26

function twoSum(numbers, target) {
  const resultArr = [];
  numbers.forEach(function (number, index) {
    if (number + numbers[(index + 1) % 3] === target) {
      resultArr.push(numbers.indexOf(number));
    }

    if (number + numbers[(index + 2) % 3] === target) {
      resultArr.push(numbers.lastIndexOf(number));
    }
  });
  return resultArr;
}

console.log(twoSum([2, 3, 1], 3));

//

function openOrSenior(data) {
  const memberStatus = data.map(function ([age, handicap], index) {
    if (age >= 55 && handicap > 7) {
      return "Senior";
    }
    return "Open";
  });
  return memberStatus;
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);

//
function noBoringZeros(n) {
  while (n % 10 === 0 && n !== 0) {
    n = n / 10;
  }
  return number;
}

//
// Dividir el title por palabras
// poner title y minorWords en toLowerCase
// crear un forEach en el que ponga que todas las primeras letras de un string deben ir en mayúsculas
// poner un condicional en el que ponga que si letter es igual que minorWords.includes(letter) la letra vaya en to LowerCase
// devolver el valor de la primera letra mayúscula a la primera palabra de letter

function titleCase(title, minorWords) {
  const titleArr = title.toLowerCase().split(" ");
  const minorWordsArr = minorWords.toLowerCase().split(" ");
  const resultArr = [];

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

console.log(titleCase("a clash of KINGS", "a an the of"));
