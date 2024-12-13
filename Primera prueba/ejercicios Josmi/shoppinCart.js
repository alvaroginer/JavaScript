/**
 * Gutufasio está programando un carrito de la compra y está pensando en como modelar los objetos.
 * Imagina que en el carrito de la compra hay los siguientes elementos:
 *  7 botellas de agua - 700€
 *  2 bolsas de palomitas: 255.5€
 *  1 kg de azúcar: 1000€
 *  728 panes de hamburguesa: 928€
 *  28 kg de tofu ahumado: 2223€
 * Escribe un array para representar esa información.
 */

const shoppingCart1 = [
  { product: "botella de agua", quantity: 7, price: 700 },
  { product: "palomitas", quantity: 2, price: 255.5 },
  { product: "azúcar", quantity: 1, price: 1000 },
  { product: "pan de hamburguesa", quantity: 728, price: 928 },
  { product: "tofu ahumado", quantity: 28, price: 2223 },
];

/**
 * Al carrito vamos a aplicarle los impuestos.
 * Los impuestos dependerán del país. Gutufasio no sabe mucho de esto y lo único que sabe es que en España
 * los impuestos son el 21%, salvo en Ceuta, Melilla y Canarias, que no hay impuestos.
 *
 * Además, Gutufasio es UX, así que ha decidido poner en la interfaz los impuestos de cada elemento del array
 * por lo que necesita que en el array, cada elemento tenga, además de su precio, el impuesto.
 *
 * Crea una función que se llame calculateTaxes, que acepte dos parámetros de entrada:
 * - country
 * - state
 * La función debe devolver un nuevo array incluyendo el precio con impuestos y el precio total para cada elemento.
 */

const shoppingCart2 = [
  { product: "botella de agua", quantity: 7, price: 700 },
  { product: "palomitas", quantity: 2, price: 255.5 },
  { product: "azúcar", quantity: 1, price: 1000 },
  { product: "pan de hamburguesa", quantity: 728, price: 928 },
  { product: "tofu ahumado", quantity: 28, price: 2223 },
];

const calculateTaxes1 = (country, state) => {
  const specialStates = ["Ceuta", "Melilla", "Canarias"];

  if (country === "España" && specialStates.includes(state)) {
    const shoppingCartSpecialTaxes = shoppingCart2.map(function (product) {
      const productWithTaxes = Math.round(product.price);
      const finalCost = Math.round(productWithTaxes * product.quantity);
      return { ...product, productWithTaxes, finalCost };
    });
    return shoppingCartSpecialTaxes;
  } else if (country === "España" && !specialStates.includes(state)) {
    const shoppingCartwithTaxes = shoppingCart2.map(function (product) {
      const productWithTaxes = Math.round(product.price * 1.21);
      const finalCost = Math.round(productWithTaxes * product.quantity);
      return { ...product, productWithTaxes, finalCost };
    });
    return shoppingCartwithTaxes;
  }
};

console.log(calculateTaxes1("España", "Valencia"));

/**
 * Gutufasio quiere añadir cupones, porque total, como cobra la botella de agua a 100€, pues se lo puede permitir.
 *
 * Los cupones tienen 3 propiedades:
 * - El código del cupón
 * - El porcentage de descuento que tiene
 * - El mínimo de dinero que tiene que costar el carrito de la compra sin impuestos, para que el cupón aplique
 *
 *
 * Los cupones válidos serán:
 *  GUTUFACIO10, ROBUSTIO20, LOSORNITORRINCOSMOLANUNHUEVO50
 *  Los porcentajes de descuento son 10, 20 y 50 respectivamente, y las cantidades mínimas para que funcionen son
 *  1000€, 20€ y 5000€
 *
 * Como ya hemos dicho, Gutufacio le gusta poner toda la información en la interfaz, y quiere poner el precio original de cada
 * elemento y el precio después de aplicar el cupón.
 *
 * La función para comprobar y aplicar un cupón de descuento se llamará applyCoupon y tendrá dos parámetros:
 *  - El cupón de descuento
 *  - El array con el carrito de la compra
 * La función debe devolver el nuevo carrito con el cupón aplicado si es válido
 *
 * Nota, el descuento se aplica sobre el precio sin impuestos. Los impuestos se calculan sobre el precio base.
 */

//¿Cómo hacer la función?
// dar en el parámetro cupons el valor con la posición del aray que queremos comprobar
// crear una variable vacía
// hacer un forEach
// hacer un if por cada nombre de cupon (cupons.name) y poner las condiciones necesarias
// dar un return de cada producto que pueda tener el desucuento y añadirle la nueva característica al objeto en el nuevo array y sino hacer un early return, incluir función anterior en el código

