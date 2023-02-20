import { api_posts } from "../../url/constants.mjs";
import { tokenFetch } from "../tokenFetch.mjs";

export async function readPosts(postData) {
  const body = JSON.stringify(postData);

  try {
    const response = await tokenFetch(api_posts, {
      body,
    });

    const posts = await response.json();
    return posts;
  } catch (error) {
    console.log(error);
  }
}

export async function readPost(id) {
  try {
    const response = await tokenFetch(`${api_posts}/${id}`, {});

    const post = await response.json();
    return post;
  } catch (error) {
    console.log(error);
  }
}
