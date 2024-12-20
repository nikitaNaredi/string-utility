// Generate slug from string
function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

// Test cases
console.log(slugify("Hello World"));
// Output: "hello-world"

console.log(slugify("This is a LONG title!"));
// Output: "this-is-a-long-title"

console.log(slugify("Hello@#$%^&* World!!!"));
// Output: "hello-world"

// Pad string to specified length
function padString(str, length, char = " ", position = "right") {
  if (position === "left") {
    return str.padStart(length, char);
  } else if (position === "right") {
    return str.padEnd(length, char);
  }
}

// Examples:
console.log(padString("hello", 10)); // "hello     "
console.log(padString("hello", 10, "-")); // "hello-----"
console.log(padString("hello", 8, "*")); // "hello***"

// Truncate string to specified length with ellipsis
function truncate(str, length) {
  return str.length > length ? str.substring(0, length) + "..." : str;
}

// Examples:
console.log(truncate("Hello World", 5)); // "Hello..."
console.log(truncate("Test", 10)); // "Test"
console.log(truncate("This is a very long string", 10)); // "This is a ..."

export default { slugify, padString, truncate };
