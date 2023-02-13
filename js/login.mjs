import { api_Url_Base } from "./main.mjs";
import { POST_Options } from "./main.mjs";

async function signInUser(url, data) {
  try {
    const options = { POST_Options, body: JSON.stringify(data) };

    const response = await fetch(url, options);
    console.log(response);
    const json = await response.json();
    const accessToken = json.accessToken;
    localStorage.setItem("accessToken", accessToken);
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}
