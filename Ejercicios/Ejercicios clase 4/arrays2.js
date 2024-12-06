//   1. Crea un array que contenga un listado de tareas. Las tareas tienen un texto y pueden estar completadas o pendientes.

const tasksLists = [
  {
    text: "Hacer los deberes",
    completed: true,
  },
  {
    text: "Hacer los deberes",
    status: true,
  },
  {
    text: "Hacer los deberes",
    status: false,
  },
];

//
const newTaskList = [];
tasksLists.forEach(function (task) {
  if (task.status === false) {
    newTaskList.push(task);
  }
});

console.log(newTaskList);

//

const carGarage = [
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
];

const carGarage2 = [];
carGarage.forEach(function (car) {
  if (car.doors === 5) {
    carGarage2.push(car);
  }
});

console.log("primer", carGarage2);

const carGarage3 = [];
carGarage.forEach(function (car1) {
  if (car1.doors === 5 && car1.engine === "hybrid") {
    carGarage3.push(car1);
  }
});

console.log("result", carGarage3);
