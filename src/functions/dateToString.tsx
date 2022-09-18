export function dateToString(
  date: Date,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }
) {
  return new Date(date).toLocaleString("pl-PL", options);
}
