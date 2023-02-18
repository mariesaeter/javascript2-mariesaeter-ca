// import { createAccessToken } from "../login.mjs";
import { api_posts } from "../../url/constants.mjs";
import { methodPost as method } from "../../url/constants.mjs";
import { tokenFetch } from "../tokenFetch.mjs";

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
