import { api_posts } from "../../url/constants.mjs";
import { tokenFetch } from "../tokenFetch.mjs";

export async function readPosts(postData) {
  const body = JSON.stringify(postData);

  try {
    const response = await tokenFetch(api_posts, {
      body,
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function readPost(id) {}
