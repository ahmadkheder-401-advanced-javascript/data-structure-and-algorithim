'use strict';

function fizzBuzzTree(tree) {

  let _traverse = (node) => {

    let nodeVal = node.value;

    if (nodeVal % 3 === 0) {
      node.value = 'fizz';
      if (nodeVal % 5 === 0) {
        node.value = 'fizzbuzz';
      }
    }

    if (nodeVal % 5 === 0) {
      node.value = 'buzz';
      if (nodeVal % 3 === 0) {
        node.value = 'fizzbuzz';
      }
    }

    if (node.left) _traverse(node.left);
    if (node.right) _traverse(node.right);
  };

  _traverse(tree.root);

  return tree;

}
module.exports = fizzBuzzTree;
