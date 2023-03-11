import { filterResults } from "./api/filter/index.mjs";
import { searchResults } from "./api/search/index.mjs";
import * as listeners from "./forms/index.mjs";
import { displayPost } from "./post/displaypost.mjs";
import { displayPosts, displayPostsProfile } from "./posts/displayPosts.mjs";
import * as profile from "./profile/index.mjs";

export default function router() {
  const path = location.pathname;
  profile.isLoggedIn();
  searchResults();

  switch (path) {
    case "/profile/login/":
      listeners.setLoginForm();
      break;
    case "/profile/register/":
      listeners.setRegisterForm();
      break;
    case "/profile/edit/":
      profile.notLoggedIn();
      listeners.setUpdateProfileForm();

      break;
    case "/profile/":
      profile.notLoggedIn();
      listeners.setCreatePostForm();
      profile.displayProfile();
      displayPostsProfile();
      break;

    // display posts for that user
    case "/home/":
      profile.notLoggedIn();
      listeners.setCreatePostForm();
      displayPosts();
      filterResults();

      break;
    case "/search/":
      profile.notLoggedIn();
      break;

    case "/post/edit/":
      profile.notLoggedIn();
      listeners.setUpdatePostForm();
      break;

    case "/post/":
      profile.notLoggedIn();
      displayPost();
      break;
  }
}
