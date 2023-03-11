import { displayProfileImg } from "../tools/displayAvatar.mjs";
import { loadLocal } from "../storage/index.mjs";
import { redirect } from "../tools/location/reload.mjs";

export async function isLoggedIn() {
  try {
    const profile = loadLocal("profile");

    if (profile) {
      displayProfileImg();
    }
  } catch (error) {
    console.log(error);
  }
}

export function notLoggedIn() {
  const profile = loadLocal("profile");

  if (!profile) {
    redirect("/");
  }
}
