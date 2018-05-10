'use strict';
/**
Non-repeating character
non_repeating('aabcb') => c
non_repeating('xxyz') => y
non_repeating('aabb') => null
O(n)
*/

const non_repeating = (str) => {

  const obj = {};
  let letter = null;

  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }

  let index = 0;
  let keysArr = Object.keys(obj);
  while (index < keysArr.length && obj[keysArr[index]] !== 1) {
    index++;
  }

  if (index !== keysArr.length) {
    letter = keysArr[index];
  }

  return letter;
}


module.exports = non_repeating
