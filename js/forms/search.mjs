import { saveLocal } from "../storage/index.mjs";
import { redirect } from "../tools/location/reload.mjs";

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

      // filter so that it is possible to get search results from title, body, profile and tags
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

      // save search result locally so that it can be used on the redirected search page
      saveLocal("searchResult", filteredPosts);
      redirect("/search/");
    });
  }
}
