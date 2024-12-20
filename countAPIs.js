// function encodeBase64(str) {
//   return Buffer.from(str).toString("base64");
// };

// function decodeBase64(str) {
//   return Buffer.from(str, "base64").toString("ascii");
// };

// function generateRandomString(length) {
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let result = "";
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return result;
// };

function countWords(str) {
  return str.split(/\s+/).filter((word) => word.length > 0).length;
}

function countCharacters(str) {
  return str.length;
}

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return str.split("").filter((char) => vowels.includes(char)).length;
}

function countConsonants(str) {
  return str.length - countVowels(str);
}

function countSentences(str) {
  return str.split(/[.!?]+/).filter((sentence) => sentence.length > 0).length;
}
function countParagraphs(str) {
  return str.split(/\n+/).filter((paragraph) => paragraph.length > 0).length;
}
function countLines(str) {
  return str.split(/\r?\n/).length;
}
function countUniqueWords(str) {
  const words = str.split(/\s+/);
  const uniqueWords = new Set(words);
  return uniqueWords.size;
}

function countUniqueCharacters(str) {
  const characters = str.split("");
  const uniqueCharacters = new Set(characters);
  return uniqueCharacters.size;
}
function countDigits(str) {
  return str.split("").filter((char) => !isNaN(parseInt(char))).length;
}
function countOccurrences(str, substring) {
  return str.split(substring).length - 1;
}
function countSubstrings(str, substring) {
  return str.split(substring).length - 1;
}

export default {
  countWords,
  countCharacters,
  countVowels,
  countConsonants,
  countSentences,
  countParagraphs,
  countLines,
  countUniqueWords,
  countUniqueCharacters,
  countDigits,
  countOccurrences,
  countSubstrings,
};
