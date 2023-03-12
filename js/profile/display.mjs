import { readProfile } from "../api/profiles/readProfile.mjs";
import { loadLocal } from "../storage/index.mjs";
import { renderProfileTemplate } from "../templates/profile.mjs";

/**
 * Handler to display the selected profile in HTML
 */
export async function displayProfile() {
  const url = new URL(location.href);
  const name = url.searchParams.get("name");

  const profile = await readProfile(name);
  const profileInfo = loadLocal("profileInfo");

  const profileName = document.getElementById("profileName");
  if (name.endsWith("s")) {
    profileName.innerText = `${name}' feed`;
  } else {
    profileName.innerText = `${name}'s feed`;
  }

  const editLink = document.getElementById("editProfileBtn");
  editLink.href = `/profile/edit/?name=${name}`;
  const user = loadLocal("profile");
  if (name !== user.name) {
    editLink.style.display = "none";
  }

  const profileSection = document.getElementById("profileInfoContainer");

  renderProfileTemplate(profile, profileInfo, profileSection);
}
