import { loadLocal } from "../storage/index.mjs";
import * as template from "../templates/postAvatar.mjs";

/**
 * Display avatar and name for logged in user on create post form
 */
export function displayAvatar() {
  const avatar = document.getElementById("avatarContainer");
  const profile = loadLocal("profile");
  template.renderAvatarTemplate(profile, avatar);
}

export function displayProfileImg() {
  const profileImg = document.getElementById("profileImg");
  const profile = loadLocal("profile");
  template.renderNavProfileImgTemplate(profile, profileImg);
}
