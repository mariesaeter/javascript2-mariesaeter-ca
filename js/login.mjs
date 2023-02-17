import { api_Url_Base } from "./main.mjs";
// import { POST_Options } from "./main.mjs";
// import { postData } from "./main.mjs";
import { pathProfile as path } from "./main.mjs";
import { signInUser } from "./api/login.mjs";

function setLoginForm() {
  const form = document.querySelector("#loginForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());
    console.log(user);

    signInUser(user);
  });
}

setLoginForm();

export function getAccessToken() {
  if (localStorage.getItem("accessToken")) {
    const access = localStorage.getItem("accessToken");
    console.log(access);
  }
}

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const form = event.target;
//   const formData = new FormData(form);
//   const user = Object.fromEntries(formData.entries());
//   console.log(user);

//   signInUser(`${api_Url_Base}/auth/login`, user);
// });
