// avatar

import { noAvatar } from "../tools/noAvatar.mjs";

export function profileTemplate(profileData, infoData) {
  const mainDiv = document.createElement("div");

  // create avatar image
  const avatarContainer = document.createElement("div");
  avatarContainer.className =
    "position-relative overflow-hidden profileImageContainer";

  const avatar = document.createElement("img");
  avatar.className =
    "rounded-circle w-75 h-75 position-absolute top-50 start-50 translate-middle object-fit-cover";
  avatar.setAttribute("alt", `${profileData.name}'s profile image`);
  avatar.src = `${profileData.avatar}`;
  noAvatar(profileData.avatar, avatar);

  avatarContainer.appendChild(avatar);
  // create h1
  const profileName = document.createElement("h1");
  profileName.innerText = `${profileData.name}`;

  // create info
  const infoClassesDivs = "d-flex justify-content-center";
  const infoClassesTitles = "text-primary fw-semibold me-2";

  // age text
  const ageContainer = document.createElement("div");
  ageContainer.className = infoClassesDivs;

  const ageTitle = document.createElement("p");
  ageTitle.innerText = "Age: ";
  ageTitle.className = infoClassesTitles;

  const age = document.createElement("span");
  age.innerText = `${infoData.age} years`;

  ageContainer.append(ageTitle, age);

  // from text
  const fromContainer = document.createElement("div");
  fromContainer.className = infoClassesDivs;

  const fromTitle = document.createElement("p");
  fromTitle.innerText = "From: ";
  fromTitle.className = infoClassesTitles;

  const from = document.createElement("span");
  from.innerText = `${infoData.from}`;

  fromContainer.append(fromTitle, from);

  // genre text
  const genreContainer = document.createElement("div");
  genreContainer.className = infoClassesDivs;

  const genreTitle = document.createElement("p");
  genreTitle.innerText = "Favorite genre: ";
  genreTitle.className = infoClassesTitles;

  const genre = document.createElement("span");
  genre.innerText = `${infoData.genre}`;

  genreContainer.append(genreTitle, genre);

  mainDiv.append(
    avatarContainer,
    profileName,
    ageContainer,
    fromContainer,
    genreContainer
  );

  return mainDiv;
}

export function renderProfileTemplate(profileData, infoData, parent) {
  parent.append(profileTemplate(profileData, infoData));
}
