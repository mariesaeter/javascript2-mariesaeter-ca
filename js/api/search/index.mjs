import { setSearchForm } from "../../forms/search.mjs";
import { renderAllPostsTemplate } from "../../templates/post.mjs";
import { readPosts } from "../posts/readposts.mjs";

export async function searchResults() {
  const results = document.querySelector("#searchResults");
  results.innerHTML = "";
  try {
    const posts = await readPosts();
    setSearchForm(posts);
  } catch (error) {
    console.log(error);
  }
}
