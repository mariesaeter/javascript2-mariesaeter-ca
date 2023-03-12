import { api_posts } from "../../tools/constants.mjs";
import { methodPut as method } from "../../tools/constants.mjs";
import { tokenFetch } from "../tokenFetch.mjs";

/**
 * PUT request to update a post
 * @param {Object} postData - Data gathered from form entries "/../js/forms/updatePost.mjs"
 * @returns - updated post
 */
export async function updatePost(postData) {
  const body = JSON.stringify(postData);
  const updatePostUrl = `${api_posts}/${postData.id}`;

  try {
    if (!postData.id) {
      throw new Error("Update requires a postID");
    }

    const response = await tokenFetch(updatePostUrl, {
      method,
      body,
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
