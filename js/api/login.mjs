import { methodPost as method } from "../tools/constants.mjs";
import { api_login } from "../tools/constants.mjs";
import * as storage from "../storage/index.mjs";
import { redirect } from "../tools/location/reload.mjs";

/**
 * Sign in existing user
 * @param {Object} user - Data entries from "../forms/login.mjs"
 * On success - redirect to profile page
 */
export async function signInUser(user) {
  const body = JSON.stringify(user);

  try {
    const response = await fetch(api_login, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    const { accessToken, ...profile } = await response.json();

    // save the access token
    storage.saveLocal("accessToken", accessToken);
    // save the profile separate from the token
    storage.saveLocal("profile", profile);

    // send user to profile page
    redirect(`/profile/?name=${profile.name}`);
  } catch (error) {
    console.log(error);
  }
}
