export const api_Url_Base = "https://api.noroff.dev/api/v1/social";

export const POST_Options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

// export async function postData(url, data) {
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   };
//   const response = await fetch(url, options);
//   console.log(response);
//   const json = await response.json();
//   console.log(json);
//   return json;
// }
