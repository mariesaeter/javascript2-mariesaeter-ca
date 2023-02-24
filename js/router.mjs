import * as listeners from "./forms/index.mjs";

export default function router() {
  const path = location.pathname;

  switch (path) {
    case "/profile/login/":
      listeners.setLoginForm();
      break;
    case "/profile/register/":
      listeners.setRegisterForm();
      break;
    case "/profile/edit/":
      listeners.setUpdateProfileForm();
      break;
    case "/post/create/":
      listeners.setCreatePostForm();
      break;
    case "/post/edit/":
      listeners.setUpdatePostForm();
      break;
  }
}
