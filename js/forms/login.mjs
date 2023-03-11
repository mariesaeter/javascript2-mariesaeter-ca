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

    signInUser(user);
  });
}
