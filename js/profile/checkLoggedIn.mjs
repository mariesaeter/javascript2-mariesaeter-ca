import { readPost } from "../api/posts/readposts.mjs";
import { readProfile } from "../api/profiles/readProfile.mjs";
import { displayProfileImg } from "../post/displayAvatar.mjs";
import { loadLocal } from "../storage/index.mjs";

export async function isLoggedIn() {
  try {
    const profile = loadLocal("profile");

    if (profile) {
      location.href = "/home/";
      displayProfileImg();
    } else {
      location.href = "/index.html";
    }
  } catch (error) {
    console.log(error);
  }
}
