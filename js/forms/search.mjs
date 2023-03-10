import { searchResults } from "../api/search/index.mjs";
import { saveLocal } from "../storage/index.mjs";
import { renderAllPostsTemplate } from "../templates/post.mjs";
import { reload } from "../tools/location/reload.mjs";

/**
 * Displays posts filtered by search input
 * @param {Array} posts
 * @returns - new array of filtered posts
 */
export function setSearchForm(posts) {
  const form = document.querySelector("#searchForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const searchWord = form.word.value;
      const word = searchWord.toLowerCase();

      const filteredPosts = posts.filter(function (post) {
        const title = post.title.toLowerCase();
        const body = post.body.toLowerCase();
        const author = post.author.name.toLowerCase();
        const tags = Boolean(
          post.tags
            .map((tag) => tag.toLowerCase())
            .filter((tag) => tag.includes(word)).length
        );

        return (
          title.includes(word) ||
          body.includes(word) ||
          author.includes(word) ||
          tags
        );
      });

      // location.href = "/../home/search";
      // setTimeout(() => {
      //   location.href = "/../home/search";
      // }, 300);
      console.log(filteredPosts);
      saveLocal("searchResult", filteredPosts);
      reload("/search/");

      // const results = document.querySelector("#posts");
      // if (filteredPosts.length) {
      //   results.innerHTML = "";
      //   renderAllPostsTemplate(filteredPosts, results);
      // } else {
      //   results.innerHTML = "There are no posts matching your search";
      // }
    });
  }
}
