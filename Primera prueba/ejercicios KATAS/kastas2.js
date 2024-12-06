function XO(str) {
  if (
    !str.includes("x", "X", "o", "O") &&
    (str.includes("x", "X") || str.includes("o", "O"))
  ) {
    const howManyX1 = str.replace(/[^x,X]/g, "").length;
    const howManyO1 = str.replace(/[^o,O]/g, "").length;
    const proveX1andO1 = howManyX1 === howManyO1;
    return proveX1andO1;
  } else if (!str.includes("x", "X", "o", "O")) {
    return true;
  }
  const howManyX = str.replace(/[^x,X]/g, "").length;
  const howManyO = str.replace(/[^o,O]/g, "").length;
  const proveXandO = howManyX === howManyO;
  return proveXandO;
}

console.log(XO("op"));
