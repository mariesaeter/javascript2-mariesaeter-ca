import { api_posts } from "../../url/constants.mjs";
import { api_profile } from "../../url/constants.mjs";
import { tokenFetch } from "../tokenFetch.mjs";

export async function readPosts() {
  try {
    const response = await tokenFetch(`${api_posts}/?_author=true`);

    const posts = await response.json();

    return posts;
  } catch (error) {
    console.log(error);
  }
}

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

export async function readPost(id) {
  try {
    const response = await tokenFetch(`${api_posts}/${id}/?_author=true`);

    const post = await response.json();
    return post;
  } catch (error) {
    console.log(error);
  }
}
