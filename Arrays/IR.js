'use strict';
/**
  Is one array a rotation of another?
  A = [1, 2, 3, 4, 5, 6, 7]
  B = [4, 5, 6, 7, 1, 2, 3]
  *no duplicates
  return true
  O(n)
*/

const is_rotation = (A, B) => {

  if (A.length === B.length) {
    let p1 = 0;

    while (A[0] !== B[p1] && p1 < B.length) {
      p1++;
    }

    if (p1 === B.length) {
      return false;
    }

    for (let i = 0; i < A.length; i++) {
      if (A[i] !== B[(p1 + i) % A.length]) {
        return false;
      }
    }

    return true;
  }

  return false;
}

module.exports = is_rotation;
