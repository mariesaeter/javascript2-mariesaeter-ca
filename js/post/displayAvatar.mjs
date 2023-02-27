import { loadLocal } from "../storage/index.mjs";
import { renderAvatarTemplate } from "../templates/postAvatar.mjs";

export function displayAvatar() {
  const formHeader = document.getElementById("avatarContainer");
  const profile = loadLocal("profile");
  renderAvatarTemplate(profile, formHeader);
}
