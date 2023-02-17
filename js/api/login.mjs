import { methodPost as method } from "../main.mjs";
import { api_login } from "../main.mjs";

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

    const json = await response.json();
    console.log(json);

    const accessToken = json.accessToken;
    localStorage.setItem("accessToken", accessToken);

    return json;
  } catch (error) {
    console.log(error);
  }
}
