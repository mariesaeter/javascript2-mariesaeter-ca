{
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
}

export function avatarTemplate(profileData) {
  const avatarDiv = document.createElement("div");

  // create avatar image

  const avatar = document.createElement("img");
  avatar.className = "rounded-circle medium-profile-img";
  avatar.setAttribute("alt", `${profileData.name}'s profile image`);
  avatar.src = `${profileData.avatar}`;

  // create h1
  const profileName = document.createElement("a");
  profileName.innerText = `${profileData.name}`;

  profileName.setAttribute("href", `/../profile/?name=${profileData.name}`);

  avatarDiv.append(avatar, profileName);

  return avatarDiv;
}

export function renderAvatarTemplate(profileData, parent) {
  parent.append(avatarTemplate(profileData));
}
