import { readPosts, readPostsProfile } from "../api/posts/readposts.mjs";
import { renderPostTemplates } from "../templates/post.mjs";

export async function displayPosts() {
  const posts = await readPosts();
  // const author = getAuthor(posts);

  const postSection = document.getElementById("posts");

  renderPostTemplates(posts, postSection);
}

export async function displayPostsProfile() {
  const url = new URL(location.href);
  const name = url.searchParams.get("name");

  const posts = await readPostsProfile(name);

  const postSection = document.getElementById("postsProfile");

  renderPostTemplates(posts, postSection);
}
