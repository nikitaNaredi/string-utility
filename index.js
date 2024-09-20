// Handle different casing
export function toUpperSnakeCase(str) {
  return str.toUpperCase().replace(/\s+/g, "_");
}

// const text = "Hello World";
// const upperSnakeCaseText = toUpperSnakeCase(text);
// console.log(upperSnakeCaseText);  // Output: "HELLO_WORLD"

export function toReverseCase(str) {
  return str
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}

// const text = "Hello World";
// const reverseCaseText = toReverseCase(text);
// console.log(reverseCaseText);  // Output: "hELLO wORLD"

export function toAlternatingCase(str) {
  return str
    .split("")
    .map((char, index) =>
      index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");
}

// const text = "hello world";
// const alternatingCaseText = toAlternatingCase(text);
// console.log(alternatingCaseText);  // Output: "HeLlO wOrLd"

export function toCamelCase(str) {
  const [firstWord, ...otherWords] = str.split(" ");
  return [
    firstWord.toLowerCase(),
    ...otherWords.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ),
  ].join("");
}

// const text = "hello world";
// const camelCaseText = toCamelCase(text);
// console.log(camelCaseText);  // Output: "helloWorld"

export function toPascalCase(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

// const text = "hello world";
// const pascalCaseText = toPascalCase(text);
// console.log(pascalCaseText);  // Output: "HelloWorld"

export function toKebabCase(str) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

// const text = "Hello World";
// const kebabCaseText = toKebabCase(text);
// console.log(kebabCaseText);  // Output: "hello-world"

export function toSnakeCase(str) {
  return str.toLowerCase().replace(/\s+/g, "_");
}

// const text = "Hello World";
// const snakeCaseText = toSnakeCase(text);
// console.log(snakeCaseText);  // Output: "hello_world"

export function toCapitalizedCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) =>
      word.length > 0 ? word[0].toUpperCase() + word.slice(1) : ""
    )
    .join(" ");
}

// const text = "hello world";
// const capitalizedCaseText = toCapitalizedCase(text);
// console.log(capitalizedCaseText);  // Output: "Hello World"

export function toSentenceCase(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// const sentenceCaseText = toSentenceCase(text);
// console.log(sentenceCaseText); // Output: "Hello world"

export function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// const text = "hello world";
// const titleCaseText = toTitleCase(text);
// console.log(titleCaseText);  // Output: "Hello World"

// Remove non alpha character from String
export function removeNonAlpha(str) {
  return str.replace(/[^a-zA-Z]/g, "");
}

export function containsOnlyAlpha(str) {
  return /^[a-zA-Z]+$/.test(str);
}

/**
 *
 * @param {*} str
 * @param {*} caseType
 * @param {*} joinBy
 * @returns
 */
export function caseString(str, caseType = null, joinBy = null) {
  const caseHandlers = {
    upper: () => modifiedStr.toUpperCase(),
    lower: () => modifiedStr.toLowerCase(),
    sentence: () => modifiedStr.toSentenceCase(),
    capitalized: () => modifiedStr.toCapitalizedCase(),
    reverse: () => modifiedStr.toReverseCase(),
    alternate: () => modifiedStr.toAlternatingCase(),
    camel: () => {
      const [firstWord, ...otherWords] = modifiedStr;
      return [
        firstWord.toLowerCase(),
        ...otherWords.map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ),
      ];
    },
  };

  let handler = null;
  if (caseType) {
    handler = caseHandlers[caseType];
    if (!handler) {
      return str; // Return original string if caseType is not recognized
    }
  }

  const modifiedStr = handler();
  return joinBy ? modifiedStr.join(joinBy) : modifiedStr;
}

export function replaceAllOccurrences(str, search, replace) {
  return str.split(search).join(replace);
}

export function replaceSpecificOccurence(str, search, replace, index) {
  let splittedStr = str.split(search);
  return splittedStr.reduce((modifiedStr, element, eleIndex, array) => {
    if (index === eleIndex) {
      return modifiedStr + replace + element;
    }
    return modifiedStr + search + element;
  });
}

export function findSubstringOccurrences(str, substr) {
  let count = 0;
  let index = str.indexOf(substr);
  while (index !== -1) {
    count++;
    index = str.indexOf(substr, index + 1);
  }
  return count;
}

export function removeSubstring(str, substr) {
  return str.split(substr).join("");
}

export function removeDuplicates(str) {
  return Array.from(new Set(str)).join("");
}

// Mine:
// generate random string of specified length
// charAtFromEnd
// Extract Substring Between Two Characters
// is Palindrome
// Get Substring Before or After Character
