export function noAvatar(avatar, parent) {
  if (avatar === "") {
    parent.src = "/../images/profiles/profile-no-image.png";
  }
}
