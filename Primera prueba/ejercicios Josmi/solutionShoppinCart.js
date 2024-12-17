const shoppingCart = [
  { product: "botella de agua", quantity: 7, price: 100 },
  { product: "palomitas", quantity: 2, price: 127.75 },
  { product: "azúcar", quantity: 1, price: 1000 },
  { product: "pan de hamburguesa", quantity: 728, price: 1.27 },
  { product: "tofu ahumado", quantity: 28, price: 79.39 },
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
        cupon,
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
        cupon,
      });
    }
  });
  return [...shoppingCartWithDiscount];
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

  if (totalFinalCost > 100 && orderCountries.country !== "Francia") {
    const orderCost = 0;
    const finalCostAndOrder = totalFinalCost + orderCost;
    return [
      ...cartWithCuponAndOrder,
      { orderCost, finalCost: finalCostAndOrder },
    ];
  }

  if (orderCountries.country === "España") {
    const orderCost = 1.5;
    const orderCostSpecialState = 2;
    const finalCostAndOrder = totalFinalCost + orderCost;
    const finalCostAndSpecialOrder = totalFinalCost + orderCostSpecialState;
    return specialStates.includes(orderCountries.region)
      ? [
          ...cartWithCuponAndOrder,
          {
            orderCost: orderCostSpecialState,
            finalCost: finalCostAndSpecialOrder,
          },
        ]
      : [...cartWithCuponAndOrder, { orderCost, finalCost: finalCostAndOrder }];
  } else if (orderCountries.country === "Francia") {
    const orderCost = 500;
    const orderCostSpecialState = 5;
    const finalCostAndOrder = totalFinalCost + orderCost;
    const finalCostAndSpecialOrder = totalFinalCost + orderCostSpecialState;
    return orderCountries.region === "Alsacia"
      ? [
          ...cartWithCuponAndOrder,
          {
            orderCost: orderCostSpecialState,
            finalCost: finalCostAndSpecialOrder,
          },
        ]
      : [...cartWithCuponAndOrder, { orderCost, finalCost: finalCostAndOrder }];
  } else if (orderCountries.country === "Andorra") {
    const orderCost = 500;
    const finalCostAndOrder = totalFinalCost + orderCost;
    return [
      ...cartWithCuponAndOrder,
      { orderCost, finalCost: finalCostAndOrder },
    ];
  }
  const orderCost = 30;
  const finalCostAndOrder = totalFinalCost + orderCost;
  return [
    ...cartWithCuponAndOrder,
    { orderCost, finalCost: finalCostAndOrder },
  ];
};

// Imprimir soluciones Ejercicio 4 y 5:
console.log(addOrderCost(orderCountries[0]));
