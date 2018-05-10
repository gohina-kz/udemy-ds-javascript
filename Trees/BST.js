'use strict';

/**
  Is this a Binary Search Tree
  value is equal or greater than any value in left subtree
  and less than or equal to any value in right subtree
*/

const isBST = (head) => {
   return isBST_(head, null, null);
}

const isBST_ = (head, lower_lim, upper_lim) => {
  if (lower_lim !== null && head.value < lower_lim) return false;
  if (upper_lim !== null && head.value > upper_lim) return false;

  let isLeftBST = true;
  let isRightBST = true;

  if (head.left !== null) {
      isLeftBST = isBST_(head.left, lower_lim, head.value);
  }

  if (isLeftBST && head.right != null) {
      isRightBST = isBST_(head.right, head.value, upper_lim);
  }

  return isLeftBST && isRightBST;
}

module.exports = isBST;
