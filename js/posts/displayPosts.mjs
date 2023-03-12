import { readPosts, readPostsProfile } from "../api/posts/readposts.mjs";
import { renderPostTemplates } from "../templates/post.mjs";

/**
 * Handler to display posts in HTML
 */
export async function displayPosts() {
  const posts = await readPosts();

  const postSection = document.getElementById("posts");

  renderPostTemplates(posts, postSection);
}

/**
 * Handler to display posts by the selected profile in HTML
 */
export async function displayPostsProfile() {
  const url = new URL(location.href);
  const name = url.searchParams.get("name");

  const posts = await readPostsProfile(name);

  const postSection = document.getElementById("postsProfile");

  renderPostTemplates(posts, postSection);
}
