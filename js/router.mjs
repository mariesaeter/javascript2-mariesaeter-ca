import { filterResults } from "./api/filter/index.mjs";
import { searchResults } from "./api/search/index.mjs";
import * as listeners from "./forms/index.mjs";
import { displayAvatar, displayProfileImg } from "./post/displayAvatar.mjs";
import { displayPost } from "./post/displaypost.mjs";
import { displayPosts, displayPostsProfile } from "./posts/displayPosts.mjs";
import { displayProfile } from "./profile/display.mjs";

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
      displayPostsProfile();
      break;

    // display posts for that user
    case "/home/":
      listeners.setCreatePostForm();
      displayPosts();
      searchResults();
      filterResults();

      break;

    case "/post/edit/":
      listeners.setUpdatePostForm();
      break;

    case "/post/":
      displayPost();
  }
}

// If logged in, run this code!!!
displayProfileImg();
