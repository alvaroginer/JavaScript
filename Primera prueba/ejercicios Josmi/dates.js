/**
 * 1. Crea una función que sume un número de días a una fecha.
 * 3. Modifica la función del ejercicio 1 para que sea más genérica y que permita sumar días, horas, minutos o segundos
 */

const addDays = (unitToSum, date) => {
  const { days = 0, hours = 0, minutes = 0, seconds = 0 } = unitToSum;

  //Pasamos los valores a minisegundos
  const daysToMs = days * 24 * 60 * 60 * 1000;
  const hoursToMs = hours * 60 * 60 * 1000;
  const minsToMs = minutes * 60 * 1000;
  const secondsToMs = seconds * 1000;

  return new Date(
    date.getTime() + daysToMs + hoursToMs + minsToMs + secondsToMs
  ).toLocaleString("es");
};

const now = new Date();
const time = { hours: 3, minutes: 40, seconds: 15 };
console.log(addDays(time, now));

/**
 * 2. Crea una función que reste un número de días a una fecha.
 * 4. Modifica la función del ejercicio 2 para que sea más genérica y que permita restar días, horas, minutos o segundos
 */

const now1 = new Date();
const time1 = { days: 10, hours: 3, minutes: 40, seconds: 15 };
const restDays = ({ days, hours, minutes, seconds }, date) => {
  //Pasamos los valores a minisegundos
  const daysToMs = days * 24 * 60 * 60 * 1000;
  const hoursToMs = hours * 60 * 60 * 1000;
  const minsToMs = minutes * 60 * 1000;
  const secondsToMs = seconds * 1000;

  return new Date(
    date.getTime() - daysToMs - hoursToMs - minsToMs - secondsToMs
  ).toLocaleDateString("es", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
};

console.log(restDays(time1, now1));

/**
 * 5. Crea una función que compruebe si una fecha está entre otras dos fechas.
 */

const isBetweenDates = (startDate, finishDate, isMiddledate) => {
  return (
    isMiddledate.getTime() >= startDate.getTime() &&
    isMiddledate.getTime() <= finishDate.getTime()
  );
};

const isMiddledate = new Date();
const startDate = new Date("2025-01-01T00:00:00.000Z");
const finishDate = new Date("2025-01-31T00:00:00.000Z");

console.log(isBetweenDates(date1, date2, now2));

/**
 * 6. Crea una función que devuelva cuánto tiempo ha pasado desde una fecha y la fecha actual en días, horas, minutos y segundos.
 * Por ejemplo debe devolver un string que sea, "han pasado 2 días, 4 horas, 2 minutos y 1 segundos desde [FECHA_INTRODUCIDA]}"
 *
 * 7. Si no lo has hecho, modifica la función anterior para que no salga la información que no sea relevante. Por ejemplo, si solo han pasado
 * 10 segundos, no debería decir ni los días, las horas ni los minutos.
 *
 * 8. Modifica la función anterior para que se le pueda pasar un objeto que permita desactivar los días, las horas, los minutos o los segundos
 * Por ejemplo, si le paso { days: false, hours: false } la función debe devolver solo los minutos y los segundos que han pasado.
 */

const passedTime = (now, date, { days, hours, minutes, seconds }) => {
  const time = now.getTime() - date.getTime();

  let timeInDays = Math.floor(time / (1000 * 60 * 60 * 24));
  let timeInH = Math.floor((time / (1000 * 60 * 60)) % 24);
  let timeInMin = Math.floor((time / (1000 * 60)) % 60);
  let timeInSec = Math.floor((time / 1000) % 60);

  let result = `El tiempo pasado desde el ${date.toLocaleDateString("es", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })} es de `;

  if (timeInDays > 0 && days !== false) {
    result += `${timeInDays} ${timeInDays > 1 ? "días" : "día"}, `;
  } else if (days === false) {
    timeInH = Math.floor(time / (1000 * 60 * 60));
  }

  if (timeInH > 0 && hours !== false) {
    result += `${timeInH} ${timeInH > 1 ? "horas" : "hora"}, `;
  } else if (hours === false) {
    timeInMin = Math.floor(time / (1000 * 60));
  }

  if (timeInMin > 0 && minutes !== false) {
    result += `${timeInMin} ${timeInMin > 1 ? "minutos" : "minuto"}, `;
  } else if (minutes === false) {
    timeInSec = Math.floor(time / 1000);
  }

  if (timeInSec > 0 && seconds !== false) {
    result += `${timeInSec} ${timeInSec > 1 ? "segundos" : "segundo"}`;
  } else if (seconds === false) {
    result;
  }

  result = result.endsWith(", ") ? result.slice(0, -2) : result;

  return result.replace(/,([^,]*)$/, " y$1");
};

const now3 = new Date();
const date3 = new Date("2024-03-25T00:00:00.000Z");
const parameters = { hours: false, seconds: false };

console.log(passedTime(now3, date3, parameters));

/**
 * 9. Crea una función como la anterior, pero que indique cuánto tiempo queda para una fecha específica.
 */

const now4 = new Date();
const date4 = new Date("2025-03-25T00:00:00.000Z");
const parameters1 = { minutes: false, seconds: false };

const howMuchTime = (now, date, { days, hours, minutes, seconds }) => {
  const time = date.getTime() - now.getTime();

  let timeInDays = Math.floor(time / (1000 * 60 * 60 * 24));
  let timeInH = Math.floor((time / (1000 * 60 * 60)) % 24);
  let timeInMin = Math.floor((time / (1000 * 60)) % 60);
  let timeInSec = Math.floor((time / 1000) % 60);

  let result = `El tiempo que falta para el ${date.toLocaleDateString("es", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })} es de `;

  if (timeInDays > 0 && days !== false) {
    result += `${timeInDays} ${timeInDays > 1 ? "días" : "día"}, `;
  } else if (days === false) {
    timeInH = Math.floor(time / (1000 * 60 * 60));
  }

  if (timeInH > 0 && hours !== false) {
    result += `${timeInH} ${timeInH > 1 ? "horas" : "hora"}, `;
  } else if (hours === false) {
    timeInMin = Math.floor(time / (1000 * 60));
  }

  if (timeInMin > 0 && minutes !== false) {
    result += `${timeInMin} ${timeInMin > 1 ? "minutos" : "minuto"}, `;
  } else if (minutes === false) {
    timeInSec = Math.floor(time / 1000);
  }

  if (timeInSec > 0 && seconds !== false) {
    result += `${timeInSec} ${timeInSec > 1 ? "segundos" : "segundo"}`;
  } else if (seconds === false) {
    result;
  }

  result = result.endsWith(", ") ? result.slice(0, -2) : result;

  return result.replace(/,([^,]*)$/, " y$1");
};

console.log(howMuchTime(now4, date4, parameters1));

/**
 * 10. Dado el array de ejemplo que pongo, haz una función que filtre las tareas completadas el 9 de enero durante todo el día
 */

const tasks = [
  {
    text: "Hacer la compra",
    completed: true,
    completedAt: "2025-01-10T15:54:40.088Z",
  },
  {
    text: "Ir a clase",
    completed: true,
    completedAt: "2025-01-09T15:00:40.088Z",
  },
  {
    text: "Comer a clase",
    completed: true,
    completedAt: "2025-01-09T14:00:40.088Z",
  },
  {
    text: "Repasar javascript",
    completed: false,
  },
];

const taskInTime = (tasks) => {
  const start = new Date("2025-01-09T00:00:00.000Z");
  const end = new Date("2025-01-09T23:59:59.999Z");

  const result = tasks.filter(({ text, completed, completedAt }) => {
    return (
      completed === true &&
      new Date(completedAt).getTime() >= start.getTime() &&
      new Date(completedAt).getTime() <= end.getTime()
    );
  });
  return result;
};

console.log(taskInTime(tasks));

/**
 * 1. Vamos a hacer una función a la que le pasamos un número y nos va a devolver
 * un array del tamaño igual al número que le pasamos con tareas random.
 *
 * Una tarea random es una tarea con un texto aleatorio, por ejemplo "Tarea de prueba 402"
 * También tiene que tener una fecha random con un mes aleatorio entre 0 y 11, y un dia aleatorio entre 1 y 28
 * y aleatoriamente también, las fechas pueden estar completadas o no
 *
 */

const getRandomTaskArray = (number) => {
  const taskArr = [];

  for (let i = 0; taskArr.length < number; i++) {
    let task = {
      taskName: `tarea de prueba ${Math.floor(Math.random() * 100)}`,
      date: new Date(
        `2025-${Math.floor(Math.random() * 11 + 1)}-${Math.floor(
          Math.random() * 28 + 1
        )}`
      ),
      completed: `${(number * i) % 2 ? true : false}`,
    };
    taskArr.push(task);
  }
  return taskArr;
};

//console.log(getRandomTaskArray(3));

/**
 * 2. Haz una función que categorice las tareas por mes, y dentro del mes, por día.
 * Por ejemplo el objeto resultante sería algo así:
 *  {
 *    0: {
 *       1: [ARRAY DE TAREAS]
 *    }
 *  }
 * En [ARRAY DE TAREAS] estarán todas las tareas del día 1 de enero.
 */

// recorres el array con los objetos y miras en qué día está
// creo

const categorizeTasks = (taskList) => {
  const year = {};
  const month = {};
  taskList.forEach((task) => {
    const month = task.date.getMonth();
    year[task.date.getMonth()] = month[task.date.getDay()] = task;
    month[task.date.getDay()] = task;
  });
  console.log(year);
};

const taskList = getRandomTaskArray(3);
console.log(categorizeTasks(taskList));
