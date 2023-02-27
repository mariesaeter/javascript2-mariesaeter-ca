import { readPosts } from "../api/posts/readposts.mjs";
import { renderPostTemplates } from "../templates/post.mjs";

export async function displayPosts() {
  const posts = await readPosts();

  const postSection = document.getElementById("posts");

  renderPostTemplates(posts, postSection);
}
