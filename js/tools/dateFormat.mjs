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
