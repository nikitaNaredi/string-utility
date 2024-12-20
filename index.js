import caseAPIs from "./caseAPIs.js";
import countAPIs from "./countAPIs.js";
import encodeDecodeAPIs from "./encodeDecodeAPIs.js";
import generateAPIs from "./generateAPIs.js";
import removeAPIs from "./removeAPIs.js";
import replaceAPIs from "./replaceAPIs.js";
import searchAPIs from "./searchAPIs.js";
import transformAPIs from "./transformAPIs.js";
import validateAPIs from "./validateAPIs.js";

const { padString, slugify, truncate } = transformAPIs;
const { findSubstringOccurrences } = searchAPIs;
const { generateRandomString } = generateAPIs;
const {
  replaceAllOccurrences,
  replaceFirstOccurence,
  replaceLastOccurence,
  replaceSpecificOccurence,
} = replaceAPIs;
const { removeDuplicates, removeNonAlpha, removeSubstring } = removeAPIs;
const { countCharacters, countConsonants, countVowels, countWords } = countAPIs;
const { encodeBase64, decodeBase64 } = encodeDecodeAPIs;
const { isAlpha, isAnagram, isPalindrome, isPangram } = validateAPIs;
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
} = caseAPIs;

export default {
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
  slugify,
  padString,
  truncate,
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
  decodeBase64,
  encodeBase64,
};
