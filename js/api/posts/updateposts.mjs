import { api_posts } from "../../url/constants.mjs";
import { methodPut as method } from "../../url/constants.mjs";
import { tokenFetch } from "../tokenFetch.mjs";

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
