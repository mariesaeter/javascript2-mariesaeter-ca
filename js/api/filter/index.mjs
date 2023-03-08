import { setFilterForm } from "../../forms/filter.mjs";
import { readPosts } from "../posts/readposts.mjs";

export async function filterResults() {
  const results = document.querySelector("#searchResults");
  results.innerHTML = "";
  try {
    const posts = await readPosts();
    setFilterForm(posts);
  } catch (error) {
    console.log(error);
  }
}
