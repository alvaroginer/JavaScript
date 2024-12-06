// Ejercicio 1: Edad y permisos
// Crea un programa que le pida al usuario su edad y, usando if-else:

// Si el usuario es menor de 13 años, muestra: "Acceso prohibido".
// Si el usuario tiene entre 13 y 17 años, muestra: "Acceso con supervisión".
// Si el usuario es mayor de 17, muestra: "Acceso permitido".

let user = 12;

if (user < 13) {
  console.log("Acceso prohibido");
} else if (user <= 13 && user <= 17) {
  console.log("Acceso permitido con restricciones");
} else {
  console.log("Acceso permitido");
}

// Ejercicio 2: Descuento en una tienda
// Escribe un programa que calcule el descuento de un artículo según el monto de compra:

// Si el monto es menor que $50, no se aplica ningún descuento.
// Si el monto está entre $50 y $100, se aplica un 10% de descuento.
// Si el monto es mayor de $100, se aplica un 20% de descuento.

let discountEuro = 110;

if (discountEuro < 50) {
  console.log("Descuento no aplicable");
} else if (discountEuro >= 50 && discountEuro <= 100) {
  console.log(
    `Se aplica un 10% de descuento, ${discountEuro - discountEuro * 0.1} euros`
  );
} else {
  console.log(
    `Se aplica un 20% de descuento, ${discountEuro - discountEuro * 0.2} euros`
  );
}

// Ejercicio 3: Clasificación de notas
// Crea un programa que reciba una calificación (un número entre 0 y 10) e imprima:

// "Insuficiente" si es menor a 5.
// "Suficiente" si está entre 5 y 6.
// "Bien" si está entre 6 y 7.
// "Notable" si está entre 7 y 9.
// "Sobresaliente" si es 10.

// let examGrade = 5;

if (examGrade < 5) {
  console.log("Insuficiente");
} else if (examGrade >= 5 && examGrade < 6) {
  console.log("Suficiente");
} else if (examGrade >= 6 && examGrade < 7) {
  console.log("Bien");
} else if (examGrade >= 7 && examGrade < 10) {
  console.log("Notable");
} else if (examGrade === 10) {
  console.log("Sobresaliente");
}

// Ejercicio 4: Día de la semana
// Pide al usuario un número entre 1 y 7 que represente un día de la semana (1 para lunes, 2 para martes, etc.) y muestra el nombre del día correspondiente. Si el número no está entre 1 y 7, muestra "Número inválido".

let weekDay1 = 8;

if (weekDay1 === 1) {
  console.log("Lunes");
} else if (weekDay1 === 2) {
  console.log("Martes");
} else if (weekDay1 === 3) {
  console.log("Miércoles");
} else if (weekDay1 === 4) {
  console.log("Jueves");
} else if (weekDay1 === 5) {
  console.log("Viernes");
} else if (weekDay1 === 6) {
  console.log("Sábado");
} else if (weekDay1 === 7) {
  console.log("Domingo");
} else {
  console.log("Número inválido");
}

// Ejercicio 5: Carrito de compras
// Crea un programa que verifique si el usuario tiene productos en el carrito:

// Si hay productos, muestra el número de productos (simula con una variable).
// Si el carrito está vacío, muestra "Tu carrito está vacío".

let shoppingCartProducts = 5;

if (shoppingCartProducts > 0) {
  console.log(
    `Tienes ${shoppingCartProducts} productos en tu carrito de la compra`
  );
} else {
  console.log("Tu carrito está vacío");
}

// Ejercicio 6: Recrea el mismo programa del carrito de compras pero añade que cada vez que los usuarios añadan 8 productos a la compran recibirán un descuento de 20€

let shoppingCartProducts1 = 6;

