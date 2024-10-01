const {
  caseString,
  toAlternatingCase,
  toCamelCase,
  toCapitalizedCase,
  toKebabCase,
  toPascalCase,
  toReverseCase,
  toSentenceCase,
  toSnakeCase,
  toTitleCase,
  toUpperSnakeCase,
} = require("./caseAPIs");

const {
  removeDuplicates,
  removeNonAlpha,
  removeSubstring,
} = require("./removeAPIs");

const {
  countCharacters,
  countConsonants,
  countVowels,
  countWords,
} = require("./countAPIs");

const { decodeBase64, encodeBase64 } = require("./encodeDecodeAPIs");

const { generateRandomString } = require("./generateAPIs");

const {
  replaceAllOccurrences,
  replaceSpecificOccurence,
  replaceFirstOccurence,
  replaceLastOccurence,
} = require("./replaceAPIs");

const { findSubstringOccurrences } = require("./searchAPIs");

const {
  isAlpha,
  isAnagram,
  isPalindrome,
  isPangram,
} = require("./validateAPIs");

module.export = {
  caseString,
  countCharacters,
  countConsonants,
  countVowels,
  countWords,
  decodeBase64,
  encodeBase64,
  findSubstringOccurrences,
  generateRandomString,
  isAlpha,
  isAnagram,
  isPalindrome,
  isPangram,
  removeDuplicates,
  removeNonAlpha,
  removeSubstring,
  replaceAllOccurrences,
  replaceFirstOccurence,
  replaceLastOccurence,
  replaceSpecificOccurence,
  toAlternatingCase,
  toCamelCase,
  toCapitalizedCase,
  toKebabCase,
  toPascalCase,
  toReverseCase,
  toSentenceCase,
  toSnakeCase,
  toTitleCase,
  toUpperSnakeCase,
};
