/*
  1. Crea un array que contenga un listado de tareas. Las tareas tienen un texto y pueden estar completadas o pendientes. 
*/

const taskList = {
  tasks: [
    {
      typeOfTask: "Ir a comprar",
      taskStatus: "Pendiente",
    },
    {
      typeOfTask: "Cortarse el pelo",
      taskStatus: "Pendiente",
    },
    {
      typeOfTask: "Practicar JavaScript",
      taskStatus: "Completado",
    },
  ],
};

console.log(taskList);

/*
  2. Crea un array que contenga un listado de vehículos. Usa al menos 5 propiedades en cada vehículo. 
*/

const carGarage = {
  cars: [
    {
      company: "Nissan",
      drive: "4x4",
      engine: "gasolina",
      doors: 5,
      maxspeed: "200kmh",
    },
    {
      company: "Toyota",
      drive: "frontwheel",
      engine: "eléctrico",
      doors: 5,
      maxspeed: "220kmh",
    },
    {
      company: "Porsche",
      traccion: "rear-wheel",
      engine: "hybrid",
      doors: 3,
      maxspeed: "350kmh",
    },
  ],
};

/*
  3. Imagina que estás en un supermercado haciendo la compra y tienes que comprar lo que está 
  en la variable shoppingList.

  Crea una función a la que le pases dos parámetros, el array de la compra, y el elemento que has comprado
  esa función debe buscar el elemento en el array y eliminarlo.

  Por ejemplo, si le paso un array ['pepino', 'tomate', 'sandía'] y el string 'tomate', debe devolver un array ['pepino', 'sandía']
*/

const shoppingList = [
  "x2 leche de coco",
  "pimiento rojo",
  "pimiento verde",
  "x6 garrafas de agua",
  "aguacates",
  "avena",
  "tomate frito",
  "pepino",
];

// Solución sin modificar el array original, ya que se crea uno nuevo
const statusShoppingList = (shoppingList, purchasedProduct) => {
  return shoppingList.filter((purchased) => purchased != purchasedProduct);
};

console.log(
  statusShoppingList(
    [
      "x2 leche de coco",
      "pimiento rojo",
      "pimiento verde",
      "x6 garrafas de agua",
      "aguacates",
      "avena",
      "tomate frito",
      "pepino",
    ],
    "tomate frito"
  )
);

// Solución modificando el array de base

// const statusShoppingList2 = (shoppingList2, purchasedProduct2) => {
//   if (shoppingList2.includes(purchasedProduct2)) {
//     productPosition = shoppingList2.indexOf(purchasedProduct2);
//     shoppingList2.splice(productPosition, 1);
//   }
//   return shoppingList2;
// };

// console.log(
//   statusShoppingList2(
//     [
//       "x2 leche de coco",
//       "pimiento rojo",
//       "pimiento verde",
//       "x6 garrafas de agua",
//       "aguacates",
//       "avellanas",
//       "tomate frito",
//       "pepino",
//     ],
//     "avellanas"
//   )
// );

function itemBought(list, itemToRemove) {
  const indexToRemove = list.indexOf(itemToRemove);

  if (indexToRemove > -1) {
    list.splice(indexToRemove, 1);
  }
}

itemBought(shoppingList, "pepino");
console.log(shoppingList);

/**
 * 4. Repite el ejercicio anterior sin modificar el array que le pasas como parámetro a la función.
 * Si ya has hecho el ejercicio anterior sin modificar el array, hazlo modificándolo.
 */
