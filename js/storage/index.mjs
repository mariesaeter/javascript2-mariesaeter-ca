/**
 * Saving to local storage
 * @param {string} key - name of the saved value
 * @param {*} value
 */
export function saveLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Loading from local storage
 * @param {string} key - name of saved value
 * @returns value
 */
export function loadLocal(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}

/**
 * Removes from local storage
 * @param {string} key - name of saved value
 */
export function removeLocal(key) {
  localStorage.removeItem(key);
}