if (shoppingCartProducts1 > 0 && shoppingCartProducts <= 7) {
  console.log(
    `Tienes ${shoppingCartProducts1} productos en tu cesta, añade ${
      8 - shoppingCartProducts1
    } productos más para obtener un cupón de 20€`
  );
} else if (shoppingCartProducts1 >= 8) {
  console.log(
    `Tienes ${shoppingCartProducts1} productos en tucesta. Felicidades has recibido un cupón de 20€ para tu próxima compra`
  );
} else {
  console.log("Tu carrito está vacío.");
}

let dayHour = 0;

if (dayHour >= 0 && dayHour < 6) {
  console.log("¿Qué haces despierto?");
} else if (dayHour <= 6 && dayHour < 12) {
  console.log("Buenos días");
} else if (dayHour >= 12 && dayHour < 19) {
  console.log("Buenas tardes");
} else if (dayHour <= 19 && dayHour <= 24) {
  console.log("Buenas noches");
} else {
  console.log("Hora inválida, por favor introduce tu hora en formato 24h");
}

// Ejercicios Josmi de Logic (AND + OR)

/*
Escribe qué valor debe ser X e Y para que las siguientes condiciones se cumplan (den true)
Cada ejercicio puede tenenr un valor de X e y distinto
Es posible que alguna condición no se pueda dar nunca. Indica por qué
*/
let result;
let x;
let;

// Ejemplo, x= 3, y = 1
result = x > y;
console.log(result);

// x = 8, y = 2
result = x > y + 5;
console.log(result);

// y = 6
result = "pepito".length === y;
console.log(result);

// y = 33, x = 'Hoy los gatos dominan el mundoooo'
result =
  "La venganza de los ornitorrincos salvajes".length < y + 10 && x.length === y;
console.log(result);

// x = 5, y = 5
result = x >= y;
console.log(result);

// x = 7 // el resultado tiene que ser distinto a 5, solo hay 2 '=' por lo que tan solo se comprueba el valor y no el tipo
result = x !== "number";
console.log(result);

// tienes que darle dos valores positivos y para ello tienes que darle a x un valor contrario a true que puede ser false o registros que un booleano coprenda como negativo
// x = 0, y = 1
//x = false, y = true
result = y && !x;
console.log(result);

// x = 11, y =10
result = y <= x || x > y;
console.log(result);

// x = 2, y = 26
result = -1 + x === y - 25;
console.log(result);

// y = 'string' - Había que poner la palabra 'String' entera en minúsculas
result = typeof y === "string";
console.log(result);

// x = 0.5, y = 0.4
result = x > 0 && x < 1 && y > 0 && y < x;
console.log(result);

// x = 'a'
result = x !== "" && x.length < 2;
console.log(result);

// x = 6
result = typeof x === "number" && x > "5";
console.log(result);

// x = 'cuscus'
result = x.length > 5 && x.length < 6.0000000000001;
console.log(result);

// x = 'hola', y = 'adiós'
result = y.length && x.length && x.length !== y.length;
console.log(result);

// No tiene solución, puesto que no hay una cadena de texto que tenga un valor entre 0 y 1
result = x.length > 0 && x.length < 1;
console.log(result);

// x = true, y = 'hola'
result = typeof x === "boolean" && typeof y === "string";
console.log(result);

// x = 5 , y = '5'
result = x !== y && x === 5 && y == 5;
console.log(result);

// x = true, y = true
// x = false
// x= true, y = false
result = !x || (x && !y) || (y && x);
console.log(result);

// No tiene solución
result = y === x && y !== "number" && x.length;
console.log(result);

// x = 1, y = -1
result = (!x && !y && x) || (y && x && x < 100 && y < 0);
console.log(result);

// y = 1
result = y !== "" && typeof y === "number";
console.log(result);

// No tiene solución porque toLowerCase va a cambiar los elementos siempre a minúsculas, por lo que nunca coincidiará con el .includes
result = y.toLowerCase().includes("A");
console.log(result);

// y = ''
// y = ""
result = y === "" && typeof y !== "number";
console.log(result);

