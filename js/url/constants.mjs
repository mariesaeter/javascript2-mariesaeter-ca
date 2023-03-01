export const api_Url_Base = "https://api.noroff.dev/api/v1/social";
export const api_register = `${api_Url_Base}/auth/register`;
export const api_login = `${api_Url_Base}/auth/login`;
export const api_posts = `${api_Url_Base}/posts`;
export const api_profile = `${api_Url_Base}/profiles`;

export const methodPost = "post";
export const methodPut = "put";
export const methodDelete = "delete";
export const pathProfile = "../profile.html";

// export const POST_Options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

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

// const options = {
//   method: method,
//   headers: headers,
//   body: body,
// };

// fetch(request).then((response => response.json()))

// export function loginRegister() {
//   const form = document.querySelector("#loginForm");

//   form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);
//     const user = Object.fromEntries(formData.entries());
//     console.log(user);
//   });
// }
