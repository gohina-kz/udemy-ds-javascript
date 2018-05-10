'use strict'

// chai - is an assertion library

const assert = require('chai').assert;

const most_frequent = require('./Arrays/MF')
const common_elements = require('./Arrays/CE')
const is_rotation = require('./Arrays/IR')

const non_repeating = require('./Strings/NR')
const one_away = require('./Strings/OA')

const mine_sweeper = require('./TwoDimensionalArrays/MS')
const click = require('./TwoDimensionalArrays/MS2')
const rotate = require('./TwoDimensionalArrays/R2')
const rotate_inplace = require('./TwoDimensionalArrays/R2_inplace')

const nth_from_end = require('./LinkedLists/Nth')

const isBST = require('./Trees/BST')
const lca = require('./Trees/LCA')

describe('Array', () => {
  describe('most_frequent', () => {

    it('should return Most Frequently Occuring Item in an Array', () => {
      assert.equal(most_frequent([1, 3, 1, 3, 2, 1]), 1)
      assert.equal(most_frequent([3, 3, 1, 3, 2, 1]), 3)
      assert.equal(most_frequent([0, -1, 10, 10, -1, 10, -1, -1, -1, 1]), -1)
    })

    it('should return type of number', () => {
      assert.typeOf(most_frequent([1, 3, 1, 3, 2, 1]), 'number')
    })

    it('should be above 2', () => {
      assert.isAbove(most_frequent([3, 3, 1, 3, 2, 1]), 2)
    })

    it("if the array is emptly should return null", () => {
      assert.equal(most_frequent([]), null);
    })

    it("if ther is only one item in an array should return it", () => {
      assert.equal(most_frequent([0]), 0);
    })

    it("no item that repeats more than once return the first occuring one", () => {
      assert.equal(most_frequent([0, 1, 2, 3, 4, 5]), 0);
    })

  })

  describe('common_elements', () => {
    it('should return array of common elements in two sorted arrays', () => {
      assert.deepEqual(common_elements([1, 3, 4, 6, 7, 9], [1, 2, 4, 5, 9, 10]), [1, 4, 9])
      assert.deepEqual(common_elements([1, 2, 9, 10, 11, 12], [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 14, 15]), [1, 2, 9, 10, 12])
      assert.deepEqual(common_elements([0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]), [])
    })
  })

  describe('is_rotation', () => {
    it('should return whether one array a rotation of another', () => {
      assert.equal(is_rotation([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7, 1, 2, 3]), true)
      assert.equal(is_rotation([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7, 8, 1, 2, 3]), false)
      assert.equal(is_rotation([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 9, 1, 2, 3]), false)
      assert.equal(is_rotation([1, 2, 3, 4, 5, 6, 7], [4, 6, 5, 7, 1, 2, 3]), false)
      assert.equal(is_rotation([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7, 0, 2, 3]), false)
      assert.equal(is_rotation([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7]), true)
      assert.equal(is_rotation([1, 2, 3, 4, 5, 6, 7], [3, 4, 5, 6, 7, 1, 2]), true)
    })
  })

})


describe('Strings', () => {
  describe('non_repeating character', () => {
    it('should return non repeating character', () => {
      assert.equal(non_repeating('aabcb'), 'c');
      assert.equal(non_repeating('xxyz'), 'y');
      assert.equal(non_repeating('aabb'), null);
      assert.equal(non_repeating('abcab'), 'c');
      assert.equal(non_repeating('abab'), null);
      assert.equal(non_repeating('aabbbc'), 'c');
      assert.equal(non_repeating('aabbdbc'), 'd');
    })
  })

  describe('one away string', () => {
    it('should return whether two strings are one away or not', () => {
      assert.equal(one_away('abcde', 'abfde'), true);
      assert.equal(one_away('abcde', 'abde'), true);
      assert.equal(one_away('xyz', 'xyaz'), true);

      assert.equal(one_away('abcde', 'abcd'), true);
      assert.equal(one_away('abde', 'abcde'), true);
      assert.equal(one_away('a', 'a'), true);
      assert.equal(one_away('abcdef', 'abqdef'), true);
      assert.equal(one_away('abcdef', 'abccef'), true);
      assert.equal(one_away('abcdef', 'abcde'), true);
      assert.equal(one_away('aaa', 'abc'), false);
      assert.equal(one_away('abcde', 'abc'), false);
      assert.equal(one_away('abc', 'abcde'), false);
      assert.equal(one_away('abc', 'bcc'), false);
    })
  })

})


