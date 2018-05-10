'use strict';

/**
Minesweeper
find where to expand in mineSweeper
*/

const click = (field, num_rows, num_cols, given_i, given_j) => {

if (field[given_i][given_j] === 0) {
    let checkValues = [];
    field[given_i][given_j] = -2;
    let points = [];
    points[0] = given_i;
    points[1] = given_j;
    checkValues.push(points)

    while (checkValues.length !== 0) {
      points = checkValues.shift();
      for (let i = points[0] - 1; i <= points[0] + 1; i++) {
        for (let j = points[1] - 1; j <= points[1] + 1; j++) {
          if (i >= 0 && i < num_rows && j >= 0 && j < num_cols) {
            if (field[i][j] == 0) {
              field[i][j] = -2;
              let pointsToCheck = [];
              pointsToCheck[0] = i;
              pointsToCheck[1] = j;
              checkValues.push(pointsToCheck);
            }
          }
        }
      }
    }
  }
  return field;
};

module.exports = click;