// y = NaN
// y = null
// y = ''
// y = ""

result = !y && y !== false && y !== 0;
console.log(result);

// x = 0
// x = NaN
result = typeof x == "number" && !x;
console.log(result);

// x = 0.1, y = 0.1 //Primera ecuación
// x = 2, y = 1 //Tercera ecuación
// x = 5, y = 0 // Cuarta ecuación
// x = '5', y ='lo que sea' // Cuarta ecuación
result =
  (x === y && x < 1 && y > 0) ||
  (x === y && x > 1 && y < 0) ||
  (x !== y && x === y + 1) ||
  x == 5;
console.log(result);

// x = 6, y = 'yes'
result = x > 5 && y.length * 2 == x;
console.log(result);

// Ejercicios CHATGPT de Logic (AND + OR)

// Ejercicio 1
// x = 1, y = 2
result = x * 2 === y;
console.log(result);

// Ejercicio 2
// x = 'hola', y = 4
result = typeof x === "string" && x.length === y;
console.log(result);

// Ejercicio 3
// x = 11, y = 10
result = x > 10 && y < x && y + 5 > x;
console.log(result);

// Ejercicio 4
// x = 1, y = 1
// x = 'hola', y = 'hola'
// x = 1, y = 0
result = x === y || (x > y && y % 2 === 0);
console.log(result);

// Ejercicio 5
// x = true, y = 'text'
result = x !== y && typeof x === "boolean";
console.log(result);

// Ejercicio 6
// x = 'yes', y = 'z'
result = x.length === 3 && y.toUpperCase().includes("Z");
console.log(result);

// Ejercicio 7
// x = 0, y = 0
result = x < 0 || y > 0 || x + y === 0;
console.log(result);

// Ejercicio 9
// x = 2, y = 1
result = x > 0 && x < 10 && y > 0 && y < x;
console.log(result);

// Ejercicio 10
// x = null, y = undefined
result = x === null && y === undefined;
console.log(result);

// Ejercicio 11
// x = 'holaaa', y = 12
result = typeof x === "string" && x.length > 5 && y === x.length * 2;
console.log(result);

// Ejercicio 12
// y = 'hola', x ='holahola'
result = y.length && x.length && x.length === y.length * 2;
console.log(result);

// Ejercicio 13
// x = 50, y = 50
result = typeof x === "number" && typeof y === "number" && x + y === 100;
console.log(result);

// Ejercicio 14
// x = 4, y = 4
result = x === y && x < 5 && y > 0;
console.log(result);

// Ejercicio 15
// y = 'azi'
result = typeof y === "string" && y.includes("a") && y.includes("z");
console.log(result);

// Ejercicio 16
// x = 0, y = false
result = !x && !y && x === 0 && y === false;
console.log(result);

// Ejercicio 17
// y = ''
result = y === "" && typeof y !== "boolean";
console.log(result);

// Ejercicio 18
// x = 26, y = 26
result = x + y > 50 && typeof x === "number" && typeof y === "number";
console.log(result);

//Más ejercicios de CHATGPT. con incrementon de dificultad

// Ejercicio 1
// Encuentra los valores para x e y:
// y = null, x = false //Ecuación 1
(x = true), (y = "abc");
result =
  (!x && y === null) ||
  (x === true && typeof y === "string" && y.includes("abc"));
console.log(result);

// Ejercicio 2
// Razona si es posible encontrar valores de x e y:
// No tiene resultado
result = x === y && x > 10 && y < 0 && typeof x === "number";
console.log(result);

// Ejercicio 3
// Encuentra valores para que result sea true:
(x = "hola"), (y = 4);
result =
  typeof x === "string" &&
  x !== null &&
  x.length === y &&
  typeof y === "number";
console.log(result);

