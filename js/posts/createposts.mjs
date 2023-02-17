import { createAccessToken } from "../login.mjs";

function setPostForm() {
  const form = document.querySelector("#post-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const post = Object.fromEntries(formData.entries());
    console.log(post);
  });
}
