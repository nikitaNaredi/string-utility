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

## API

### parseString(input)

Parses the input string and returns the result.

```sh
const result = stringUtility.parseString('Hello, World!');
console.log(result);
```

### otherFunction(params)

Description of another function in the package.

```sh
const output = stringUtility.otherFunction(params);
console.log(output);
```

## API Reference

| Function                  | Description                                                                             | Example                                                                        | Output                |
| ------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | --------------------- |
| toUpperSnakeCase          | Converts the input string to upper snake case.                                          | `stringUtility.toUpperSnakeCase('helloWorld');`                                | `'HELLO_WORLD'`       |
| toReverseCase             | Reverses the case of each character in the input string.                                | `stringUtility.toReverseCase('Hello World');`                                  | `'hELLO wORLD'`       |
| toAlternatingCase         | Converts the input string to alternating case.                                          | `stringUtility.toAlternatingCase('hello world');`                              | `'HeLlO wOrLd'`       |
| toCamelCase               | Converts the input string to camel case.                                                | `stringUtility.toCamelCase('hello world');`                                    | `'helloWorld'`        |
| toPascalCase              | Converts the input string to pascal case.                                               | `stringUtility.toPascalCase('hello world');`                                   | `'HelloWorld'`        |
| toKebabCase               | Converts the input string to kebab case.                                                | `stringUtility.toKebabCase('hello world');`                                    | `'hello-world'`       |
| toSnakeCase               | Converts the input string to snake case.                                                | `stringUtility.toSnakeCase('hello world');`                                    | `'hello_world'`       |
| toCapitalizedCase         | Capitalizes the first letter of each word in the input string.                          | `stringUtility.toCapitalizedCase('hello world');`                              | `'Hello World'`       |
| toSentenceCase            | Converts the input string to sentence case.                                             | `stringUtility.toSentenceCase('hello world');`                                 | `'Hello world'`       |
| toTitleCase               | Converts the input string to title case.                                                | `stringUtility.toTitleCase('hello world');`                                    | `'Hello World'`       |
| removeNonAlpha            | Removes all non-alphabetic characters from the input string.                            | `stringUtility.removeNonAlpha('Hello, World! 123');`                           | `'HelloWorld'`        |
| containsOnlyAlpha         | Checks if the input string contains only alphabetic characters.                         | `stringUtility.containsOnlyAlpha('Hello');`                                    | `true`                |
| removeDuplicates          | Removes duplicate characters from the input string.                                     | `stringUtility.removeDuplicates('Hello');`                                     | `'Helo'`              |
| findSubstringOccurrences  | Counts the number of occurrences of a substring within the input string.                | `stringUtility.findSubstringOccurrences('Hello, World! 123', 'el');`           | `1`                   |
| replaceSpecificOccurrence | Replaces the nth occurrence of a substring with a new substring in the input string.    | `stringUtility.replaceSpecificOccurrence('Hello, World! 123', 'l', 'i', '1');` | `'Helio, World! 123'` |
| replaceAllOccurrences     | Replaces all occurrences of a substring with a new substring in the input string.       | `stringUtility.replaceAllOccurrences('Hello, World! 123', 'l', 'i');`          | `'Heiio, Worid! 123'` |
| caseString                | Converts the input string to the specified case type (e.g., 'upper', 'lower', 'title'). | `stringUtility.caseString('Hello, World!', 'alternate');`                      | `'hELLo, wORLD'`      |
|                           |

## Examples

Here are some examples of how to use the string-utility package:

```sh
const stringUtility = require('@nikita-naredi/string-utility');

// Example 1
const parsed = stringUtility.parseString('Example string');
console.log(parsed);

// Example 2
const result = stringUtility.otherFunction('param1', 'param2');
console.log(result);
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
