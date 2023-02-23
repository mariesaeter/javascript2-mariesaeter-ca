import { api_posts } from "../../url/constants.mjs";
import { methodDelete as method } from "../../url/constants.mjs";
import { tokenFetch } from "../tokenFetch.mjs";

export async function deletePost(id) {
  const deletePostUrl = `${api_posts}/${id}`;

  try {
    const response = await tokenFetch(deletePostUrl, {
      method,
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
