import { setSearchForm } from "../../forms/search.mjs";

import { readPosts } from "../posts/readposts.mjs";

/**
 * Clears container and fetches posts
 */
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
