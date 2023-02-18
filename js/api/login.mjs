import { methodPost as method } from "../main.mjs";
import { api_login } from "../main.mjs";
import * as storage from "../storage/index.mjs";

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
  } catch (error) {
    console.log(error);
  }
}
