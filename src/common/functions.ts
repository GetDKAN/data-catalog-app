export function truncateDescription(description: string, maxLength: number) {
  const index = description.indexOf(" ", maxLength);
  return index === -1 ? description : description.substring(0, index) + "..."
}

export function getSortOrder(sort: string) {
  return sort === "title" ? "asc" : "desc";
}
