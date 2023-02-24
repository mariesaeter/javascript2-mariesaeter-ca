import { api_profile } from "../../url/constants.mjs";
import { tokenFetch } from "../tokenFetch.mjs";

export async function readProfiles() {
  try {
    const response = await tokenFetch(api_profile);

    const profiles = await response.json();
    return profiles;
  } catch (error) {
    console.log(error);
  }
}

export async function readProfile(name) {
  try {
    const response = await tokenFetch(`${api_profile}/${name}`);

    const profile = await response.json();
    return profile;
  } catch (error) {
    console.log(error);
  }
}