// Ejercicio 4
// Basado en tipos de datos y lógica booleana:
// x = true // Primera ecuación
// x = 'hola', y = 'zee' // Segunda ecuación
result =
  (!!x && typeof x === "boolean") ||
  (x !== y && typeof y === "string" && y.startsWith("z"));
console.log(result);

// Ejercicio 5
// Complejidad lógica con números:
// x = 0, y = 0
result =
  (x > y && x % y === 0) || (y > x && y % x === 0) || (x === 0 && y === 0);
console.log(result);

// Ejercicio 6
// Combinando cadenas y números:
// x = 'hola', y = 8
// x = 0, y = null
result =
  (typeof x === "string" && x.length * 2 === y) || (x === 0 && y === null);
console.log(result);

// Ejercicio 7
// Uso de operadores de comparación y condiciones imposibles:
// No tiene solución
result = x === y && typeof x === "boolean" && typeof y === "number";
console.log(result);

// Ejercicio 9
// Relaciones cruzadas de valores:
// x = 100, y = 100 // Primera ecuación
// x = null, y = null
result =
  (x + y > 100 && typeof x === "number" && typeof y === "number") ||
  (x === y && x === null);
console.log(result);

// Ejercicio 10
// Comparaciones con NaN:
// x = NaN, y = false
result =
  typeof x === "number" && isNaN(x) && typeof y === "boolean" && y === false;
console.log(result);

// Ejercicio 11
// Desafío con cadenas vacías:
//No tiene solución
result = (!x || x === "") && (!y || y === "") && x !== y;
console.log(result);

// Ejercicio 12
// Unión de múltiples operadores lógicos:
// x = true, y = false
result = (x || !y) && !(x && y) && typeof x === typeof y;
console.log(result);

// Ejercicio 13
// Resolviendo condiciones imposibles:
// No tiene solución
result = (x && !x) || (y && !y);
console.log(result);

// Ejercicio 14
// Analiza los valores posibles para x e y:
// x = 1, y = -1
result = (x === y && x > 0 && y < 0) || (x !== y && x * y === -1);
console.log(result);

// Ejercicio 15
// Usa lógica avanzada con booleanos y tipos de datos:
// x = true // Primera ecuación
// y = 'abc'
result =
  (typeof x === "boolean" && x === true) ||
  (typeof y === "string" && y.toUpperCase().includes("ABC"));
console.log(result);

// Repetición de las operaciones más complejas de los ejercicios de Josmi

// x = true, y ='hola'
result = typeof x === "boolean" && typeof y === "string";
console.log(result);

// x = 5, y = '5'
result = x !== y && x === 5 && y == 5;
console.log(result);

// x = false
// x = true, y = false
// x = true, y = true
result = !x || (x && !y) || (y && x);
console.log(result);

//No tiene solución -
result = y === x && y !== "number" && x.length;
console.log(result);

// x = 1, y = -1
result = (!x && !y && x) || (y && x && x < 100 && y < 0);
console.log(result);

// y = 0
result = y !== "" && typeof y === "number";
console.log(result);

// No tiene soolución
result = y.toLowerCase().includes("A");
console.log(result);

// y = ''
result = y === "" && typeof y !== "number";
console.log(result);

// y = ''
result = !y && y !== false && y !== 0;
console.log(result);

x = NaN;
// x = 0
result = typeof x == "number" && !x;
console.log(result);

// x = 0.1, y = 0.1
result =
  (x === y && x < 1 && y > 0) ||
  (x === y && x > 1 && y < 0) ||
  (x !== y && x === y + 1) ||
  x == 5;
console.log(result);

// y= 'yes', x = 6
result = x > 5 && y.length * 2 == x;
console.log(result);

/* 
Ejercicios combinados de lógica y condicionales
Ejercicio 1: Dado un número x, escribe un condicional que:
Imprima "x es negativo" si x es menor que 0.
Imprima "x es cero" si x es igual a 0.
Imprima "x es positivo" si x es mayor que 0. 
*/

