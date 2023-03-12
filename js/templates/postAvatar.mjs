import { noAvatar } from "../tools/noAvatar.mjs";

/**
 * Creates template for the name and avatar for the logged in user
 * @param {Object} profileData
 * @returns - div with name and avatar
 */
export function avatarTemplate(profileData) {
  const avatarDiv = document.createElement("div");
  const { avatar, name } = profileData;

  // create avatar image
  const avatarImg = document.createElement("img");
  avatarImg.className = "rounded-circle medium-profile-img";
  avatarImg.src = `${avatar}`;

  // if there is no avatar set in default
  noAvatar(avatar, avatarImg);

  // add profile name
  const profileName = document.createElement("a");
  profileName.innerText = ` ${name}`;

  profileName.setAttribute("href", `/../profile/?name=${name}`);

  avatarDiv.append(avatarImg, profileName);

  return avatarDiv;
}

/**
 * Creates template for the name and avatar for the logged in user
 * @param {Object} profileData
 * @returns - div with name and avatar
 */
export function navProfileImgTemplate(profileData) {
  const { avatar, name } = profileData;

  const avatarContainer = document.createElement("a");
  avatarContainer.className = "nav-link d-flex flex-column align-items-center";
  avatarContainer.setAttribute("href", `/../profile/?name=${name}`);
  // create avatar image

  const avatarImg = document.createElement("img");
  avatarImg.className = "rounded-circle small-profile-img";
  avatarImg.src = `${avatar}`;

  noAvatar(avatar, avatarImg);

  const profileText = document.createElement("span");
  profileText.innerText = "profile";

  avatarContainer.append(avatarImg, profileText);

  return avatarContainer;
}

/**
 * Render template for logged in profile avatar and name and appends to html container
 * @param {Object} profileData
 * @param {Object} parent - html container
 */
export function renderAvatarTemplate(profileData, parent) {
  parent.append(avatarTemplate(profileData));
}

/**
 * Render template for logged in profile avatar and appends to html container
 * @param {Object} profileAvatar
 * @param {Object} parent - html container
 */
export function renderNavProfileImgTemplate(profileAvatar, parent) {
  parent.append(navProfileImgTemplate(profileAvatar));
}
