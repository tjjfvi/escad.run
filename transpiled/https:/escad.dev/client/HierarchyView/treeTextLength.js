export function treeTextLength(text) {
  let total = 0;

  for (const part of text) {
    if (part.kind === "string") {
      total += part.string.length;
    } else if (part.kind === "ellipsis") {
      total += 2; // The space between the dots is shrunk
    }
  }

  return total;
}