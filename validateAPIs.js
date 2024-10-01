function isAlpha(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
console.log(isPalindrome("Hello, World!")); // false

function isAnagram(str1, str2) {
  const cleanStr1 = str1.replace(/[^a-zA-Z]/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/[^a-zA-Z]/g, "").toLowerCase();
  return (
    cleanStr1.split("").sort().join("") === cleanStr2.split("").sort().join("")
  );
}
// Example usage:
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("Triangle", "Integral")); // true
console.log(isAnagram("apple", "pale")); // false

function isPangram(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const cleanedStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  for (let char of alphabet) {
    if (!cleanedStr.includes(char)) {
      return false;
    }
  }
  return true;
}

// Example usage:
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(isPangram("Hello, World!")); // false

module.exports = {
  isAlpha,
  isPalindrome,
  isAnagram,
  isPangram,
};
