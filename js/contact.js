const form = document.querySelector("#form");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const yourName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const messageSent = document.querySelector("#messageSent");

document.title = "Contact us";

function validateForm(event){
  event.preventDefault();


if (validateEmail(email.value)) {
  emailError.style.display = "none";
} else {
  emailError.style.display = "block";
}

if (checkLength(yourName.value, 5)) {
  nameError.style.display = "none";
} else {
  nameError.style.display = "block";
}


if (checkLength(message.value, 10)) {
  messageError.style.display = "none";
} else {
  messageError.style.display = "block";
}

if (validateEmail(email.value) && checkLength(yourName.value, 5) && checkLength(message.value, 10)) {
  messageSent.innerHTML = `<div id="messageSent">Your message is sent!</div>`;
  messageSent.style.display = "block";
  form.reset();
}

}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

