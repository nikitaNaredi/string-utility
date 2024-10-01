function findSubstringOccurrences(str, substr) {
  let count = 0;
  let index = str.indexOf(substr);
  while (index !== -1) {
    count++;
    index = str.indexOf(substr, index + 1);
  }
  return count;
}

module.exports = {
  findSubstringOccurrences,
};
