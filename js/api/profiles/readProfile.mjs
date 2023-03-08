import { api_profile } from "../../url/constants.mjs";
import { tokenFetch } from "../tokenFetch.mjs";

/**
 * GET request to fetch list of all profiles
 * @returns - list of profiles
 */
export async function readProfiles() {
  try {
    const response = await tokenFetch(api_profile);

    const profiles = await response.json();
    return profiles;
  } catch (error) {
    console.log(error);
  }
}

/**
 * GET request to fetch a single profile by name
 * @param {string} name - of profile
 * @returns - specific profile
 */
export async function readProfile(name) {
  try {
    const response = await tokenFetch(`${api_profile}/${name}`);

    const profile = await response.json();
    return profile;
  } catch (error) {
    console.log(error);
  }
}
