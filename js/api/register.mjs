import { methodPost as method } from "../url/constants.mjs";
import { api_register } from "../url/constants.mjs";

export async function registerUser(user) {
  const body = JSON.stringify(user);

  try {
    const response = await fetch(api_register, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    const json = await response.json();
    console.log(json);

    return json;
  } catch (error) {
    console.log(error);
  }
}