let ex1 = 1;
if (ex1 < 0) {
  console.log("x es negativo");
} else if (ex1 === 0) {
  console.log("x es cero");
} else if (ex1 > 0) {
  console.log("x es positivo");
}

// x = 2, y = 3
if (x > y) {
  console.log("x es mayor que y");
} else if (x === y) {
  console.log("x es igual a y");
} else if (x < y && y % x === 0) {
  console.log("x es menor que y y divide perfectamente a y");
} else {
  console.log("Ninguna de las condiciones anteriores se cumple");
}

// x = 2
if (x === 0) {
  console.log("x es cero");
} else if (x % 2 === 0) {
  console.log("x es par");
} else {
  console.log("x es impar");
}

// x = -1, y = 12

if (x === y) {
  console.log("x e y son iguales");
} else if (x > 10 && y > 10) {
  console.log("Son mayores que 10");
} else if (x < 0 || y < 0) {
  console.log("Al menos uno es negativo");
}

// x = 0

if (x > 100) {
  console.log("x es muy grande");
} else if (x >= 50 && x <= 100) {
  console.log("x está en el rango intermedio");
} else if (x > 0 && x < 50) {
  console.log("x es pequeño");
} else if (x === 0) {
  console.log("x es cero");
}

x = -5;

if (x > 0 && x % 3 === 0) {
  console.log("x es mayor que 0 y divisible entre 3");
} else if (x < 0 && x % 5 === 0) {
  console.log("x es negativo y divisible entre 5");
} else {
  console.log("x no cumple las condiciones");
}

// x = 23, y = 15
if (x > y && x % 2 === 0) {
  console.log("x es mayor que y y es par");
} else if (x < y || x % 3 === 0) {
  console.log("x es menor que y o es divisible entre 3");
} else {
  console.log("Ninguna de las condiciones anteriores se cumple");
}

// x = 0
if (x >= 1 && x <= 10) {
  console.log("x está en el rango 1-10");
} else if (x > 10 && x % 2 === 0) {
  console.log("x es par y mayor que 10");
} else {
  console.log("x no cumple ninguna condición");
}

// Ejercicios avanzados
// Ejercicio 1: Dado un valor x, determina:
// Si x es un número falsy (es decir, 0, NaN, null, etc.), imprime "x es un valor falsy".
// Si x es truthy y menor que 10, imprime "x es truthy y menor que 10".
// Si x es truthy y mayor o igual que 10, imprime "x es truthy y mayor o igual a 10".
//

// x = NaN
if (typeof x !== true && typeof x === "number") {
  console.log("X es un valor falsy");
} else if (x < 10) {
  console.log("x es truthy y menor que 10");
} else if (x >= 10) {
  console.log("x es truthy y mayor o igual a 10");
}

// Ejercicio 2: Escribe un programa que evalúe estas condiciones para x e y:
// Si ambos son valores falsy, imprime "x e y son falsy".
// Si al menos uno es truthy, imprime "Al menos uno es truthy".
// Si uno es null y el otro es undefined, imprime "x o y son null o undefined".

// x = undefined, y = null
if (x === false && y === false) {
  console.log("x e y son falsy");
} else if (x === true || y === true) {
  console.log("Al menos uno es truthy");
} else if (x === null || (y === null && x === undefined) || y === undefined) {
  console.log("x o y son null o undefined");
}

// Ejercicio 3: Completa las condiciones para que el siguiente código imprima algo diferente dependiendo de x e y:
// javascript
// Copiar código
// let x = NaN; // Cambia estos valores
// let y = 0; // Cambia estos valores

// x = 1, y = ''
if (x && !y) {
  console.log("x es truthy y y es falsy");
} else if (!x && y) {
  console.log("x es falsy y y es truthy");
} else if (!x && !y) {
  console.log("Ambos son falsy");
} else {
  console.log("Ambos son truthy");
}

