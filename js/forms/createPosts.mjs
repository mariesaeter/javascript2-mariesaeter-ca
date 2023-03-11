import { createPost } from "../api/posts/index.mjs";
import { displayAvatar } from "../tools/displayAvatar.mjs";
import { reloadCurrentPage } from "../tools/location/reload.mjs";

/**
 * Retrieves data from html form
 * Creates post throguht createPost()
 */
export function setCreatePostForm() {
  const form = document.querySelector("#createPostForm");
  displayAvatar();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const post = Object.fromEntries(formData.entries());

    post.title = [post.selectTitle + ": " + post.bookTitle].join("");

    createPost(post);
    reloadCurrentPage();
    form.reset();
  });
}
