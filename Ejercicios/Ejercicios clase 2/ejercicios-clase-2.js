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
result = 'pepito'.length === y;
console.log(result);

// y = 33, x = 'Hoy los gatos dominan el mundoooo'
result = 'La venganza de los ornitorrincos salvajes'.length < y + 10 && x.length === y;
console.log(result);

// x = 5, y = 5
result = x >= y;
console.log(result);

// x = 7 // el resultado tiene que ser distinto a 5, solo hay 2 '=' por lo que tan solo se comprueba el valor y no el tipo
result = x !== 'number';
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
result = typeof y === 'string';
console.log(result);

// x = 0.5, y = 0.4
result = x > 0 && x < 1 && y > 0 && y < x;
console.log(result);

// x = 'a'
result = x !== '' && x.length < 2;
console.log(result);

// x = 6
result = typeof x === 'number' && x > '5';
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
result = typeof x === 'boolean' && typeof y === 'string';
console.log(result);

// x = 5 , y = '5' 
result = x !== y && x === 5 && y == 5;
console.log(result);

// x = true, y = true
// x = false
// x= true, y = false
result = !x || (x && !y) || (y && x);
console.log(result);

x = '5'
result = y === x && y !== 'number' && x.length;
console.log(result);

// x = 1, y = -1 (No sé como lo hecho)
result = (!x && !y && x) || (y && x && x < 100 && y < 0);
console.log(result);

// y = 1
result = y !== '' && typeof y === 'number';
console.log(result);

// No tiene solución porque toLowerCase va a cambiar los elementos siempre a minúsculas, por lo que nunca coincidiará con el .includes
result = y.toLowerCase().includes('A');
console.log(result);

// y = ''
// y = ""
result = y === '' && typeof y !== 'number';
console.log(result);

// y = NaN
// y = null
// y = ''
// y = "" (REPASAR !!!!!!!)

result = !y && y !== false && y !== 0;
console.log(result);

// x = 0 
// x = NaN  (REPASAR !!!!!!!)
result = typeof x == 'number' && !x;
console.log(result);

// x = 0.1, y = 0.1 //Primera ecuación
// x = 2, y = 1 //Tercera ecuación
// x = 5, y = 0 // Cuarta ecuación
// x = '5', y ='lo que sea' // Cuarta ecuación
result = (x === y && x < 1 && y > 0) || (x === y && x > 1 && y < 0) || (x !== y && x === y + 1) || x == 5;
console.log(result);

// x = 6, y = 'yes'
result = x > 5 && y.length * 2 == x;
console.log(result);
