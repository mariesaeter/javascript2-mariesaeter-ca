import { readProfile } from "../api/profiles/readProfile.mjs";
import { loadLocal } from "../storage/index.mjs";
import { renderProfileTemplate } from "../templates/profile.mjs";

export async function displayProfile() {
  const profile = loadLocal("profile");
  const profileInfo = loadLocal("profileInfo");

  const profileSection = document.getElementById("profileInfoContainer");

  renderProfileTemplate(profile, profileInfo, profileSection);
}
