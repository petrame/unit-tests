export const hashtags = (text) => {
  const textArray = text.split(" ");
  let newArray = [];
  textArray.forEach((element) => {
    if (element.startsWith("#")) {
      newArray.push(element);
    }
  });
  return newArray;
};