// Ejercicio 4: Dado un valor x, determina:
// Si x es un string vacío (""), imprime "x es un string vacío".
// Si x es un booleano y es true, imprime "x es true".
// Si x es un número negativo, imprime "x es un número negativo".

if (x === "" || x === "" || x === ``) {
  console.log("x es un string vacío");
} else if (typeof x === "boolean" || x == true) {
  console.log("x es true");
} else if (x < 0) {
  console.log("x es un número negativo");
}

// Ejercicio 5: Encuentra valores para x e y que cumplan estas condiciones:
// javascript
// Copiar código
// if (x == y && typeof x === typeof y && !x) {
//     console.log("x e y son iguales, del mismo tipo y falsy");
// } else if (x !== y && x && y) {
//     console.log("x e y son truthy pero diferentes");
// } else {
//     console.log("Ninguna de las condiciones anteriores se cumple");
// }
// Ejercicio 6: Escribe un programa que evalúe:
// Si x es NaN, imprime "x es NaN".
// Si x no es un número pero no es NaN, imprime "x no es un número pero tampoco es NaN".
// Si x es un número positivo, imprime "x es un número positivo".
// Ejercicio 7: Escribe un programa que tome dos valores x e y y evalúe:
// Si ambos son booleanos, imprime si son iguales o diferentes.
// Si uno es truthy y el otro falsy, imprime cuál es cuál.
// Si ninguno es booleano, imprime "Ninguno de los dos es un booleano".
// Ejercicio 8: Completa las condiciones para que el siguiente código funcione:
// javascript
// Copiar código
// let result;
// let x = null; // Cambia estos valores
// let y = NaN; // Cambia estos valores

// result = x && y;
// console.log("Resultado de AND:", result);

// result = x || y;
// console.log("Resultado de OR:", result);

// if (x ?? y) {
//     console.log("Se evaluó el operador nullish coalescing");
// } else {
//     console.log("Ambos son null o undefined");
// }
// Ejercicio 9: Encuentra valores para x e y que cumplan estas condiciones:
// javascript
// Copiar código
// if ((x || y) && !(x && y)) {
//     console.log("Solo uno de los valores es truthy");
// } else if (!x && !y) {
//     console.log("Ambos son falsy");
// } else {
//     console.log("Ambos son truthy");
// }
// Ejercicio 10: Completa un condicional para determinar:
// Si x es una cadena no vacía y y es un número par, imprime "x es una cadena no vacía y y es par".
// Si x es un booleano y y es impar, imprime "x es un booleano y y es impar".
// Si ninguna condición se cumple, imprime "Ninguna condición se cumple".

// const month = 2;
// let monthName;

if (month === 1) {
  monthName = "Enero";
} else if (month === 2) {
  monthName = "Febrero";
} else if (month === 3) {
  monthName = "Marzo";
} else if (month === 4) {
  monthName = "Abril";
} else if (month === 5) {
  monthName = "Mayo";
} else if (month === 6) {
  monthName = "Junio";
} else if (month === 7) {
  monthName = "Julio";
} else if (month === 8) {
  monthName = "Agosto";
} else if (month === 9) {
  monthName = "Septiembre";
} else if (month === 10) {
  monthName = "Octubre";
} else if (month === 11) {
  monthName = "Noviembre";
} else if (month === 12) {
  monthName = "Diciembre";
}

// console.log(monthName);

const month = 2;
// let monthName;

const tellMonthName = (month) => {
  if (month === 1) {
    monthName = "Enero";
  } else if (month === 2) {
    monthName = "Febrero";
  } else if (month === 3) {
    monthName = "Marzo";
  } else if (month === 4) {
    monthName = "Abril";
  } else if (month === 5) {
    monthName = "Mayo";
  } else if (month === 6) {
    monthName = "Junio";
  } else if (month === 7) {
    monthName = "Julio";
  } else if (month === 8) {
    monthName = "Agosto";
  } else if (month === 9) {
    monthName = "Septiembre";
  } else if (month === 10) {
    monthName = "Octubre";
  } else if (month === 11) {
    monthName = "Noviembre";
  } else if (month === 12) {
    monthName = "Diciembre";
  }
  console.log(monthName);
};

