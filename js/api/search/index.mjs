import { setSearchForm } from "../../forms/search.mjs";
import { loadLocal } from "../../storage/index.mjs";
import { renderAllPostsTemplate } from "../../templates/post.mjs";
import { readPosts } from "../posts/readposts.mjs";

/**
 * Clears container and fetches posts
 */
export async function searchResults() {
  try {
    const posts = await readPosts();
    setSearchForm(posts);

    if (location.href.match("/search/")) {
      const results = document.querySelector("#searchResults");

      const filteredPosts = loadLocal("searchResult");
      console.log(filteredPosts);

      if (filteredPosts.length) {
        results.innerHTML = "";
        renderAllPostsTemplate(filteredPosts, results);
      } else {
        results.innerHTML = "There are no posts matching your search";
      }
    }
  } catch (error) {
    console.log(error);
  }
}
