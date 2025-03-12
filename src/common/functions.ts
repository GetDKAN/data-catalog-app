export function truncateDescription(description, maxLength) {
  const index = description.indexOf(" ", maxLength);
  return index === -1 ? description : description.substring(0, index) + "..."
}