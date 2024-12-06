/*
 3. Dado el listado de frutas que ponemos a continuación, recórrelo y crea otro array de igual longitud donde en cada elemento, aparezca el nombre de la fruta y si crece o no en un árbol.
   - Las que crecen en los árboles son las manzanas, las peras, las granadas y los plátanos.
*/

const frutas = [
  "manzana",
  "pera",
  "granada",
  "platano",
  "uva",
  "melón",
  "sandía",
];
growsOnTree = [true, true, true, true, false, false, false];

const newFruits = [...frutas];
let counter = 0;

newFruits.forEach(function (fruit) {
  if (
    fruit === "manzana" ||
    fruit === "pera" ||
    fruit === "granda" ||
    fruit === "plátano"
  ) {
    newFruits[counter] = {
      name: fruit,
      growsOnTree: growsOnTree[counter],
    };
  }
  newFruits[counter] = {
    name: fruit,
    growsOnTree: growsOnTree[counter],
  };
  counter = counter + 1;
});

console.log(newFruits);

/* 
   4. Dado el carrito de la compra del ejercicio 1, transforma ese array en otro que contenga además los impuestos. Por ejemplo, el primer elemento será:
	  { product: 'Red wine', price: 20, quantity: 1, taxes: 2 }

   Asumiremos que los impuestos son el 10% del precio total del producto.

   PD: La idea es que recorras el array original y lo transformes en otro con esa propiedad.
*/

const shoppingCart = [
  { product: "Red wine", price: 20, quantity: 1 },
  { product: "water", price: 1, quantity: 2 },
  { product: "Pizza carbonara", price: 10, quantity: 3 },
  { product: "Tiramisú", price: 5.99, quantity: 2 },
];

shoppingCartWithTaxes = [...shoppingCart];
let finalCostWithTaxes = 0;

shoppingCartWithTaxes.forEach(function (boughtproduct) {
  boughtproduct.taxes = Math.round(boughtproduct.price * 0.1);
  finalCostWithTaxes =
    finalCostWithTaxes + boughtproduct.price + boughtproduct.taxes;
});

console.log(shoppingCartWithTaxes);
console.log(finalCostWithTaxes);

/*
   5. Dado el carrito de la compra del ejercicio 1, implementa una función que permita eliminar una unidad de producto del carrito de la compra basándose 
   en el nombre del producto. Por ejemplo, si la función se invoca con "Red wine", el array debe eliminar ese elemento de la lista porque solo hay 1, pero si se invoca con
   "Tiramisú", simplemente se restará uno a la propiedad quantity de ese elemento.
*/

const shoppingCart1 = [
  { product: "Red wine", price: 20, quantity: 1 },
  { product: "water", price: 1, quantity: 2 },
  { product: "Pizza carbonara", price: 10, quantity: 3 },
  { product: "Tiramisú", price: 5.99, quantity: 2 },
];

const toBuyCart = [...shoppingCart1];
let counter1 = 0;
toBuyCart.forEach(function (viewproduct) {
  if (viewproduct.quantity > 1) {
    viewproduct.quantity = viewproduct.quantity - 1;
  } else if (viewproduct.quantity >= 1) {
    toBuyCart.splice(counter1, 1);
  }
});

console.log(toBuyCart);
