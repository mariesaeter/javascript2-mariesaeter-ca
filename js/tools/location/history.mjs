/**
 * Function that sends you back to last visited page
 */
export function backOnePage() {
  setTimeout(() => {
    history.back();
  }, 300);
}
