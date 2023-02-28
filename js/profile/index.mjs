import { readProfile } from "../api/profiles/readProfile.mjs";
import { loadLocal } from "../storage/index.mjs";
import { renderProfileTemplate } from "../templates/profile.mjs";

export async function displayProfile() {
  const url = new URL(location.href);
  const name = url.searchParams.get("name");

  const profile = await readProfile(name);
  const profileInfo = loadLocal("profileInfo");

  const profileSection = document.getElementById("profileInfoContainer");

  renderProfileTemplate(profile, profileInfo, profileSection);
}
