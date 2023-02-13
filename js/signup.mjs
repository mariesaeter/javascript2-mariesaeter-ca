import { api_Url_Base } from "./main.mjs";
import { POST_Options } from "./main.mjs";

const registerForm = document.querySelector(".register-form");
registerForm.addEventListener("submit", registerUser);

/**
 *
 * @param {string} url
 * @param {object} data
 * @returns
 */
async function registerUser(url, data) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    console.log(response);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

const btnRegister = document.getElementById("register-btn");
btnRegister.onclick = (e) => {
  e.preventDefault();
  const user = {
    name: document.getElementById("inputName").value,
    email: document.getElementById("inputEmail").value,
    password: document.getElementById("inputPassword").value,
  };
  console.log(user);

  registerUser(`${api_Url_Base}/auth/register`, user);
};
