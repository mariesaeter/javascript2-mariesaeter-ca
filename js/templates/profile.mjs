import { noAvatar } from "../tools/noAvatar.mjs";

/**
 * Creates template for profile html
 * @param {Object} profileData - user information from api
 * @param {Object} infoData - additional information from local storage
 * @returns div with html
 */
export function profileTemplate(profileData, infoData) {
  const mainDiv = document.createElement("div");
  const { name, avatar } = profileData;

  // create avatar image
  const avatarContainer = document.createElement("div");
  avatarContainer.className =
    "position-relative overflow-hidden profileImageContainer";

  const avatarImg = document.createElement("img");
  avatarImg.className =
    "rounded-circle w-75 h-75 position-absolute top-50 start-50 translate-middle object-fit-cover";
  avatarImg.setAttribute("alt", `${name}'s profile image`);
  avatarImg.src = `${avatar}`;
  noAvatar(avatar, avatarImg);

  avatarContainer.appendChild(avatarImg);
  // create h1
  const profileName = document.createElement("h1");
  profileName.innerText = `${name}`;

  // create info
  if (infoData) {
    const { age, from, genre } = infoData;
    const infoClassesDivs = "d-flex justify-content-center";
    const infoClassesTitles = "text-primary fw-semibold me-2";

    // age text
    const ageContainer = document.createElement("div");
    ageContainer.className = infoClassesDivs;

    const ageTitle = document.createElement("p");
    ageTitle.innerText = "Age: ";
    ageTitle.className = infoClassesTitles;

    const ageText = document.createElement("span");
    ageText.innerText = `${age} years`;

    ageContainer.append(ageTitle, ageText);

    // from text
    const fromContainer = document.createElement("div");
    fromContainer.className = infoClassesDivs;

    const fromTitle = document.createElement("p");
    fromTitle.innerText = "From: ";
    fromTitle.className = infoClassesTitles;

    const fromText = document.createElement("span");
    fromText.innerText = `${from}`;

    fromContainer.append(fromTitle, fromText);

    // genre text
    const genreContainer = document.createElement("div");
    genreContainer.className = infoClassesDivs;

    const genreTitle = document.createElement("p");
    genreTitle.innerText = "Favorite genre: ";
    genreTitle.className = infoClassesTitles;

    const genreText = document.createElement("span");
    genreText.innerText = `${genre}`;

    genreContainer.append(genreTitle, genreText);

    mainDiv.append(
      avatarContainer,
      profileName,
      ageContainer,
      fromContainer,
      genreContainer
    );
  } else {
    mainDiv.append(avatarContainer, profileName);
  }
  return mainDiv;
}

/**
 * Render template forprofile and appends to html container
 * @param {Object} profileData - user information from api
 * @param {Object} infoData - additional information from local storage
 * @param {Object} parent - html container
 */
export function renderProfileTemplate(profileData, infoData, parent) {
  if (infoData) {
    parent.append(profileTemplate(profileData, infoData));
  } else {
    parent.appendChild(profileTemplate(profileData));
  }
}
