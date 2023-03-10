/**
 * Reload page to homepage with a timeout
 */
export function reloadPage() {
  setTimeout(() => {
    location.href = "/../home";
  }, 300);
}

export function reload(path) {
  setTimeout(() => {
    location.href = path;
  }, 300);
}
