import { api_Url_Base } from "../url/constants.mjs";
// import { POST_Options } from "./main.mjs";
// import { postData } from "./main.mjs";
import { pathProfile as path } from "../url/constants.mjs";
import { signInUser } from "../api/login.mjs";

/**
 * Retrieves data from HTML form
 * User is signed in through signInUser()
 */
export function setLoginForm() {
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

// export function getAccessToken() {
//   if (localStorage.getItem("accessToken")) {
//     const access = localStorage.getItem("accessToken");
//     console.log(access);
//   }}

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const form = event.target;
//   const formData = new FormData(form);
//   const user = Object.fromEntries(formData.entries());
//   console.log(user);

//   signInUser(`${api_Url_Base}/auth/login`, user);
// });
