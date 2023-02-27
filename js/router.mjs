import * as listeners from "./forms/index.mjs";
import { displayPosts } from "./posts/displayPosts.mjs";
import { displayProfile } from "./profile/index.mjs";

export default function router() {
  const path = location.pathname;

  switch (path) {
    // more listeners
    case "/profile/login/":
      listeners.setLoginForm();
      break;
    case "/profile/register/":
      listeners.setRegisterForm();
      break;
    case "/profile/edit/":
      listeners.setUpdateProfileForm();
      break;
    case "/profile/":
      listeners.setCreatePostForm();
      displayProfile();
    // display posts for that user
    case "/home/":
      listeners.setCreatePostForm();
      displayPosts();
      break;
    case "/post/edit/":
      listeners.setUpdatePostForm();
      break;
  }
}
