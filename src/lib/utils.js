export function formatRuntime(minutes) {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hrs > 0 && mins > 0) {
    return `${hrs}h ${mins} minutes`;
  } else if (hrs > 0) {
    return `${hrs}h`;
  } else {
    return `${mins} minutes`;
  }
}

export function formatDateToMonthYear(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "short" };
  return date.toLocaleDateString("en-US", options);
}