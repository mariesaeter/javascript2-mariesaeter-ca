// import { api_Url_Base } from "./main.mjs";
// import { POST_Options } from "./main.mjs";
// import { methodPost as method } from "./main.mjs";
import { registerUser } from "../api/register.mjs";
import { saveLocal } from "../storage/index.mjs";

/**
 * Retrieves data from HTML form
 * User is registered in through signInUser()
 */
export function setRegisterForm() {
  const form = document.querySelector("#register-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());
    console.log(user);

    if (user.avatar === null) {
      user.avatar.value =
        "https://user-images.githubusercontent.com/96269610/221194479-4165c632-1e55-4eb8-ac91-a64a28e1be17.png";
    }

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
