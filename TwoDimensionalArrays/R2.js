'use strict';

/**
  Rotate
  [[1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]]

  ====>
  [[7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]]

*/

const rotate = (field, n) => {
  let new_field = new Array(n);

  for (let i = 0; i < n; i++) {
    new_field[i] = new Array(n);
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      new_field[j][n - 1 - i] = field[i][j];
    }
  }

  return new_field;
}

module.exports = rotate;