tellMonthName(6);

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

console.log(hasPending("PNding"));

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

const creditCard = (productPrice, moneySpend, monthLimit) => {
  if (monthLimit > productPrice + moneySpend) {
    return `Este producto vale ${productPrice} euros, en total llevas ${
      productPrice + moneySpend
    } euros gastados este mes, te quedan ${
      monthLimit - (productPrice + moneySpend)
    } euros en la tarjeta`;
  } else if (monthLimit === productPrice + moneySpend) {
    return `Este producto vale ${productPrice} euros, en total llevas ${
      productPrice + moneySpend
    } euros gastados este mes. Has alcanzado tu límite.`;
  } else {
    return `Este producto vale ${productPrice} euros, en total llevas ${
      productPrice + moneySpend
    } euros gastados este mes. No puedes comprar este producto porque tu superas tu límite salarial mensual`;
  }
};

console.log(creditCard(70, 10, 70));

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
// Molaría añadir que aunque haya números iguales de el número más grande

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

//
// const time = 1;
function litres(time) {
  if (time >= 1) {
    return Math.floor(time * 0.5);
  }
}

console.log(litres(2));

//
// const str = 1234;
const stringToNumber = function (str) {
  return str.toString();
};

console.log(stringToNumber(1234));
//

// valueToString = 3;

const numberToString = (valueToString) => {
  return valueToString.toString();
};

console.log(numberToString(3));

//
// const abcValue = "abc";

const endWithBc = (abcValue) => {
  return abcValue.endsWith("bc");
};

console.log(endWithBc("abc"));

/*
  Crea una función que me diga si una cadena de texto tiene el valor 'pending'. Debe ser case insensitive, es decir,
  me dirá "true" en todas las variantes mayúsculas/minúsculas de este texto: 'Pending', 'PEnding', 'PeNdIng', etc.
*/

function containsPending(text) {
  return text.toLowerCase() === "pending";
}

console.log(containsPending("pendinG"));

/*
  Crea una función que simule una compra con tarjeta de crédito. Tendrá tres parámetros: 
    - El precio del producto
    - El dinero gastado este mes
    - El límite mensual
  Si me queda dinero suficiente para comprar el producto, la función debe devolver el dinero gastado este
  mes incluyendo el precio del producto. Si no puedo comprar el producto pq el dinero no me da, debe escribir 
  en pantalla un mensaje diciendo que no se puede comprar por llegar al límite mensual */

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
//

// function maskify(cc) {
//   if (cc.lenght >= 4){
//     return cc.replaceAll(!cc.slice(0, -4), '#')
//   }
// }

// console.log(maskify('2323436w'))

// const cc = '2121216212125'
// Con esta Kata
const maskify = (cc) => {
  return cc.slice(0, -4).replace(/[^]/g, "#") + cc.slice(-4);
};

console.log(maskify("12563562"));

//  Juego de papel y tijera
const rps = (p1, p2) => {
  if (
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  } else if (
    (p2 === "scissors" && p1 === "paper") ||
    (p2 === "rock" && p1 === "scissors") ||
    (p2 === "paper" && p1 === "rock")
  ) {
    return "Player 2 won!";
  } else if (
    (p1 === "paper" && p2 === "paper") ||
    (p1 === "rock" && p2 === "rock") ||
    (p1 === "scissors" && p2 === "scissors")
  ) {
    return "Draw!";
  }
};

console.log(rps("rock", "scissors"));

// Como calcular un centenario
function century(year) {
  if (year >= 100) {
    century1 = year / 100;
    return Math.ceil(century1);
  }
}

console.log(century(168));

