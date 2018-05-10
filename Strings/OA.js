'use strict';
/**
  One away Strings

  // replace one character
  sla = "abcde"
  slb = "abfde"
  return => true

  // remove one character
  s2a = "abcde"
  s2b = "abde"
  return => true

  // add one character
  s3a = "xyz"
  s3b = "xyaz"
  return => true

  O(n)

*/

const one_way_replace = (str1, str2) => {

  let counter = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      counter++;
    }

    if (counter > 1) {
      return false;
    }
  }

  if (counter > 1) {
    return false;
  }
  return true;
}

const one_way_remove = (str1, str2) => {

  let p1 = 0;
  let p2 = 0;
  let counter = 0;

  while (p1 < str1.length && p2 < str2.length) {
    if (str1[p1] !== str2[p2]) {
      p1++;
      counter++;
    } else {
      p1++;
      p2++;
    }

    if (counter > 1) {
      return false;
    }

  }

  return true;
}

const one_away = (str1, str2) => {

  if (str1.length === str2.length) {
    return one_way_replace(str1, str2);
  } else if (str1.length - str2.length === 1) {
    return one_way_remove(str1, str2);
  } else if (str1.length - str2.length === -1) {
    return one_way_remove(str2, str1);
  }

  return false;
}

module.exports = one_away
