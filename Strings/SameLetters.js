'use strict';

/**
  var arr = ["abc", "bac", "baz", "abc", "d", "et", "d", "et", "zab"]

  одинаковый набор букв
  abb = bba = bab

  abc => 0, 1, 2
  d => 3, 5
  et => 4, 6
*/

const sameLetters = (arr) => {

  let res = {};

  for (let i = 0; i < arr.length; i++) {

    if (Object.keys(res).length === 0) {
      res[arr[i]] = [];
      res[arr[i]].push(i);
    } else {
      let not_equal = 0;

      Object.keys(res).forEach((item) => {
        if (item.length === arr[i].length) {
          let counter = 0;
          for (let j = 0; j < item.length; j++) {
            if (item.includes(arr[i][j])) {
              counter++;
            }
          }

          if (counter === item.length) {
            counter = 0;
            res[item].push(i);
          } else {
            not_equal++;
          }
        } else {
            not_equal++;
        }
      })

      if (not_equal === Object.keys(res).length) {
        not_equal = 0;
        res[arr[i]] = [];
        res[arr[i]].push(i);
      }
    }
  }

  return res;

}

console.log(sameLetters(["abc", "bac", "abc", "d", "et", "d", "et", "zzz"]));
console.log(sameLetters(["baz", "zab"]));
console.log(sameLetters(["abc", "bac", "abc", "d", "et", "d", "et", "zab", "baz"]));
module.exports = sameLetters;
