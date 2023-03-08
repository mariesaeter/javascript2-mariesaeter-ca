import { api_posts } from "../../url/constants.mjs";
import { api_profile } from "../../url/constants.mjs";
import { tokenFetch } from "../tokenFetch.mjs";

/**
 * GET request fetching all posts from API
 * @returns - a list of posts
 */
export async function readPosts() {
  try {
    const response = await tokenFetch(`${api_posts}/?_author=true`);

    const posts = await response.json();

    return posts;
  } catch (error) {
    console.log(error);
  }
}

/**
 * GET request to fetch all posts created by a specific profile
 * @param {string} name - A specific profile`s name
 * @returns - a list of posts from a profile
 */
export async function readPostsProfile(name) {
  try {
    const response = await tokenFetch(
      `${api_profile}/${name}/posts/?_author=true`
    );

    const posts = await response.json();

    return posts;
  } catch (error) {
    console.log(error);
  }
}

/**
 * GET request to fetch a single post by post id
 * @param {number} id - of post
 * @returns - a single post
 */
export async function readPost(id) {
  try {
    const response = await tokenFetch(`${api_posts}/${id}/?_author=true`);

    const post = await response.json();
    return post;
  } catch (error) {
    console.log(error);
  }
}
