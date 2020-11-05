'use-strict';

const tree_intersection = (tree1, tree2) => {
  let BT1 = tree1.preOrder();
  let BT2 = tree2.preOrder();
  let arr = [];
  let index = 0;

  while(index < BT1.length) {
    for(let i = 0; i < BT2.length; i++) {
      if (BT1[index] === BT2[i]) {
        arr.push(BT2[i]);
      }
    }
    index++;
  }

  return arr;
};

module.exports = tree_intersection;
