# @nikita-naredi/string-utility

> A utility package to parse strings

## Installation

Using npm:

```sh
npm install --save @nikita-naredi/string-utility
```

Using yarn:

```sh
yarn add @nikita-naredi/string-utility
```

## Usage

To use the string-utility package in your project, first import it:

```sh
const stringUtility = require('@nikita-naredi/string-utility');
```

Or if you're using ES6 modules:

```sh
import stringUtility from '@nikita-naredi/string-utility';
```

## API Reference

| Function                  | Description                                                                             | Example                                                                          | Output                |
| ------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------- |
| toUpperSnakeCase          | Converts the input string to upper snake case.                                          | `stringUtility.toUpperSnakeCase('Hello World');`                                 | `'HELLO_WORLD'`       |
| toReverseCase             | Reverses the case of each character in the input string.                                | `stringUtility.toReverseCase('Hello World');`                                    | `'hELLO wORLD'`       |
| toAlternatingCase         | Converts the input string to alternating case.                                          | `stringUtility.toAlternatingCase('hello world');`                                | `'HeLlO wOrLd'`       |
| toCamelCase               | Converts the input string to camel case.                                                | `stringUtility.toCamelCase('hello world');`                                      | `'helloWorld'`        |
| toPascalCase              | Converts the input string to pascal case.                                               | `stringUtility.toPascalCase('hello world');`                                     | `'HelloWorld'`        |
| toKebabCase               | Converts the input string to kebab case.                                                | `stringUtility.toKebabCase('hello world');`                                      | `'hello-world'`       |
| toSnakeCase               | Converts the input string to snake case.                                                | `stringUtility.toSnakeCase('hello world');`                                      | `'hello_world'`       |
| toCapitalizedCase         | Capitalizes the first letter of each word in the input string.                          | `stringUtility.toCapitalizedCase('hello world');`                                | `'Hello World'`       |
| toSentenceCase            | Converts the input string to sentence case.                                             | `stringUtility.toSentenceCase('hello world');`                                   | `'Hello world'`       |
| toTitleCase               | Converts the input string to title case.                                                | `stringUtility.toTitleCase('hello world');`                                      | `'Hello World'`       |
| removeNonAlpha            | Removes all non-alphabetic characters from the input string.                            | `stringUtility.removeNonAlpha('Hello, World! 123');`                             | `'HelloWorld'`        |
| containsOnlyAlpha         | Checks if the input string contains only alphabetic characters.                         | `stringUtility.containsOnlyAlpha('Hello');`                                      | `true`                |
| removeDuplicates          | Removes duplicate characters from the input string.                                     | `stringUtility.removeDuplicates('Hello');`                                       | `'Helo'`              |
| findSubstringOccurrences  | Counts the number of occurrences of a substring within the input string.                | `stringUtility.findSubstringOccurrences('Hello, World! 123', 'el');`             | `1`                   |
| replaceSpecificOccurrence | Replaces the nth occurrence of a substring with a new substring in the input string.    | `stringUtility.replaceSpecificOccurrence('Hello, World! 123', 'l', 'i', '1');`   | `'Helio, World! 123'` |
| replaceAllOccurrences     | Replaces all occurrences of a substring with a new substring in the input string.       | `stringUtility.replaceAllOccurrences('Hello, World! 123', 'l', 'i');`            | `'Heiio, Worid! 123'` |
| caseString                | Converts the input string to the specified case type (e.g., 'upper', 'lower', 'title'). | `stringUtility.caseString('Hello, World!', 'alternate');`                        | `'hELLo, wORLD'`      |
| countWords                | Counts the number of words in the input string.                                         | `stringUtility.countWords('Hello world');`                                       | `2`                   |
| countCharacters           | Counts the total number of characters in the input string.                              | `stringUtility.countCharacters('Hello, World!');`                                | `13`                  |
| countUniqueCharacters     | Counts the number of unique characters in the input string.                             | `stringUtility.countUniqueCharacters('Hello');`                                  | `4`                   |
| countVowels               | Counts the number of vowels in the input string.                                        | `stringUtility.countVowels('Hello world');`                                      | `3`                   |
| countConsonants           | Counts the number of consonants in the input string.                                    | `stringUtility.countConsonants('Hello world');`                                  | `7`                   |
| countSpecialCharacters    | Counts the number of special characters in the input string.                            | `stringUtility.countSpecialCharacters('Hello, World!');`                         | `2`                   |
| countDigits               | Counts the number of digits in the input string.                                        | `stringUtility.countDigits('Hello123World');`                                    | `3`                   |
| countOccurrences          | Counts the number of occurrences of a specific substring in the input string.           | `stringUtility.countOccurrences('Hello world', 'o');`                            | `2`                   |
| countSentences            | Counts the number of sentences in the input string.                                     | `stringUtility.countSentences('Hello world. How are you? I am fine.');`          | `3`                   |
| countParagraphs           | Counts the number of paragraphs in the input string.                                    | `stringUtility.countParagraphs('Paragraph 1.\n\nParagraph 2.\n\nParagraph 3.');` | `3`                   |
| countLines                | Counts the number of lines in the input string.                                         | `stringUtility.countLines('Line 1\nLine 2\nLine 3');`                            | `3`                   |
| countUniqueWords          | Counts the number of unique words in the input string.                                  | `stringUtility.countUniqueWords('The quick brown fox jumps over the lazy dog');` | `8`                   |
| countSubstrings           | Counts the number of occurrences of a substring in the input string.                    | `stringUtility.countSubstrings('hello hello world', 'hello');`                   | `2`                   |
| generateRandomString      | Generates a random string of specified length and character set.                        | `stringUtility.generateRandomString(10, 'alphanumeric');`                        | `'a2b3c4d5e6'`        |
| removeNonAlpha            | Removes all non-alphabetic characters from the input string.                            | `stringUtility.removeNonAlpha('Hello, World! 123');`                             | `'HelloWorld'`        |
| removeSubstring           | Removes all occurrences of a specified substring from the input string.                 | `stringUtility.removeSubstring('Hello World', 'o');`                             | `'Hell Wrld'`         |
| removeDuplicates          | Removes duplicate characters from the input string, keeping only the first occurrence.  | `stringUtility.removeDuplicates('hello');`                                       | `'helo'`              |
| replaceFirstOccurrence    | Replaces the first occurrence of a substring with a new string.                         | `stringUtility.replaceFirstOccurrence('Hello World', 'o', '0');`                 | `'Hell0 World'`       |
| replaceLastOccurrence     | Replaces the last occurrence of a substring with a new string.                          | `stringUtility.replaceLastOccurrence('Hello World', 'o', '0');`                  | `'Hello W0rld'`       |
| isAlpha                   | Checks if the input string contains only alphabetic characters.                         | `stringUtility.isAlpha('HelloWorld');`                                           | `true`                |
|                           |                                                                                         | `stringUtility.isAlpha('Hello123');`                                             | `false`               |
| isPalindrome              | Checks if the input string is a palindrome (reads the same forwards and backwards).     | `stringUtility.isPalindrome('racecar');`                                         | `true`                |
|                           |                                                                                         | `stringUtility.isPalindrome('hello');`                                           | `false`               |
| isAnagram                 | Checks if two input strings are anagrams of each other.                                 | `stringUtility.isAnagram('listen', 'silent');`                                   | `true`                |
|                           |                                                                                         | `stringUtility.isAnagram('hello', 'world');`                                     | `false`               |
| isPangram                 | Checks if the input string is a pangram (contains all letters of the alphabet).         | `stringUtility.isPangram('The quick brown fox jumps over the lazy dog');`        | `true`                |
|                           |                                                                                         | `stringUtility.isPangram('Hello world');`                                        | `false`               |
| slugify                   | Converts a string into a URL-friendly slug by removing special characters and spaces.   | `stringUtility.slugify('Hello World! 123');`                                     | `'hello-world-123'`   |
| truncate                  | Truncates a string to a specified length and adds an optional suffix.                   | `stringUtility.truncate('Hello World', 5, '...');`                               | `'Hello...'`          |
| padString                 | Pads a string with a specified character to reach a target length.                      | `stringUtility.padString('Hello', 8, '*', 'right');`                             | `'Hello***'`          |
|                           |                                                                                         | `stringUtility.padString('Hello', 8, '*', 'left');`                              | `'***Hello'`          |
| decodeBase64              | Decodes a Base64 encoded string back to its original form.                              | `stringUtility.decodeBase64('SGVsbG8gV29ybGQ=');`                                | `'Hello World'`       |
| encodeBase64              | Encodes a string to Base64 format.                                                      | `stringUtility.encodeBase64('Hello World');`                                     | `'SGVsbG8gV29ybGQ='`  |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
