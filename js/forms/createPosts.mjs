import { createPost } from "../api/posts/createposts.mjs";
import { displayAvatar } from "../post/displayAvatar.mjs";

export function setCreatePostForm() {
  const form = document.querySelector("#createPostForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const post = Object.fromEntries(formData.entries());
    console.log(post);

    post.title = [post.selectTitle + ": " + post.bookTitle].join("");

    createPost(post);
  });
}
