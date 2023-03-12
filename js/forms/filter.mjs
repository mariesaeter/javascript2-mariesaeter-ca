import { renderAllPostsTemplate } from "../templates/post.mjs";
import { formatDateFilter } from "../tools/dateFormat.mjs";
import { reloadCurrentPage } from "../tools/location/reload.mjs";

/**
 * Filters posts by date
 * @param {Array} posts
 * @returns a list of posts that matches filter input
 */
export function setFilterForm(posts) {
  const input = document.querySelector("#date");
  const button = document.querySelector("#clearFilter");

  if (input) {
    input.addEventListener("change", (event) => {
      event.preventDefault();
      const input = event.target;
      const dateInput = input.value;

      // filter based on date
      const filteredPosts = posts.filter(function (post) {
        const date = formatDateFilter(post.created);

        return date.includes(dateInput);
      });
      console.log(filteredPosts);
      const results = document.querySelector("#posts");
      if (filteredPosts.length) {
        results.innerHTML = "";
        renderAllPostsTemplate(filteredPosts, results);
      } else {
        results.innerHTML = "There are no posts matching your search";
      }
    });
  }

  if (button) {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      reloadCurrentPage();
    });
  }
}
