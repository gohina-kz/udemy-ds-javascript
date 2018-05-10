'use strict';
/**
  Common elements in two sorted arrays
  A = [1, 3, 4, 6, 7, 9]
  B = [1, 2, 4, 5, 9, 10]
  return => [1, 4, 9]
  O(max(n, m))
*/

const common_elements = (A, B) => {

  let res = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < A.length && p2 < B.length) {
    if (A[p1] === B[p2]) {
      res.push(A[p1]);
      p1++;
      p2++;
    } else if(A[p1] > B[p2]) {
      p2++;
    } else {
      p1++;
    }
  }

  return res;
};

module.exports = common_elements;
