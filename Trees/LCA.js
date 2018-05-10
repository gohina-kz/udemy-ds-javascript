'use strict';

/**
  Lowest Common Ancestor
*/

const lca = (head, num1, num2) => {

  let path_to_num1 = path_to_x(head, num1);
  let path_to_num2 = path_to_x(head, num2);

  if (path_to_num1 === null || path_to_num2 === null) {
    return null;
  }

  let ancestor = null;

  while (path_to_num1.length !== 0 && path_to_num2.length !== 0) {

    let num1_pop = path_to_num1.pop();
    let num2_pop = path_to_num2.pop();

    if (num1_pop === num2_pop) {
      ancestor =  num1_pop.value;
    }
  }

  return ancestor;
}

const path_to_x = (head, num) => {
  if (head === null) return null;

  if (head.value === num) {
    let path = [];
    path.push(head);
    return path;
  }

  let leftPath = path_to_x(head.left, num);

  if (leftPath !== null) {
    leftPath.push(head);
    return leftPath;
  }

  let rightPath = path_to_x(head.right, num);

  if (rightPath !== null) {
    rightPath.push(head);
    return rightPath;
  }

  return null;

}


module.exports = lca
