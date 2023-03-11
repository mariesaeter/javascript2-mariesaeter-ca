import { api_posts } from "../../tools/constants.mjs";
import { methodPost as method } from "../../tools/constants.mjs";
import { tokenFetch } from "../tokenFetch.mjs";

/**
 * Creates post and adds it to POST /api/v1/social/posts
 * @param {Object} postData - Data gathered from form entries "/../js/forms/createPosts.mjs"
 * @returns
 *
 */
export async function createPost(postData) {
  const body = JSON.stringify(postData);

  try {
    const response = await tokenFetch(api_posts, {
      method,
      body,
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
