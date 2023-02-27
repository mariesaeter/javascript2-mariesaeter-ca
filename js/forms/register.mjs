// import { api_Url_Base } from "./main.mjs";
// import { POST_Options } from "./main.mjs";
// import { methodPost as method } from "./main.mjs";
import { registerUser } from "../api/register.mjs";

export function setRegisterForm() {
  const form = document.querySelector("#register-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());
    console.log(user);

    // Save additional information from edit form
    const { age, from, genre } = user;

    const info = {
      age,
      from,
      genre,
    };

    saveLocal("profileInfo", info);

    registerUser(user);
  });
}

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
