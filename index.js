const form = document.getElementById("form");
const email = document.getElementById("email");

function isEmailValid() {
  const emailValue = email.value.trim();
  email.classList.remove("error");
  email.classList.remove("success");
  email.nextElementSibling.classList.add("hidden");

  if (emailValue === "") {
    email.classList.add("error");
    email.classList.remove("success");
    email.nextElementSibling.classList.remove("hidden");
  } else {
    email.classList.add("success");
    email.nextElementSibling.classList.add("hidden");
  }
  if (!isEmail(emailValue)) {
    email.classList.add("error");
    email.classList.remove("success");
    email.nextElementSibling.classList.remove("hidden");
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  isEmailValid();
});

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
