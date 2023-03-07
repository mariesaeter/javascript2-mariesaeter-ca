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
