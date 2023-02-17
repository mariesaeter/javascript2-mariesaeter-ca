import { methodPost as method } from "../main.mjs";
import { api_register } from "../main.mjs";

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
