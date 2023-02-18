import { loadLocal } from "../storage/index.mjs";

export function headers() {
  const accessToken = loadLocal("accessToken");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
}

export async function tokenFetch(url, options) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
