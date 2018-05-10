'use strict';

/**
  points = [(-2, 4), (0, -2), (-1, 0), (2, 5), (-2, -3), (3, 2)]
  k closest points to the origin
  the answer will be [(-1, 0), (0, -2)]

  Max Heap O(k+(n-k)logk)
*/

const getMax = (arr) => {
  return arr.reduce((prev, cur, index) => { return Math.ceil(prev.max) > Math.ceil(cur.max) ? prev : cur }, arr[0])
}

const getDistanceArr = (arr) => {
  return arr.map((points, index) => { return { max: Math.sqrt(Math.pow(points[0], 2) + Math.pow(points[1], 2)), index: index  } });
}

const k_smallest_points = (points, k) => {

  let points_with_d = [];
  let points_to_return = [];

  for (let i = 0; i < points.length; i++) {
    let distance = Math.sqrt(Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2));
    points_with_d.push(distance);
    if (i < k) {
      points_to_return.push(points[i]);
    }
  }

  for (let j = k ; j < points_with_d.length; j++) {
    let countedValue = getMax(getDistanceArr(points_to_return));
    if (points_with_d[j] < countedValue.max) {
      points_to_return[countedValue.index] = points[j];
    }
  }

  return points_to_return;

};

console.log(k_smallest_points([[-2, 0], [-1, 0], [2, 5], [-2, -3], [3, 2], [0, -2], [1, 1], [0, 0]], 2));

module.exports = k_smallest_points;
