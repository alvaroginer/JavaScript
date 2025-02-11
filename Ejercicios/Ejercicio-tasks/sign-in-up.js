let usersData = JSON.parse(localStorage.getItem("usersData")) || [];

const signUp = (user) => {
  // Verificar información del form
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
  const validEmail = emailRegex.test(user.email);
  const validPassword = passwordRegex.test(user.password);
  const validRepeat = user.repeat === user.password;

  // Declaramos constantes para ahorrar código
  const instructions = document.querySelector("#instruction-txt");
  const mailInput = document.querySelector("#sign-up--email");

  //Miramos si algún dato falla y lo mostramos en pantalla
  mailInput.style.border = "";
  if (!validEmail) {
    mailInput.style.border = "1px solid red";
    instructions.textContent = "El mail no es válido";
    instructions.style.color = "red";
    return;
  }

  const passwordInput = document.querySelector("#sign-up--password");
  passwordInput.style.border = "";
  if (!validPassword) {
    passwordInput.style.border = "1px solid red";
    instructions.textContent =
      "*La contraseña debe contener al menos una mayúscula, un número y un símbolo";
    instructions.style.color = "red";
    return;
  }

  const repeatInput = document.querySelector("#sign-up--password-repeat");
  repeatInput.style.border = "";
  if (!validRepeat) {
    repeatInput.style.border = "1px solid red";
    instructions.textContent = "La contraseña no es la misma";
    return;
  }

  //Miramos en localStorage si el correo existe, para que no se pueda registrar con él
  const usersDataInLocalStorage =
    JSON.parse(localStorage.getItem("usersData")) || [];
  const mailExists = usersDataInLocalStorage.findIndex(
    (data) => data.email === user.email
  );

  if (mailExists !== -1) {
    instructions.textContent = "Este correo ya está registrado";
    instructions.style.color = "red";
    return;
  }

  // Guardar la información del form si es válida como objeto
  const dataLocalStorage = {
    email: user.email,
    password: user.password,
  };
  usersData.push(dataLocalStorage);
  const allUsersToStr = JSON.stringify(usersData);
  localStorage.setItem("usersData", allUsersToStr);
  console.log(JSON.parse(localStorage.getItem("usersData")));

  // Habilitar el botón
  window.location.href = "./index.html";
};

const signIn = (user) => {
  // Identificar los datos del form
  const usersData = JSON.parse(localStorage.getItem("usersData"));

  //Verificar que información está fallando y mostrarlo en pantalla
  const mailIsCorrect = usersData.findIndex(
    (data) => data.email === user.email
  );

  if (mailIsCorrect === -1) {
    document.querySelector(".sign-in-instructions").textContent =
      "Correo electrónico no registrado";
    document.querySelector(".sign-in-instructions").style.display = "block";
    return;
  }

  const passwordIsCorrect = usersData[mailIsCorrect].password === user.password;

  if (!passwordIsCorrect) {
    document.querySelector(".sign-in-instructions").style.display = "block";
    document.querySelector(".sign-in-instructions").textContent =
      "Contraseña errónea";
    return;
  }

  window.location.href = "./index.html";
};

/* Event Listeners */

// Formulario de registro
//Input
const registerForm = document.querySelector(".sign-up-form");
if (registerForm) {
  registerForm.addEventListener("input", function (evt) {
    const inputField = evt.target; // Capturamos el input específico dentro del form
    const value = inputField.value.trim(); // Obtenemos su valor

    if (value) {
      inputField.dataset.state = "valid"; // Asignamos el estado al input específico
      console.log(inputField.dataset.state);
    } else {
      inputField.dataset.state = "invalid";
      console.log(inputField.dataset.state);
    }

    console.log(value);
  });
}

// Submit
if (registerForm) {
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    //console.log(event);

    const formData = new FormData(event.target);
    const emailText = formData.get("emailText");
    const passwordText = formData.get("passwordText");
    const repeatText = formData.get("repeatText");
    //console.log(emailText);
    //console.log(passwordText);
    //console.log(repeatText);
    const userData = {
      email: emailText,
      password: passwordText,
      repeat: repeatText,
    };

    signUp(userData);
  });
}

//Formulario de inicio de sesión
const sigInForm = document.querySelector(".sign-in-form");

if (sigInForm) {
  sigInForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userEmail = formData.get("userEmail");
    const userPassword = formData.get("userPassword");
    const userData = {
      email: userEmail,
      password: userPassword,
    };
    console.log(userData);
    signIn(userData);
  });
}
