function getTasks() {
  const tasksAsString = localStorage.getItem("tasks");

  if (!tasksAsString) {
    return [];
  }

  return JSON.parse(tasksAsString);
}

const tasks = getTasks();

tasks.forEach((task) => {
  createTaskNode(task, true);
});

function saveTasks() {
  const tasksAsString = JSON.stringify(tasks);
  localStorage.setItem("tasks", tasksAsString);
}

function editTask(taskId, propsToChange) {
  // coger el nuevo objeto tarea
  // buscar la posición que ocupa en el array
  // modificar la tarea en el array
  // meter el array en el local Storage
  const taskIndex = tasks.findIndex((task) => {
    return taskId === task.id;
  });
  tasks[taskIndex] = {
    ...tasks[taskIndex],
    ...propsToChange,
  };
  console.log(tasks);
  saveTasks();
}

/** Otra forma de hacerlo, esta vez por propName  */
function editTaskByPropName(taskId, propName, propValue) {
  // coger el nuevo objeto tarea
  // buscar la posición que ocupa en el array
  // modificar la tarea en el array
  // meter el array en el local Storage
  const taskIndex = tasks.findIndex((task) => {
    return taskId === task.id;
  });
  tasks[taskIndex][propName] = propValue;
  saveTasks();
}

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
    const taskTextNode = taskNode.querySelector("span");
    const isCurrentlyCompleted = taskTextNode.classList.contains("completed");
    taskTextNode.classList.toggle("completed");
    taskNode.querySelector(".status").innerText = isCurrentlyCompleted
      ? "pending"
      : "completed";

    editTask(task.id, { isCompleted: !isCurrentlyCompleted });
    editTaskByPropName(task.id, "isCompleted", !isCurrentlyCompleted);
  });

  const favButtonNode = taskNode.querySelector("button");
  favButtonNode.addEventListener("click", function (event) {
    event.stopPropagation();
    const isCurrentlyFav = favButtonNode.classList.contains("fav");
    favButtonNode.classList.toggle("fav");
    favButtonNode.innerText = isCurrentlyFav ? "💔" : "💝";

    editTask(task.id, { isFav: !isCurrentlyFav, pepito: "tasd" });
  });
}

function addTask(addToEnd) {
  const task = generateRandomTask();
  console.log(task, addToEnd);
  createTaskNode(task, addToEnd);
}

let hasCompletedFilter = localStorage.getItem("hasCompletedFilter") === "true";
let hasFavFilter = localStorage.getItem("hasFavFilter") === "true";

const addFilter = () => {
  if (hasCompletedFilter) {
    document
      .querySelector("#filter-completed")
      .classList.add("button__selected");

    let completedTasks = tasks.filter((task) => {
      return task.isCompleted;
    });

    console.log("filtro completed activo");

    document.querySelector("#tasks").innerHTML = "";
    completedTasks.forEach((task) => {
      createTaskNode(task);
    });
    //localStorage.setItem("hasCompletedFilter", hasCompletedFilter);
    return;
  } else {
    document
      .querySelector("#filter-completed")
      .classList.remove("button__selected");
  }

  if (hasFavFilter) {
    document.querySelector("#filter-fav").classList.add("button__selected");
    let favTasks = tasks.filter((task) => {
      return task.isFav;
    });

    console.log("filtro fav activo");
    document.querySelector("#tasks").innerHTML = "";
    favTasks.forEach((task) => {
      createTaskNode(task);
    });
    //localStorage.setItem("hasFavFilter", hasFavFilter);
    return;
  } else {
    document.querySelector("#filter-fav").classList.remove("button__selected");
  }

  document.querySelector("#tasks").innerHTML = "";
  tasks.forEach((task) => {
    createTaskNode(task);
  });
};
addFilter();

// event listeners para que los botones llamen a las funciones anteriores
document.querySelector("#regenate").addEventListener("click", () => {
  regenerateArray();
});

document.querySelector("#filter-completed").addEventListener("click", () => {
  hasCompletedFilter = !hasCompletedFilter;
  addFilter();
  localStorage.setItem("hasCompletedFilter", hasCompletedFilter);
});

document.querySelector("#filter-fav").addEventListener("click", () => {
  hasFavFilter = !hasFavFilter;
  addFilter();
  localStorage.setItem("hasFavFilter", hasFavFilter);
});

const formButton = document.querySelector("#create-task button");
document
  .querySelector("#create-task")
  .addEventListener("submit", function (event) {
    console.log(event);
    event.preventDefault();

    const formData = new FormData(event.target);
    const taskText = formData.get("taskText");
    const task = {
      text: taskText,
      isFav: false,
      isCompleted: false,
      id: Date.now(),
    };

    if (!hasCompletedFilter && !hasFavFilter) {
      createTaskNode(task, false);
    }

    tasks.unshift(task);
    saveTasks();

    event.target.reset();
    formButton.disabled = true;
  });

const taskTextNode = document.querySelector("[name=taskText]");
taskTextNode.addEventListener("input", function (event) {
  console.log(event.target.value);
  formButton.disabled = event.target.value === "";
});
