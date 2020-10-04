export const hackerSpeak = (words) => {
  // replace 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5"
  words = words.replace(/a/gi, "4");
  words = words.replace(/e/gi, "3");
  words = words.replace(/i/gi, "1");
  words = words.replace(/o/gi, "0");
  words = words.replace(/s/gi, "5");
  return words;
};