const shoppingCart = [
  { product: "botella de agua", quantity: 7, price: 700 },
  { product: "palomitas", quantity: 2, price: 255.5 },
  { product: "azúcar", quantity: 1, price: 1000 },
  { product: "pan de hamburguesa", quantity: 728, price: 928 },
  { product: "tofu ahumado", quantity: 28, price: 2223 },
];

const specialStates = ["Ceuta", "Melilla", "Canarias"];
const state = "Valencia";
const calculateTaxes = (country, state) => {
  if (country === "España" && specialStates.includes(state)) {
    return shoppingCart.map((product) => {
      const productWithTaxes = Math.round(product.price);
      const finalCost = Math.round(productWithTaxes * product.quantity);
      return { ...product, productWithTaxes, finalCost };
    });
  } else if (country === "España" && !specialStates.includes(state)) {
    return shoppingCart.map((product) => {
      const productWithTaxes = Math.round(product.price * 1.21);
      const finalCost = Math.round(productWithTaxes * product.quantity);
      return { ...product, productWithTaxes, finalCost };
    });
  }
};

//Imprimir soluciones Ejercico 2: console.log(calculateTaxes("España", "Valencia"));

const shoppingCartwithTaxes2 = calculateTaxes("España", "Valencia");

const cupons = [
  { name: "GUTUFACIO10", percentage: 10, minimum: 1000 },
  { name: "ROBUSTIO20", percentage: 20, minimum: 20 },
  { name: "LOSORNITORRINCOSMOLANUNHUEVO50", percentage: 50, minimum: 5000 },
];

const applyCoupon = (shoppingCart, cupon) => {
  const shoppingCartWithDiscount = [];
  shoppingCart.forEach((product) => {
    if (product.finalCost >= cupon.minimum && !specialStates.includes(state)) {
      const updatedProduct = { ...product };
      const productWithDiscountAndNoTaxes = Math.round(
        updatedProduct.price * (1 - cupon.percentage / 100)
      );
      updatedProduct.finalCost = Math.round(
        productWithDiscountAndNoTaxes * 1.21 * updatedProduct.quantity
      );
      shoppingCartWithDiscount.push({
        ...updatedProduct,
        productWithDiscountAndNoTaxes,
      });
    } else if (
      product.finalCost >= cupon.minimum &&
      specialStates.includes(state)
    ) {
      const updatedProduct = { ...product };
      const productWithDiscountAndNoTaxes = Math.round(
        updatedProduct.price * (1 - cupon.percentage / 100)
      );
      updatedProduct.finalCost = Math.round(
        productWithDiscountAndNoTaxes * updatedProduct.quantity
      );
      shoppingCartWithDiscount.push({
        ...updatedProduct,
        productWithDiscountAndNoTaxes,
      });
    }
  });
  return shoppingCartWithDiscount;
};

//Imprimir soluciones Ejercico 3: console.log(applyCoupon(shoppingCartwithTaxes2, cupons[1]));

/**
 * Al carrito de la compra de Gutufasio le vamos a aplicar ahora los gastos de envío.
 * Los gastos de envío dependerán del país y de la región.
 *  Si el país es España:
 *      Si la región es Ceuta, Melilla o Canarias, los gastos de envío serán 2€
 *      Si la región es otra serán de 1.5€
 *  Si el país es Francia los gastos de envío serán 500€, porque Gutufasio odia a los franceses y no quiere enviarles nada
 *  salvo a la región de Alsacia, que está muy bonita en navidad, así que los gastos de envío serán 5€ en ese caso.
 *  Si el país es Andorra, los gastos de envío serán 100€, ya que no pagan impuestos pues que paguen por el envío.
 *  En cualquier otro caso los gastos de envío serán 30€
 */

//Lo que habría que hacer
// copiar la función de arriba en una constante
// hacer un forEach con 3 condiciones, una para España, otra para Frnacia y otra para Andorra
// cada condición llevará un ternario dentro que hará referencia a las especificaciones de cada uno de los paises
// el nuevo array debe devolver el coste de envio por separado y para no tener que cambiar la palabra de finalCost se puede crear una nueva que ponga finalCost+Order

const orderCountries = [
  { country: "España", region: "Melilla" },
  { country: "Francia", region: "Alsacia" },
  { country: "Andorra", region: "Andorra la Vella" },
];

const cartWithCupon = applyCoupon(shoppingCartwithTaxes2, cupons[1]);

/**
 * Bueno, Gutufasio se lo ha pensado mejor y si el carrito de la compra supera los 100€, los gastos de envío serán gratis
 * salvo si el país es Francia, a los Franceses sigue cobrándoselos
 */

// Este ejercicio simplemente es coger la función del ejercico anterior y ponerle un ternario con la codición de que si finalCost > 100 || shoopinCart.country === 'Francia' se añaden 100 euros al final de gastos de envío
