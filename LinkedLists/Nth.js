'use strict'


const nth_from_end = (list, n) => {

  let list_1 = list;
  let list_2 = list;

  for (let i = 0; i < n; i++) {

    if (list_1 === null) {
      return null;
    }

    list_1 = list_1.next;
  }

  while (list_1 !== null) {
    list_1 = list_1.next;
    list_2 = list_2.next;
  }

  return list_2.value;

}

const list = {
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

module.exports = nth_from_end
