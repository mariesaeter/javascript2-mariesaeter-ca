import { api_posts } from "../../url/constants.mjs";
import { methodDelete as method } from "../../url/constants.mjs";
import { tokenFetch } from "../tokenFetch.mjs";

export async function deletePost(postData) {
  const body = JSON.stringify(postData);
  const deletePostUrl = `${api_posts}/${postData.id}`;

  try {
    const response = await tokenFetch(deletePostUrl, {
      method,
      body,
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
