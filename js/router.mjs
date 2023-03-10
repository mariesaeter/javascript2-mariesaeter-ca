import { filterResults } from "./api/filter/index.mjs";
import { searchResults } from "./api/search/index.mjs";
import * as listeners from "./forms/index.mjs";
import { displayAvatar, displayProfileImg } from "./post/displayAvatar.mjs";
import { displayPost } from "./post/displaypost.mjs";
import { displayPosts, displayPostsProfile } from "./posts/displayPosts.mjs";
import { isLoggedIn, notLoggedIn } from "./profile/checkLoggedIn.mjs";
import { displayProfile } from "./profile/display.mjs";

export default function router() {
  const path = location.pathname;
  isLoggedIn();

  switch (path) {
    // more listeners
    case "/":
      // listeners.setLoginForm();
      break;

    case "/profile/login/":
      listeners.setLoginForm();
      break;
    case "/profile/register/":
      listeners.setRegisterForm();
      break;
    case "/profile/edit/":
      notLoggedIn();
      listeners.setUpdateProfileForm();

      break;
    case "/profile/":
      notLoggedIn();
      listeners.setCreatePostForm();
      displayProfile();
      displayPostsProfile();
      break;

    // display posts for that user
    case "/home/":
      notLoggedIn();
      listeners.setCreatePostForm();
      displayPosts();
      searchResults();
      filterResults();

      break;

    case "/post/edit/":
      notLoggedIn();
      listeners.setUpdatePostForm();
      break;

    case "/post/":
      notLoggedIn();
      displayPost();
      break;
  }
}
