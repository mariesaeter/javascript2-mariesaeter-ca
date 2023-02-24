import { api_profile } from "../../url/constants.mjs";
import { methodPut as method } from "../../url/constants.mjs";
import { tokenFetch } from "../tokenFetch.mjs";

export async function updateProfile(profileData) {
  const body = JSON.stringify(profileData);
  const updateProfileUrl = `${api_profile}/${profileData.name}/media`;

  try {
    if (!profileData.name) {
      throw new Error("Update requires a name");
    }

    const response = await tokenFetch(updateProfileUrl, {
      method,
      body,
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
