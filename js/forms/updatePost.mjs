import { readPost } from "../api/posts/readposts.mjs";
import { updatePost } from "../api/posts/updateposts.mjs";
import { displayAvatar } from "../post/displayAvatar.mjs";

export async function setUpdatePostForm() {
  const form = document.querySelector("#updatePostForm");
  displayAvatar();

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const button = form.querySelector("button");
    button.disabled = true;

    const postData = await readPost(id);

    // split the title string into select title and book title
    const splitTitle = postData.title.split(": ");
    // add values to form
    form.selectTitle.value = splitTitle[0];
    form.bookTitle.value = splitTitle[1];
    form.body.value = postData.body;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      console.log(post);
      post.id = id;

      post.title = [post.selectTitle + ": " + post.bookTitle].join("");

      updatePost(post);
    });
  }
}
