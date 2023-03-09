/* <div class="d-flex">
<a href="/profile.html">
  <img
    src="/images/profiles/profile5.jpg"
    class="rounded-circle medium-profile-img"
    alt="Sara's profile image"
  />
</a>
<div class="ms-2 w-100">
  <div class="d-flex justify-content-between">
    <a href="#">Sara Donau</a>
    <small class="fw-light">1 hour ago</small>
  </div>
  <div class="d-flex align-items-center">
    <i class="fa-solid fa-circle-xmark small-icon"></i>
    <small class="fw-light ps-1">DNF'ed Assassins Quest</small>
  </div>
</div>
</div> */

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
  // avatarImg.setAttribute("alt", `${name}'s profile image`);
  avatarImg.src = `${avatar}`;

  if (avatar === "") {
    avatarImg.src = "/../images/profiles/profile-no-image.png";
  }

  // create h1
  const profileName = document.createElement("a");
  profileName.innerText = `${name}`;

  profileName.setAttribute("href", `/../profile/?name=${name}`);

  avatarDiv.append(avatarImg, profileName);

  return avatarDiv;
}

{
  /* <a
                class="nav-link d-flex flex-column align-items-center"
                href="/profile/"
                ><div id="profileImg"></div><span class="mt-1">Profile</span></a
              > */
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
  // avatarImg.setAttribute("alt", `${name}'s profile image`);
  avatarImg.src = `${avatar}`;

  if (avatar === "") {
    avatarImg.src = "/../images/profiles/profile-no-image.png";
  }

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
