function firstDuplicate(inArray) {
  if (!inArray || inArray.length === 0) {
    return -1;
  }

  let selectedIndex = inArray.length;
  let selectedValue = null;

  for (let currentIndex = 0; currentIndex < inArray.length; currentIndex++) {
    let currentValue = inArray[currentIndex];

    for (let loopIndex = currentIndex + 1; loopIndex < inArray.length; loopIndex++) {
      if (loopIndex < selectedIndex && inArray[loopIndex] === currentValue) {
        selectedIndex = loopIndex;
        selectedValue = currentValue;
      }
    }
  }

  return selectedValue || -1;
}

module.exports = firstDuplicate;
