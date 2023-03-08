/**
 * Adds a default avatar image of the avatar is empty
 * @param {Object} avatar - avatar from api
 * @param {Object} parent - html parent element
 */
export function noAvatar(avatar, parent) {
  if (avatar === "") {
    parent.src = "/../images/profiles/profile-no-image.png";
  }
}
