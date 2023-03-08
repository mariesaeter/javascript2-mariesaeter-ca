import { loadLocal } from "../storage/index.mjs";
import { renderAvatarTemplate } from "../templates/postAvatar.mjs";

/**
 * Display avatar and name for logged in user on create post form
 */
export function displayAvatar() {
  const formHeader = document.getElementById("avatarContainer");
  const profile = loadLocal("profile");
  renderAvatarTemplate(profile, formHeader);
}
