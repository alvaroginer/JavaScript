// EJERCICIOS CLASE 3
/*
  Crear una función que me diga si un número está entre 0 y 10  
   => utilizar un return;
*/
// const number = 3

const numberBetween = (number) => {
  if (number >= 0 && number <= 10) {
    return true;
  }
  return false;
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

/*
    Crea una función que me diga si una cadena de texto tiene el valor 'pending'. Debe ser case insensitive, es decir,
    me dirá "true" en todas las variantes mayúsculas/minúsculas de este texto: 'Pending', 'PEnding', 'PeNdIng', etc.
  */

// const textValue = "PendinG";

const hasPending = (textValue) => {
  if (textValue.toUpperCase === "PENDING") {
    return "Includes pending";
  } else if (textValue.toLowerCase() === "pending") {
    return "Includes pending";
  }
  return "Does not include pending";
};

console.log(hasPending("PeNding"));

/*
    Crea una función que simule una compra con tarjeta de crédito. Tendrá tres parámetros: 
      - El precio del producto
      - El dinero gastado este mes
      - El límite mensual
    Si me queda dinero suficiente para comprar el producto, la función debe devolver el dinero gastado este
    mes incluyendo el precio del producto. Si no puedo comprar el producto pq el dinero no me da, debe escribir 
    en pantalla un mensaje diciendo que no se puede comprar por llegar al límite mensual.
  */

// const productPrice = 20
// const moneySpend = 9
// const monthLimit = 50

const creditCardBuy = (productPrice1, spentMoney, monthLimit1) => {
  if (monthLimit1 >= productPrice1 + spentMoney) {
    return `Este mes llevas ya ${spentMoney} euros gastados, el producto cuesta ${productPrice1}, puedes gastar ${
      monthLimit1 - spentMoney
    }, por lo que puedes comprar el producto y te sobrarán ${
      monthLimit1 - (spentMoney + productPrice1)
    }`;
  } else if (monthLimit1 < productPrice1 + spentMoney) {
    return `Este mes llevas ya ${spentMoney} euros gastados, el producto cuesta ${productPrice1} euros, según tu presupuesto puedes gastar ${
      monthLimit1 - spentMoney
    } euros más, por lo que no puedes comprar el producto ya que te pasas por ${
      (monthLimit1 - (spentMoney + productPrice1)) * -1
    } euros`;
  }
};

console.log(creditCardBuy(30, 20, 25));

/*
    Crea una función que indique si un número es par o impar.
  */

// const numberParOrImpar = 5

const parOrImpar = (numberParOrImpar) => {
  if (numberParOrImpar % 2 === 0) {
    return `${numberParOrImpar} es un número par`;
  }
  return `${numberParOrImpar} es un número impar`;
};

console.log(parOrImpar(6));

/*
    Crea una función que indique el mayor de dos números
  */

// const number1 = 6
// const number2 = 9

const biggerNumber = (number1, number2) => {
  if (number1 > number2) {
    return `${number1} es mayor que ${number2}`;
  } else if (number1 === number2) {
    return `${number1} y ${number2} son iguales`;
  }
  return `${number2} es mayor que ${number1}`;
};

console.log(biggerNumber(7, 7));

/*
    Crea una función que indique el mayor de tres números
  */

// const number1 = 6;
// const number2 = 7;
// const number3 = 5;

const biggestNumber = (number1, number2, number3) => {
  if (number1 > number2 && number1 > number3) {
    return number1;
  } else if (number2 > number1 && number2 > number3) {
    return number2;
  } else if (number3 > number1 && number3 > number2) {
    return number3;
  }
};

console.log(biggestNumber(9, 10, 8));

/*
    Crea una función que, dados dos edades, te diga cuántos años hay entre ellas
  */

// const age1 = 22;
// const age2 = 78;

const ageDifference = (age1, age2) => {
  if (age1 > age2) {
    return `La diferencia de edad es de ${age1 - age2} años`;
  } else if (age1 === age2) {
    return "Tienen la misma edad";
  } else return `La diferencia de edad es ${age2 - age1}`;
};

console.log(ageDifference(8, 8));

/*
   Crea una función que al pasarle la nota de un examen (de 0 a 10) te devuelva la nota: suspenso(0-5), aprobado(5-6), bien(6-7), 
   notable o sobresaliente(9-10).
  */

// const examPuntuation = 8;

const examGrade = (examPuntuation) => {
  if (examPuntuation >= 0 && examPuntuation < 5) {
    return `La nota ${examPuntuation} es un suspenso`;
  } else if (examPuntuation >= 5 && examPuntuation < 6) {
    return `La nota ${examPuntuation} es un aprobado`;
  } else if (examPuntuation >= 6 && examPuntuation < 7) {
    return `La nota ${examPuntuation} es un bien`;
  } else if (examPuntuation >= 7 && examPuntuation < 9) {
    return `La nota ${examPuntuation} es un notable`;
  } else if (examPuntuation >= 9 && examPuntuation <= 10) {
    return `La nota ${examPuntuation} es un sobresaliente`;
  }
  return "Te has inventado la nota máquina";
};

console.log(examGrade(2));

// Comprueba si dado un mes(Enero, Febrero...) y un día del mes (del 1 al 31), estamos en otoño, invierno, primavera o verano.

// const month = 'Enero'
// const day = 23

const seasons = (month, day) => {
  if (month === "Enero" && day >= 1 && day <= 31) {
    return "Invierno";
  } else if (month === "Feberero" && day >= 1 && day <= 28) {
    return "Invierno";
  } else if (month === "Marzo" && day >= 1 && day <= 21) {
    return "Invierno";
  } else if (month === "Marzo" && day >= 22 && day <= 31) {
    return "Primavera";
  } else if (month === "Abril" && day >= 1 && day <= 30) {
    return "Primavera";
  } else if (month === "Mayo" && day >= 1 && day <= 31) {
    return "Primavera";
  } else if (month === "Junio" && day >= 1 && day <= 21) {
    return "Primavera";
  } else if (month === "Junio" && day >= 22 && day <= 30) {
    return "Verano";
  } else if (month === "Julio" && day >= 1 && day <= 31) {
    return "Verano";
  } else if (month === "Agosto" && day >= 1 && day <= 31) {
    return "Verano";
  } else if (month === "Septiembre" && day >= 1 && day <= 23) {
    return "Verano";
  } else if (month === "Septiembre" && day >= 24 && day <= 30) {
    return "Otoño";
  } else if (month === "Octubre" && day >= 1 && day <= 31) {
    return "Otoño";
  } else if (month === "Noviembre" && day >= 1 && day <= 30) {
    return "Otoño";
  } else if (month === "Diciembre" && day >= 1 && day <= 21) {
    return "Otoño";
  } else if (month === "Diciembre" && day >= 22 && day <= 31) {
    return "Invierno";
  }
  return "No has introducido correctamente los valores de fechas, revisa tus datos";
};

console.log(seasons("Marzo", 33));

/*
    Crea una función que categorice vehículos en función de sus características. Tendrá tres parámetros: 
      - El número de ruedas
      - El tipo de motor, debe ser gasolina, electrico o manual
      - Si tiene pedales o no
  
    Esta función debe devolver 'coche', 'moto', 'patinete', 'bicicleta' o 'desconocido':
    - Los coches tienen 4 ruedas, no tienen pedales y pueden ser eléctricos o de gasolina.
    - Las motos solo tienen 2 rueda, pueden ser de gasolina y no tienen pedales
    - Las bicicletas solo tienen 2 ruedas y pueden ser eléctricas o manuales y tienen pedales.
    - Los patinetes solo tienen 2 ruedas, pueden ser eléctricos o manuales y no tienen pedales pedales.
    - En cualquier otro caso devuelve desconocido.
  */

// const wheels = 2;
// const engine = "gasolina";
// const pedals = true;

const carMotoScooterOrBike = (wheels, engine, pedals) => {
  if (
    wheels === 4 &&
    !pedals &&
    (engine === "gasolina" || engine === "eléctrico")
  ) {
    return "Coche";
  } else if (wheels === 2 && !pedals && engine === "gasolina") {
    return "Moto";
  } else if (
    wheels === 2 &&
    pedals === true &&
    (engine === "manual" || engine === "eléctrico")
  ) {
    return "Bicicleta";
  } else if (
    wheels === 2 &&
    !pedals &&
    (engine === "manual" || engine === "eléctrico")
  ) {
    return "Patinete";
  }
  return "Desconocido";
};

console.log(carMotoScooterOrBike(2, "eléctrico", false));

const fruits = [1, 2, 2, 3];
console.log(fruits.splice);

const ages = [1, 29, 48];
const agesCopyWithSlice = ages.slice();
