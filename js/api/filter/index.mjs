import { setFilterForm } from "../../forms/filter.mjs";
import { readPosts } from "../posts/readposts.mjs";

/**
 * Clears container and fetches posts
 */
export async function filterResults() {
  const results = document.querySelector("#filterResults");
  results.innerHTML = "";
  try {
    const posts = await readPosts();
    setFilterForm(posts);
  } catch (error) {
    console.log(error);
  }
}
