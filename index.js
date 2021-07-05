const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

let isFormValid = false;

const thankYou = document.querySelector(".thank-you");
const form = document.querySelector("form");
var emailInput = document.querySelector('input[name="email-address"]');

const validateEmailInput = () => {
  emailInput.classList.remove("invalid");
  emailInput.nextElementSibling.classList.add("hidden");
  isFormValid = true;
  if (!emailInput.value) {
    emailInput.classList.add("invalid");
    emailInput.nextElementSibling.classList.remove("hidden");
    isFormValid = false;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmailInput();
  if (isFormValid) {
    form.remove();
    thankYou.classList.remove("hidden");
  }
});

emailInput.addEventListener("input", () => {
  validateEmailInput();
});
