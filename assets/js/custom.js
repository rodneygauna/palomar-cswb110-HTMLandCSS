/* Dark Mode Functionality
--------------------------- */
const userHasDarkMode = localStorage.getItem('dark-mode') === 'enabled';

// Check if user has dark mode enabled
if (userHasDarkMode) {
    document.body.classList.add('dark-mode-variables');
    setTimeout(function () {
        const darkMode = document.querySelector('.dark-mode');
        darkMode.querySelector('span:nth-child(1)').classList.remove('active');
        darkMode.querySelector('span:nth-child(2)').classList.add('active');
    }, 40);
} else {
    setTimeout(function () {
        const darkMode = document.querySelector('.dark-mode');
        darkMode.querySelector('span:nth-child(1)').classList.add('active');
        darkMode.querySelector('span:nth-child(2)').classList.remove('active');
    }, 40);
}

function setDarkMode() {
    const darkMode = document.querySelector('.dark-mode');
    document.body.classList.add('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.remove('active');
    darkMode.querySelector('span:nth-child(2)').classList.add('active');
    localStorage.setItem('dark-mode', 'enabled');
}

function setLightMode() {
    const darkMode = document.querySelector('.dark-mode');
    document.body.classList.remove('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.add('active');
    darkMode.querySelector('span:nth-child(2)').classList.remove('active');
    localStorage.setItem('dark-mode', 'disabled');
}

  // Get the information from the form above after the user clicks submit.
  // Then, validate the information and display error messages if needed.
  // If the information is valid, send the information via an email to rodneygauna@gmail
  // and display a success message to the user.

  // Function - Main Function
  function validateForm() {
    // Variables - Inputs
    let firstnameInput = document.getElementById("firstname");
    let lastnameInput = document.getElementById("lastname");
    let emailInput = document.getElementById("email");
    let messageInput = document.getElementById("message");
    let humanInput = document.getElementById("human");

    // Variables - Input Values
    let firstnameValue = firstnameInput.value;
    let lastnameValue = lastnameInput.value;
    let emailValue = emailInput.value;
    let messageValue = messageInput.value;
    let humanValue = humanInput.value;

    // Variables - Error Messages
    let firstnameError = document.getElementById("firstname_error");
    let lastnameError = document.getElementById("lastname_error");
    let emailError = document.getElementById("email_error");
    let messageError = document.getElementById("message_error");
    let mathError = document.getElementById("math_error");

    // Variables - Error Flag
    let errorFoundFlag = false;

    // Validate First Name
    if (firstnameValue == "") {
      firstnameError.innerHTML = "Please enter your first name.";
      errorFoundFlag = true;
    }

    // Validate Last Name
    if (lastnameValue == "") {
      lastnameError.innerHTML = "Please enter your last name.";
      errorFoundFlag = true;
    }

    // Validate Email
    if (emailValue == "" || emailValue.indexOf("@") == -1 || emailValue.indexOf(".") == -1) {
      emailError.innerHTML = "Please enter your email.";
      errorFoundFlag = true;
    }

    // Validate Message
    if (messageValue == "") {
      messageError.innerHTML = "Please enter a message.";
      errorFoundFlag = true;
    }

    // Validate Math
    if (humanValue != 8 || humanValue == "") {
      mathError.innerHTML = "Please answer the math question correctly.";
      errorFoundFlag = true;
    }

    // If all the information is valid, send the information via an email to rodneygauna@gmail
    // and display a success message to the user.
    if (
      firstnameValue != "" &&
      lastnameValue != "" &&
      emailValue != "" &&
      messageValue != "" &&
      humanValue == 8
    ) {
        alert("Your message has been sent!");
    }
  }

  // Function - Clear Error Messages
function clearErrors() {
    // Variables - Error Messages
    let firstnameError = document.getElementById("firstname_error");
    let lastnameError = document.getElementById("lastname_error");
    let emailError = document.getElementById("email_error");
    let messageError = document.getElementById("message_error");
    let mathError = document.getElementById("math_error");

    // Clear Error Messages
    firstnameError.innerHTML = "";
    lastnameError.innerHTML = "";
    emailError.innerHTML = "";
    messageError.innerHTML = "";
    mathError.innerHTML = "";
  }

  // Function - clearErrors and validateForm
  function clearValidForm() {
    clearErrors();
    validateForm();
  }