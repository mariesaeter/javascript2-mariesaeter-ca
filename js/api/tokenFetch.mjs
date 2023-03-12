import { loadLocal } from "../storage/index.mjs";

/**
 * Creates header for requests that needs authorization
 * @returns  - header content
 */
export function headers() {
  const accessToken = loadLocal("accessToken");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
}

/**
 * Creates a fetch request for an authorized url
 * @param {string} url - from api
 * @param {object} options - Optional addition of other options (body, method etc.) + options for the headers
 * @returns fetch request
 */
export async function tokenFetch(url, options) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
