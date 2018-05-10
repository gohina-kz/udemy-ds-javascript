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

  for (let i = 0; i < Math.floor(n/2); i++) {
    for (let j = 0; j < Math.ceil(n/2); j++) {
      let temp = [];
      let cur_i = i;
      let cur_j = j;

      for (let k = 0; k < 4; k++) {
        temp[k] = field[cur_i][cur_j];
        let temp_i = cur_i;
        cur_i = cur_j;
        cur_j = n - 1 - temp_i;
      }

      for (let k = 0; k < 4; k++) {
        field[cur_i][cur_j] = temp[(k + 3) % 4];
        let temp_i = cur_i;
        cur_i = cur_j;
        cur_j = n - 1 - temp_i;
      }

    }
  }

  return field;
}

module.exports = rotate;
