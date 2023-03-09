import { readPost } from "../api/posts/readposts.mjs";
import { renderPostTemplate } from "../templates/post.mjs";

/**
 * Handler to display single post by id in HTML
 */
export async function displayPost() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const post = await readPost(id);

  const postSection = document.getElementById("post");

  renderPostTemplate(post, postSection);
}
