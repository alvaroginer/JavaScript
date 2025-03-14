/**
 * 1. Averigua qué hace la siguiente función
 */
const getFileNameFromUrl = (url, includeExtension = false) => {
  try {
    const urlObject = new URL(url);
    if (urlObject) {
      const fileName = urlObject.pathname.split("/").pop();
      if (fileName) {
        if (includeExtension) return fileName;
        return getFileNameWithoutExtension(fileName);
      }
    }
  } catch (error) {
    console.error("Cannot get filename from url: " + url);
  }
};

const getFileNameWithoutExtension = (fileName) => {
  if (!fileName) return;
  const lastDotIndex = fileName.lastIndexOf(".");
  return lastDotIndex > 0 ? fileName.substring(0, lastDotIndex) : fileName;
};

// Lectura del código:
// Al principio una función coge una URL y la divide de manera estructurada
// Posteriormente fileName coge el pathname de la url y lo separa a partir de /
// Al hacer un pop del array de la url tan solo devuelve el ultimo elemento, el que indica el tipo de archivo
// si fine name no es null o undefined se ejecuta el siguiente condicional:
// si (includeExtension) no es null NaN o undefined la funcion devuelve fileName
// si no, se ejecuta la funcion getFileNameWithoutExtension:
// si fileName es null o undefined se hace un early return,
// si no, si el nombre de archivo no está vacío o no es nada, devuelve un substring con el nombre del archivo en el servidor/fichero sin la extensión (sin el .pdf/.docs/.web)
// si el archvio no tiene nombre se devuelve el nombre del archivo con la extensión
//  al utilizar una estructura try...catch la función evita que cualquier error colapse el proces, por lo que si la url es inválida o da error en el bloque catch, se muestra un console.error en la consola

// Respuesta:
//La función getFileNameFromUrl toma una URL y opcionalmente un parámetro includeExtension. Extrae el nombre del archivo desde el pathname de la URL (es decir, la última parte después de las barras /). Si includeExtension es true, devuelve el nombre del archivo con su extensión. Si es false, devuelve el nombre del archivo sin la extensión, utilizando la función getFileNameWithoutExtension.
//La función está protegida con un bloque try...catch para manejar errores como URLs inválidas, y si algo falla, muestra un mensaje en la consola.

/**	1.	La función getFileNameFromUrl:
•	Correcto: La función toma una URL y opcionalmente un parámetro includeExtension que determina si se debe incluir la extensión del archivo en el nombre del archivo extraído.
•	Ajuste: En el bloque try, el código intenta crear un objeto URL a partir de la URL proporcionada. Si esto tiene éxito, extrae el pathname de la URL, lo divide en segmentos con split('/'), y luego usa .pop() para obtener el último segmento (que corresponde al nombre del archivo).
2.	El fileName:
•	Correcto: El fileName se obtiene del último segmento del pathname, que generalmente corresponde al nombre del archivo. Si la URL termina con una barra (/), fileName podría ser una cadena vacía.
•	Ajuste: La función no devuelve directamente el “tipo de archivo”, sino el nombre del archivo completo, incluyendo la extensión (por ejemplo, file.txt). El tipo de archivo es simplemente parte del nombre del archivo.
3.	Condicionales de includeExtension:
•	Correcto: Si includeExtension es true, la función devuelve el fileName tal cual, es decir, el nombre del archivo con su extensión.
•	Correcto: Si includeExtension es false, la función llama a getFileNameWithoutExtension(fileName), que elimina la extensión del nombre del archivo antes de devolverlo.
4.	Función getFileNameWithoutExtension:
•	Correcto: La función getFileNameWithoutExtension recibe el nombre del archivo y, si tiene una extensión (es decir, si contiene un punto .), elimina todo lo que sigue al último punto. Si no hay extensión, simplemente devuelve el nombre del archivo tal cual.
•	Ajuste: Es importante notar que si el archivo no tiene una extensión (como en file sin .txt), el substring devolverá el nombre completo sin cambios.
5.	Manejo de errores con try...catch:
•	Correcto: La función está envuelta en un bloque try...catch para manejar cualquier error que pueda ocurrir, como si la URL es inválida o si no se puede crear un objeto URL. Si hay un error, se captura y se muestra un mensaje en la consola. */

/**
 * 1. Averigüa qué debería hacer esta función
 * Esta función coge como parámetro los segundos que le das y los desglosa en días, horas, minutos y segundos
 *
 * 2. La función no está funcionando bien, averigua qué está fallando y arréglalo.
 *
 * 3. Añade un parámetro a la función para que el usuario pueda elegir si quiere que salgan los días como horas.
 */

const MINUTE_IN_SECONDS = 60;
const HOUR_IN_SECONDS = MINUTE_IN_SECONDS * 60;
const DAY_IN_SECONDS = HOUR_IN_SECONDS * 24;

const getCountdownShapeFromSeconds = (seconds, daysInHours) => {
  const days = Math.floor(seconds / DAY_IN_SECONDS);
  const hours = Math.floor((seconds % DAY_IN_SECONDS) / HOUR_IN_SECONDS);

  if (!seconds) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  } else if (daysInHours === true) {
    return {
      hours: Math.floor(seconds / HOUR_IN_SECONDS),
      minutes: Math.floor((seconds % HOUR_IN_SECONDS) / 60),
      seconds: Math.floor(seconds % 60),
    };
  } else {
    return {
      days: days,
      hours: hours,
      minutes: Math.floor((seconds % HOUR_IN_SECONDS) / 60),
      seconds: Math.floor(seconds % 60),
    };
  }
};

console.log(getCountdownShapeFromSeconds(4578495, false));

/*
 * 1. Averigua qué debería hacer esta función. Tip: tiene cosas que pueden o no pasarse
 */

/**
 * 2. Arregla los bugs de la función.
 */

/**
 * 3. Añádele un parámetro para que los días vayan en horas.
 */

// Esta función recoge el resultado de una función como getCountdownShapeFromSeconds y lo formatea

const getCountdownFormatted = (params, daysInHours) => {
  //Aquí desestructura la función y esta pasa de { days: 52, hours: 23, minutes: 48, seconds: 15 } a const { days, hours, minutes, seconds } = params;
  const { days, hours, minutes, seconds } = params;

  //Aquí añade 0 a los valores menores de diez para tener un formato adecuado de hora/contrareloj??
  const zeroPad = (value) => {
    if (value < 10) {
      value = `0${value}`;
    }
    return value;
  };

  // Aquí parece que comprueba si es undefined, pero parece que no lo hace bien del todo
  const getFormattedPadOrEmpty = (value) => {
    return !value ? (value = "") : (value = `${zeroPad(value)}:`);
  };

  // Estas constantes da un tipo de error y comienza a procesar los valores como undefined
  const formattedDays = getFormattedPadOrEmpty(days);
  let formattedHours = getFormattedPadOrEmpty(hours);
  const formattedMinutes = getFormattedPadOrEmpty(minutes);

  if (daysInHours === true) {
    formattedHours = getFormattedPadOrEmpty(days * 24 + hours);
    return `${formattedHours}${formattedMinutes}${zeroPad(seconds)}`;
  }
  return `${formattedDays}${formattedHours}${formattedMinutes}${zeroPad(
    seconds
  )}`;
};

console.log(
  getCountdownFormatted({ days: 5, hours: 3, minutes: 48, seconds: 1 }, true)
);

//
const names = "Alba Ana Maria";
const separetedNames = (names) => {
  const formtaedNames = names.split(" ").map((name) => {
    return `Hola ${name}`;
  });
  return formtaedNames.join(" ");
};

console.log(separetedNames(names));
