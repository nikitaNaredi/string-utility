// Remove non alpha character from String
function removeNonAlpha(str) {
  return str.replace(/[^a-zA-Z]/g, "");
}

function removeSubstring(str, substr) {
  return str.split(substr).join("");
}

function removeDuplicates(str) {
  return Array.from(new Set(str)).join("");
}

module.exports = {
  removeNonAlpha,
  removeSubstring,
  removeDuplicates,
};
