import { reloadCurrentPage } from "../../tools/location/reload.mjs";
import { api_posts } from "../../tools/constants.mjs";
import { methodDelete as method } from "../../tools/constants.mjs";
import { tokenFetch } from "../tokenFetch.mjs";

/**
 *
 * @param {number} id - of post
 * @returns - none (post deleted from api)
 */
export async function deletePost(id) {
  const deletePostUrl = `${api_posts}/${id}`;

  try {
    const response = await tokenFetch(deletePostUrl, {
      method,
    });

    reloadCurrentPage();

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
