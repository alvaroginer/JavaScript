function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomTask() {
  return {
    text: `Texto aleatorio número ${getRandomInt(1, 1000)}`,
    isCompleted: getRandomInt(0, 1) === 1,
    isFav: getRandomInt(0, 1) === 1,
  };
}

function getRandomArray() {
  const randomTasks = [];
  for (let i = 0; i < 10; i++) {
    randomTasks.push(generateRandomTask());
  }
  return randomTasks;
}

// Estas funciones serán las que iremos cambiando con los ejemplos
function regenerateArray() {
  const tasks = getRandomArray();
  document.querySelector("#tasks").innerHTML = "";

  tasks.forEach((task) => {
    createTaskNode(task, true);
  });
}

function createTaskNode(task, addToEnd) {
  const taskNode = document.createElement("div");
  taskNode.className = "task";

  taskNode.innerHTML = `
    <span class="${task.isCompleted ? "completed" : ""}">${task.text}</span> -
    <span class="status">${task.isCompleted ? "completed" : "pending"}</span>
    <button class="fav-button ${task.isFav ? "fav" : ""}">${
    task.isFav ? "💝" : "💔"
  }</button>
    `;

  const tasksNode = document.querySelector("#tasks");

  if (addToEnd) {
    tasksNode.appendChild(taskNode);
  } else {
    tasksNode.prepend(taskNode);
  }

  taskNode.addEventListener("click", function () {
    console.log("contenedor tarea");
    const taskTextNode = taskNode.querySelector("span");
    const isCurrentlyCompleted = taskTextNode.classList.contains("completed");
    taskTextNode.classList.toggle("completed");
    taskNode.querySelector(".status").innerText = isCurrentlyCompleted
      ? "pending"
      : "completed";
    //task.isCompleted = isCurrentlyCompleted ? false : true;
    console.log("se ha actualizado isCompleted");
    //Actualizamos la información del task
    saveOrUpdateTaskLocalStorage(task);
  });

  const favButtonNode = taskNode.querySelector("button");
  favButtonNode.addEventListener("click", function (event) {
    console.log("botón fav");
    event.stopPropagation();
    const isCurrentlyFav = favButtonNode.classList.contains("fav");
    favButtonNode.classList.toggle("fav");
    favButtonNode.innerText = isCurrentlyFav ? "💔" : "💝";
    //task.isFav = isCurrentlyFav ? false : true;
    console.log("se ha actualizado isFav");
    //Actualizamos la información del task
    saveOrUpdateTaskLocalStorage(task);
  });
}

function addTask(addToEnd) {
  const task = generateRandomTask();
  createTaskNode(task, addToEnd);
  console.log("estás añadiendo al principio");
}

// event listeners para que los botones llamen a las funciones anteriores
document.querySelector("#regenate").addEventListener("click", () => {
  regenerateArray();
});

document.querySelector("#add-first").addEventListener("click", () => {
  addTask(false);
});

document.querySelector("#add-last").addEventListener("click", () => {
  addTask(true);
});

const inputForm = document.querySelector("#form-input");
inputForm.addEventListener("input", (evt) => {
  const value = inputForm.value.trim();
  if (value) {
    inputForm.dataset.state = "valid";
    console.log(inputForm.dataset.state);
    document.querySelector("#form-button").disabled = false;
  } else {
    inputForm.dataset.state = "invalid";
    console.log(inputForm.dataset.state);
  }
  console.log(value);
});

//Función para guardar una task y su nombre en localStorage
const tasksRecopilation = JSON.parse(localStorage.getItem("tasks")) || [];
const saveOrUpdateTaskLocalStorage = (task) => {
  // Guardamos la task
  if (!tasksRecopilation[task]) {
    tasksRecopilation.push(task);
  } else {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.find((task, index) => {
      if (task.id) {
        tasks[index] = task;
      }
    });
  }
  const tasksNameArr = JSON.stringify(tasksRecopilation);
  localStorage.setItem("tasks", tasksNameArr);
  console.log(JSON.parse(localStorage.getItem("tasks")));
};

//Función para actualizar la info de una task
const updateTask = (name, task) => {
  const taskToStr = JSON.stringify(task);
  localStorage.setItem(name, taskToStr);
  console.log(JSON.parse(localStorage.getItem(name)));
};

let taskObject = {};
let taskName = "";
document
  .querySelector("#create-task")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const taskText = formData.get("taskText");

    taskObject = {
      text: taskText,
      isCompleted: false,
      isFav: false,
      id: new Date().getTime(),
    };

    saveOrUpdateTaskLocalStorage(taskObject);

    createTaskNode(taskObject);
    event.target.reset();
    document.querySelector("#form-button").disabled = true;
  });

//Función para crear las tasks guardadas en localStorage al abrir la web o refrescar
const regenerateTasks = () => {
  const taskNameArr = JSON.parse(localStorage.getItem("tasks"));
  console.log(taskNameArr);
  taskNameArr.forEach((task) => {
    const taskData = JSON.parse(localStorage.getItem(taskName));
    createTaskNode(task);
  });
};
regenerateTasks();
