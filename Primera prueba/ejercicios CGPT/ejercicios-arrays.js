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
console.log(animals.indexOf("pez"));
animals[2] = "tortuga";
console.log(animals);
console.log(animals.includes("gato"));

// Ejercicio 4: Combinando Métodos
// Crea un array llamado frutas que contenga 'manzana', 'plátano', 'naranja'.
// Clona el array frutas usando el operador ... y almacénalo en frutasCopia.
// Añade 'mango' al final de frutasCopia y 'fresa' al principio.
// Muestra en consola el array original frutas y la copia modificada frutasCopia.

// const fruits = ['manzana', 'plátano', 'naranja']
const fruitsCopy = fruits.slice();
fruitsCopy.unshift("fresa");
fruitsCopy.push("mango");
console.log(fruits);
console.log(fruitsCopy);

// Ejercicio 5: Trabajo con Arrays Anidados
// Declara un array llamado datosMixtos que contenga: un número, un string, un array de tres elementos y un booleano.
// Accede al segundo elemento del array que está dentro de datosMixtos y muéstralo en consola.
// Cambia el valor del booleano en datosMixtos por su opuesto.

const mixedData = [1, "hola", [2, 3, 4], true];
console.log(mixedData[1]);
mixedData[3] = false;
console.log(mixedData);

// Reto: Manipulación Compleja
// Crea un array llamado lista con los números del 1 al 5.
// Usa splice para eliminar el tercer número y agrega en su lugar los números 6, 7 y 8.
// Ordena el array de forma descendente.
// Convierte el array en un string separado por guiones (-) usando el método join.
// Muestra el resultado final en consola.
// ¿Quieres que profundicemos en algún tipo de ejercicio en particular? 😊

const numberList = [1, 2, 3, 4, 5];
numberList.splice(2, 1);
numberList[2] = [6, 7, 8];
numberList.sort();
console.log(numberList.join("-"));
