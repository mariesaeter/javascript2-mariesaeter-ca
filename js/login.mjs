import { api_Url_Base } from "./main.mjs";
import { POST_Options } from "./main.mjs";
// import { postData } from "./main.mjs";

async function signInUser(url, data) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    console.log(options);

    const response = await fetch(url, options);
    console.log(response);
    const json = await response.json();
    const accessToken = json.accessToken;
    localStorage.setItem("accessToken", accessToken);
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

const btnLogIn = document.getElementById("login-btn");
btnLogIn.onclick = (e) => {
  e.preventDefault();
  const user = {
    email: document.getElementById("inputEmail").value,
    password: document.getElementById("inputPassword").value,
  };
  console.log(user);

  signInUser(`${api_Url_Base}/auth/login`, user);
};