// Como calcular los resultados de un partido

// function points(games) {
//   if (games = ("1:0", "2:0" || "3:0" || "4:0" || "2:1" || "3:1" || "4:1" || "3:2" || "4:2" || "4:3")){
//     return 30
//   } else if (games = "1:1" || "2:2" || "3:3" || "4:4" || "2:2" || "3:3" || "4:4" || "3:3" || "4:4" || "4:4"){
//     return 10
//   } else if (games = "1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4")
// }
// SIN RESOLVER

// const randomInformation = ["Manzana", 88, "Pera", 1, false];
// const evenMoreRandom = [[1, 2], "Ornitorrinco"];

// Qué es un array?
console.log(Array.isArray(randomInformation));
console.log(randomInformation);
console.log(evenMoreRandom);
console.log(typeof randomInformation);

// const fruits = ["Manzana", "Pera", "Sandía"]; // Un array con 3 frutas

fruits.push("Arándanos");

fruits.unshift("Melocotón");

fruits.splice(1, 3);

// Ahora la primera posición mostrará Melón en lugar de Manzana
console.log(fruits);

// Clonar arrays
// const ages = [1, 29, 48];
// const agesCopyWithSlice = ages.slice();
// const agesCopy = [...ages];

console.log(ages);
console.log(agesCopyWithSlice);
console.log(agesCopy);

// Ejercicio 1: Creación y Acceso a Arrays
// Crea un array llamado colores que contenga al menos cinco nombres de colores.
// Muestra en consola el primer y el último elemento del array.
// Cambia el tercer color del array por otro color y vuelve a imprimir el array completo.

// const colours = ["azul", "rojo", "verde", "amarillo", "lila"];

colours[2] = "turquesa";

console.log(colours);

// Ejercicio 2: Métodos Básicos
// Crea un array llamado números con los números 10, 20, 30, 40 y 50.
// Agrega el número 60 al final del array y el número 5 al principio.
// Elimina el segundo elemento del array y muestra el array resultante en consola.
// ¿Cuál es la longitud del array final? Muestra la respuesta en consola.

const numbers = [10, 20, 30, 40, 50];

numbers.unshift(5);
numbers.push(60);

numbers.splice(-4, 2);

console.log(numbers.length);

// Ejercicio 3: Operaciones con Arrays
// Declara un array llamado animales que contenga: 'perro', 'gato', 'pez', 'pájaro'.
// Usa el método indexOf para encontrar la posición de 'pez' y cámbialo por 'tortuga'.
// Verifica si 'gato' está en el array con el método includes. Muestra el resultado en consola.

const animals = ["perro", "gato", "pez", "pájaro"];
// console.log(animals.indexOf('pez'))
animals[2] = "tortuga";
console.log(animals);
console.log(animals.includes("gato"));

// Ejercicio 4: Combinando Métodos
// Crea un array llamado frutas que contenga 'manzana', 'plátano', 'naranja'.
// Clona el array frutas usando el operador ... y almacénalo en frutasCopia.
// Añade 'mango' al final de frutasCopia y 'fresa' al principio.
// Muestra en consola el array original frutas y la copia modificada frutasCopia.

fruits;

// Ejercicio 5: Trabajo con Arrays Anidados
// Declara un array llamado datosMixtos que contenga: un número, un string, un array de tres elementos y un booleano.
// Accede al segundo elemento del array que está dentro de datosMixtos y muéstralo en consola.
// Cambia el valor del booleano en datosMixtos por su opuesto.

// Reto: Manipulación Compleja
// Crea un array llamado lista con los números del 1 al 5.
// Usa splice para eliminar el tercer número y agrega en su lugar los números 6, 7 y 8.
// Ordena el array de forma descendente.
// Convierte el array en un string separado por guiones (-) usando el método join.
// Muestra el resultado final en consola.
// ¿Quieres que profundicemos en algún tipo de ejercicio en particular? 😊
