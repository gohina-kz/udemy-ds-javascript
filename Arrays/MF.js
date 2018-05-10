'use strict';
/**
  Most Frequently Occuring Item in an Array
  most_frequent(given_array)
  time complexity: O(n)
  [1, 3, 1, 3, 2, 1] -> return 1
*/

const most_frequent = (arr) => {

  let table = [];
  let id = null;
  let max = -1;

  arr.forEach(item => {
    if (!table[item]) {

      table[item] = 1;

    } else {

      table[item]++;

    }

    if (table[item] > max) {
      id = item;
      max = table[item];
    }
  })

  return id;
}

module.exports = most_frequent;
