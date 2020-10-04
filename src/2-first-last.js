export const firstLast = (items) => {
  const arrayLength = items.length;
  if (arrayLength === 0) {
    return "No items!";
  } else if (arrayLength === 1) {
    return `Only item: ${items[0]}`;
  } else {
    return `First: ${items[0]}, Last: ${items[arrayLength - 1]}`;
  }
};
