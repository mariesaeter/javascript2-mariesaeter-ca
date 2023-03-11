/**
 * Reload page to homepage with a timeout
 */
export function reloadPage() {
  setTimeout(() => {
    location.href = "/../home";
  }, 300);
}

/**
 * reload the current page you are on
 */
export function reloadCurrentPage() {
  setTimeout(() => {
    location.reload();
  }, 300);
}

/**
 * redirect to new path
 * @param {string} path - new location
 * @example
 * redirect("/profile/") sends you to profile page after timeout
 */
export function redirect(path) {
  setTimeout(() => {
    window.location.href = path;
  }, 300);
}
