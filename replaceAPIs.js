function replaceAllOccurrences(str, search, replace) {
  return str.split(search).join(replace);
}

function replaceSpecificOccurence(str, search, replace, index) {
  let splittedStr = str.split(search);
  return splittedStr.reduce((modifiedStr, element, eleIndex, array) => {
    if (index === eleIndex) {
      return modifiedStr + replace + element;
    }
    return modifiedStr + search + element;
  });
}

function replaceFirstOccurence(str, search, replace) {
  return replaceSpecificOccurence(str, search, replace, 0);
}

function replaceLastOccurence(str, search, replace) {
  return replaceSpecificOccurence(str, search, replace, -1);
}

module.export = {
  replaceAllOccurrences,
  replaceSpecificOccurence,
  replaceFirstOccurence,
  replaceLastOccurence,
};
