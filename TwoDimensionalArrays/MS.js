'use strict';
/**
Minesweeper
создать поле с минами
boms, num_rows, num_cols
*/

const mine_sweeper = (bombs, num_rows, num_cols) => {
  let mineSweeper = new Array(num_rows);

  for (let i = 0; i < num_rows; i++) {
    mineSweeper[i] = new Array(num_cols);
  };

  for (let j = 0; j < bombs.length; j++) {
    let row = bombs[j][0];
    let col = bombs[j][1];

    mineSweeper[row][col] = -1;

    for (let a = row - 1; a <= row + 1; a++) {
      for (let b = col - 1; b <= col + 1; b++) {
        if (a >= 0 && a < num_rows && b >= 0 && b < num_cols) {
          if (mineSweeper[a][b] !== -1) {
            if (mineSweeper[a][b]) {
              mineSweeper[a][b] += 1;
            } else {
              mineSweeper[a][b] = 1;
            }
          }
        }
      }
    }
  };

  for (let i = 0; i < num_rows; i++) {
    for (let j = 0; j < num_cols; j++) {
      if (!mineSweeper[i][j]) {
        mineSweeper[i][j] = 0;
      }
    }
  }

  return mineSweeper;

}

module.exports = mine_sweeper
