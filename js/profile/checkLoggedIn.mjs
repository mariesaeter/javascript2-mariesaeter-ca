import { readPost } from "../api/posts/readposts.mjs";
import { readProfile } from "../api/profiles/readProfile.mjs";
import { displayProfileImg } from "../post/displayAvatar.mjs";
import { loadLocal } from "../storage/index.mjs";
import { reload } from "../tools/location/reload.mjs";

export async function isLoggedIn() {
  try {
    const profile = loadLocal("profile");

    if (profile) {
      displayProfileImg();
      // } else {
      //   location = "/";
    }
  } catch (error) {
    console.log(error);
  }
}

export function notLoggedIn() {
  const profile = loadLocal("profile");

  if (!profile) {
    reload("/");
  }
}