describe('TwoDimensionalArrays', () => {
  describe('Minesweeper field', () => {
    it('should return TwoDimensionalArrays with bombs and neighbor fields', () => {
      assert.deepEqual(mine_sweeper([[0, 2], [2, 0]], 3, 3), [[0, 1, -1], [1, 2, 1], [-1, 1, 0]])
      assert.deepEqual(mine_sweeper([[0, 0], [0, 1], [1, 2]], 3, 4), [[-1, -1, 2, 1], [2, 3, -1, 1], [0, 1, 1, 1]]);
      assert.deepEqual(mine_sweeper([[1, 1], [1, 2], [2, 2], [4, 3]], 5, 5), [[1, 2, 2, 1, 0], [1, -1, -1, 2, 0], [1, 3, -1, 2, 0], [0, 1, 2, 2, 1],[0, 0, 1, -1, 1]]);
    })
  })

  describe('Minesweeper click', () => {
    it('should return opened field', () => {
      assert.deepEqual(click([[0, 0, 0, 0, 0], [0, 1, 1, 1, 0],[0, 1, -1, 1, 0]], 3, 5, 1, 2), [[0, 0, 0, 0, 0], [0, 1, 1, 1, 0],[0, 1, -1, 1, 0]])
      assert.deepEqual(click([[0, 0, 0, 0, 0], [0, 1, 1, 1, 0],[0, 1, -1, 1, 0]], 3, 5, 1, 4), [[-2, -2, -2, -2, -2], [-2, 1, 1, 1, -2], [-2, 1, -1, 1, -2]])
      assert.deepEqual(click([[-1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, -1]], 4, 4, 0, 1), [[-1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, -1]])
      assert.deepEqual(click([[-1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, -1]], 4, 4, 1, 3), [[-1, 1, -2, -2], [1, 1, -2, -2], [-2, -2, 1, 1], [-2, -2, 1, -1]])
    })
  })

  describe('Rotate', () => {
    it('should return 90 degrees rotation', () => {
      assert.deepEqual(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3), [[7, 4, 1], [8, 5, 2], [9, 6, 3]])
      assert.deepEqual(rotate([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 4), [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]])
    })
    it('should return 90 degrees rotation', () => {
      assert.deepEqual(rotate_inplace([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3), [[7, 4, 1], [8, 5, 2], [9, 6, 3]])
      assert.deepEqual(rotate_inplace([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 4), [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]])
    })
  })
})

const head = {
  value: 7,
  next: {
    value: 6,
    next: {
      value: 5,
      next: {
        value: 4,
        next: {
          value: 3,
          next: {
            value: 2,
            next: {
              value: 1,
              next: null
            }
          }
        }
      }
    }
  }
}

const head2 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

describe('NthFromLast', () => {
  it('should return nth Node counting from last element', () => {
    assert.equal(nth_from_end(head, 1), 1)
    assert.equal(nth_from_end(head, 5), 5)
    assert.equal(nth_from_end(head2, 2), 3)
    assert.equal(nth_from_end(head2, 4), 1)
    assert.equal(nth_from_end(head2, 5), null)
    assert.equal(nth_from_end(null, 1), null)
  })
})

const node1 = {
  value: 0,
  left: {
    value: 1,
    left: {
      value: 3,
      left: null,
      right: null
    },
    right: {
      value: 4,
      left: null,
      right: null
    }
  },
  right: {
    value: 2,
    left: {
      value: 5,
      left: null,
      right: null
    },
    right: {
      value: 6,
      left: null,
      right: null
    }
  }
}

const node2 = {
  value: 3,
  left: {
    value: 1,
    left: {
      value: 0,
      left: null,
      right: null
    },
    right: {
      value: 2,
      left: null,
      right: null
    }
  },
  right: {
    value: 4,
    left: {
      value: 5,
      left: null,
      right: null
    },
    right: {
      value: 6,
      left: null,
      right: null
    }
  }
}

const node3 = {
  value: 3,
  left: {
    value: 1,
    left: {
      value: 0,
      left: null,
      right: null
    },
    right: {
      value: 2,
      left: null,
      right: null
    }
  },
  right: {
    value: 5,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: {
      value: 6,
      left: null,
      right: null
    }
  }
}

const node4 = {
  value: 3,
  left: {
    value: 1,
    left: {
      value: 0,
      left: null,
      right: null
    },
    right: {
      value: 4,
      left: null,
      right: null
    }
  },
  right: {
    value: 5,
    left: null,
    right: null
  }
}

describe('is this a Binary Search Tree', () => {
  it('isBST', () => {
    assert.equal(isBST(node1), false)
    assert.equal(isBST(node2), false)
    assert.equal(isBST(node3), true)
    assert.equal(isBST(node4), false)
  })
})

const node5 = {
  value: 5,
  left: {
    value: 1,
    left: {
      value: 3,
      left: {
        value: 6,
        left: null,
        right: null
      },
      right: {
        value: 7,
        left: null,
        right: null
      }
    },
    right: {
      value: 8,
      left: null,
      right: null
    }
  },
  right: {
    value: 4,
    left: {
      value: 9,
      left: null,
      right: null
    },
    right: {
      value: 2,
      left: null,
      right: null
    }
  }
}

describe('lower common ancestor', () => {
  it('lca', () => {
    assert.equal(lca(node1, 1, 5), 0)
    assert.equal(lca(node1, 3, 1), 1)
    assert.equal(lca(node1, 1, 4), 1)
    assert.equal(lca(node1, 0, 5), 0)
    assert.equal(lca(node5, 4, 7), 5)
    assert.equal(lca(node5, 3, 3), 3)
    assert.equal(lca(node5, 8, 7), 1)
    assert.equal(lca(node5, 3, 0), null)
  })
})
