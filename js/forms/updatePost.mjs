import * as crud from "../api/posts/index.mjs";
import { displayAvatar } from "../tools/displayAvatar.mjs";
import { backOnePage } from "../tools/location/history.mjs";

/**
 * Selects post by id, adds current values to the form
 * Puts new values to api through updatePost()
 */
export async function setUpdatePostForm() {
  const form = document.querySelector("#updatePostForm");
  displayAvatar();

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const button = form.querySelector("button");
    button.disabled = true;

    const postData = await crud.readPost(id);
    const { title, body } = postData;

    // split the title string into select title and book title only if title includes ":".
    if (title.includes(":")) {
      const splitTitle = postData.title.split(": ");
      // add values to form
      form.selectTitle.value = splitTitle[0];
      form.bookTitle.value = splitTitle[1];
    } else {
      form.bookTitle.value = title;
    }
    form.body.value = body;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;

      post.title = [post.selectTitle + ": " + post.bookTitle].join("");

      crud.updatePost(post);
      backOnePage();
    });
  }
}
