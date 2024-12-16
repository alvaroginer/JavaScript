//Katas Ternarios
/** Crear una función que, dados dos parámetros, name y age:
 * Si name y age tienen un valor devolveremos Hola me llamo [NAME] y tengo [AGE] años
 * Si age no tiene valor pero name si devolveremos Hola me llamo [NAME]
 * Si ninguno tiene valor devolvermos No quiero decirte mi nombre, pringao
 */

const whatName = (name1, age) => {
  if (name1 !== undefined && age !== undefined) {
    return `Hola me llamo ${name1} y tengo ${age} años`;
  } else if (name1 !== undefined && age === undefined) {
    return `Hola me llamo ${name1}`;
  }
  return "No quiero decirte mi nombre, pringao";
};

//Opción 1 - Todo en un ternario
const whatName1 = (name1, age) => {
  const personNameAndAge =
    name1 !== undefined && age !== undefined
      ? `Hola me llamo ${name1} y tengo ${age} años`
      : name1 !== undefined && age === undefined
      ? `Hola me llamo ${name1}`
      : "No quiero decirte mi nombre, pringao";
  return personNameAndAge;
};

console.log(whatName1("Alvaro"));

//Opción 2 - If y Ternario
const whatName2 = (name1, age) => {
  if (age && name1) {
    return `Hola me llamo ${name1} y tengo ${age} años`;
  }
  return name1 && !age === undefined
    ? `Hola me llamo ${name1}`
    : "No quiero decirte mi nombre, pringao";
};

console.log(whatName2());

/**
 * A los alumnos y alumnas de programación de ID3 les cuesta poner los nombres de las variables. Por eso,
 * el profesor en su eterna sabiduría ha decidido que programen una función que les de nombres útiles
 * que puedan usar para sus variables.
 *
 * Programa una función, que devuelva un nombre aleatorio para una variable. La función tendrá un
 * parámetro con el número de variables que tiene que devolver. El número de variables máximo es 2
 * y el mínimo es 1.
 *
 * Si el número es 2, la función debe devolver un array con dos cadenas de texto y si es uno, debe
 * devolver una cadena de texto (no un array, solo la cadena de texto).
 *
 * El nombre de las variables siempre será ruperto[sufijo], sufijo será un número aleatorio
 */

let nouns = [
  "Waterfall",
  "River",
  "Breeze",
  "Moon",
  "Rain",
  "Wind",
  "Sea",
  "Morning",
  "Snow",
  "Lake",
  "Sunset",
  "Pine",
  "Shadow",
  "Leaf",
  "Dawn",
  "Glitter",
  "Forest",
  "Hill",
  "Cloud",
  "Meadow",
  "Sun",
  "Glade",
  "Bird",
  "Brook",
  "Butterfly",
  "Bush",
  "Dew",
  "Dust",
  "Field",
  "Fire",
  "Flower",
  "Firefly",
  "Feather",
  "Grass",
  "Haze",
  "Mountain",
  "Night",
  "Pond",
  "Darkness",
  "Snowflake",
  "Silence",
  "Sound",
  "Sky",
  "Shape",
  "Surf",
  "Thunder",
  "Violet",
  "Water",
  "Wildflower",
  "Wave",
  "Water",
  "Resonance",
  "Sun",
  "Wood",
  "Dream",
  "Cherry",
  "Tree",
  "Fog",
  "Frost",
  "Voice",
  "Paper",
  "Frog",
  "Smoke",
  "Star",
];

var noun = nouns[Math.floor(Math.random() * nouns.length)];

const randomName = (variableNumber) => {
  return variableNumber === 2 ? ["ruperto", noun] : `ruperto${noun}`;
};

console.log(randomName(2));
