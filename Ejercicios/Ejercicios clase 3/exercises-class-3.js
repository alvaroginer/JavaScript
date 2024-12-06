/*
  Crear una función que me diga si un número está entre 0 y 10  
   => utilizar un return;
*/
// const number = 3

const numberBetween = (number) => {
  if (number > 0 && number < 10) {
    return "yes";
  }
  return "no";
};

// console.log(numberBetween(15))
// console.log(numberBetween(5));

/*
    Crea una función que me diga si un parámetro es de tipo cadena de texto o número.
  */

// const dataType = 'textoo'

const isStringOrNumberOrBoolean = (dataType) => {
  if (typeof dataType === "string") {
    return "string";
  } else if (typeof dataType === "number") {
    return "number";
  } else if (typeof dataType === "boolean") {
    return "boolean";
  }
};

console.log(isStringOrNumberOrBoolean("hola"));
