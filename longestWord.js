function LongestWord(sen) {
  const words = sen.replace(/[^a-z0-9\s]/gim, "").split(" ");
  let longestWord = "";
  words.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

module.exports = LongestWord;
