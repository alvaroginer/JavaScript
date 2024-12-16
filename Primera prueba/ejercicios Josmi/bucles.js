/**
 * Escribe una función que dado un número, escriba su tabla de multiplicar en consola
 * Por ejemplo si le digo 1 debe escribir:
 *  1 x 1 = 1
 *  1 x 2 = 2
 *  .........
 */

let number = 2;
let counter = 1;

for (counter = 1; counter <= 10; counter++) {
  console.log(`${number} x ${counter} = ${number * counter}`);
}

/**
 * Haz una función que dado un número, escriba todos los números pares desde el 0 al número introducido.
 * Por ejemplo si introduzco 6, mostrará:
 *  0
 *  2
 *  4
 *  6
 */

const parNums = (counter1, limit) => {
  for (let counter1 = 0; counter1 <= limit; counter1++) {
    if (counter1 % 2 === 0) {
      console.log(counter1);
    }
  }
};

parNums(1, 6);

/**
 * Cambia la función anterior para no usar condicionales
 */

const limit = 6;
for (let counter1 = 0; counter1 <= limit; counter1 = counter1 + 2) {
  console.log(counter1);
}

/** Haz una función que, dado un número, escriba una cuenta atrás de ese número en pantalla.
 * Por ejemplo, si introduzco 3, escribirá:
 * 3
 * 2
 * 1
 * 0
 */

const limit2 = 0;
for (let counter1 = 3; counter1 >= limit2; counter1--) {
  console.log(counter1);
}

/**
 * Escribe una función que acepte una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número de veces por el número que se haya que haya introducido.
 */

const number1 = 5;
for (letter = "a"; letter.length <= number1; letter.repeat(number1)) {
  console.log(letter);
}

const newArr = [];
const number2 = 5;
for (letter = "a"; newArr.length <= number2; newArr.push(letter)) {}
console.log(newArr.join(""));

/**
 * Escribe una función que dado un número, te devuelva una lista de nombres de película que te encantaría ver.
 * Los nombres de película se formarán aleatoriamente con dos arrays:
 * ['La venganza', 'El retorno', 'La comunidad', 'El reino', 'La abuela', 'Godofredo', 'Robustia', 'Pitifasio']
 * ['de los ornitorrincos salvajes', 'de los cangrejos de rio', 'de los murcianos', 'de los paparajotes', 'con cucharón']
 */
const filmTitle1 = [
  "La venganza",
  "El retorno",
  "La comunidad",
  "El reino",
  "La abuela",
  "Godofredo",
  "Robustia",
  "Pitifasio",
];
const filmTitle2 = [
  "de los ornitorrincos salvajes",
  "de los cangrejos de rio",
  "de los murcianos",
  "de los paparajotes",
  "con cucharón",
];

const newArr2 = [];
const limitFilm = 5;

for (limit2 = []; newArr2.length <= limitFilm; ) {
  newArr2.push(
    `${filmTitle1[Math.floor(Math.random() * filmTitle1.length)]} ${
      filmTitle2[Math.floor(Math.random() * filmTitle2.length)]
    }`
  );
}
console.log(newArr2);
