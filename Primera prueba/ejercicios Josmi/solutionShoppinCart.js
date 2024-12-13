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

const orderCountries = [
  { country: "España", region: "Melilla" },
  { country: "Francia", region: "Alsacia" },
  { country: "Andorra", region: "Andorra la Vella" },
];

const cartWithCuponAndOrder = applyCoupon(shoppingCartwithTaxes2, cupons[1]);

const addOrderCost = (orderCountries) => {
  const totalFinalCost = cartWithCuponAndOrder.reduce(
    (sum, product) => sum + product.finalCost,
    0
  );

  // Este ejercicio simplemente es coger la función del ejercico anterior y ponerle un ternario con la codición de que si finalCost > 100 || shoopinCart.country === 'Francia' se añaden 100 euros al final de gastos de envío
  //if(totalFinalCost > 100 && cartWithCuponAndOrder.country !== 'Francia'){
  //return [...cartWithCuponAndOrder,{ orderCostSpecialState, finalCostAndSpecialOrder: 0}]
  //}

  if (orderCountries.country === "España") {
    const orderCost = 1.5;
    const orderCostSpecialState = 2;
    const finalCostAndOrder = totalFinalCost + orderCost;
    const finalCostAndSpecialOrder = totalFinalCost + orderCostSpecialState;
    return orderCountries.region.includes(specialStates)
      ? [
          ...cartWithCuponAndOrder,
          { orderCostSpecialState, finalCostAndSpecialOrder },
        ]
      : [...cartWithCuponAndOrder, orderCost, finalCostAndOrder];
  } else if (orderCountries.country === "Francia") {
    const orderCost = 500;
    const orderCostSpecialState = 5;
    const finalCostAndOrder = totalFinalCost + orderCost;
    const finalCostAndSpecialOrder = totalFinalCost + orderCostSpecialState;
    return orderCountries.region === "Alsacia"
      ? [
          ...cartWithCuponAndOrder,
          { orderCostSpecialState, finalCostAndSpecialOrder },
        ]
      : [...cartWithCuponAndOrder, orderCost, finalCostAndOrder];
  } else if (orderCountries.country === "Andorra") {
    const orderCost = 500;
    const finalCostAndOrder = totalFinalCost + orderCost;
    return [
      ...cartWithCuponAndOrder,
      { orderCostSpecialState, finalCostAndOrder },
    ];
  }
  return cartWithCuponAndOrder;
};

// Imprimir soluciones Ejercicio 4 y 5:
console.log(addOrderCost(orderCountries[1]));
