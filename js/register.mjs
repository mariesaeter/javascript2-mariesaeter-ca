// import { api_Url_Base } from "./main.mjs";
// import { POST_Options } from "./main.mjs";
// import { methodPost as method } from "./main.mjs";
import { registerUser } from "./api/register.mjs";

function setRegisterForm() {
  const form = document.querySelector("#register-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());
    console.log(user);

    registerUser(user);
  });
}

setRegisterForm();

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const form = event.target;
//   const user = {
//     name: form.name.value,
//     email: form.email.value,
//     password: form.password.value,
//   };
//   registerUser(`${api_Url_Base}/auth/register`, user);
// });
