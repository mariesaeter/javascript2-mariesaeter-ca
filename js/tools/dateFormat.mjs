/**
 * Formats date to be displayed on posts
 * @param {string} postDate - date from api
 * @returns - date in format "Month DD, HH:MM"
 * @example
 * "Mar 8, 20:30"
 */
export function formatDate(postDate) {
  const options = {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };

  let date = new Intl.DateTimeFormat("en-US", options).format(
    new Date(postDate)
  );

  return date;
}

/**
 * Formats date to be used in filter
 * @param {string} postDate - date from api
 * @returns - date in format "YYYY-MM-DD"
 * @example
 * "2023-03-08"
 */
export function formatDateFilter(postDate) {
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };

  let date = new Intl.DateTimeFormat("fr-ca", options).format(
    new Date(postDate)
  );

  return date;
}
