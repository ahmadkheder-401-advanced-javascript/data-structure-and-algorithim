// 'use strict';


const Queue = require('./queue');

class Node {
  constructor(value, left = null, rigth = null) {
    this.value = value;
    this.left = left;
    this.rigth = rigth;
  }
}
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    if (!this.root) {
      throw new Error('Empty Tree');
    }
    let result = [];
    let _traverse = (node) => {
      result.push(node.value);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };

    _traverse(this.root);
    return result;
  }


  inOrder() {
    if (!this.root) {
      throw new Error('Empty Tree');
    }
    let result = [];
    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      result.push(node.value);
      if (node.right) _traverse(node.right);
    };

    _traverse(this.root);
    return result;
  }

 
  postOrder() {
    if (!this.root) {
      throw new Error('Empty Tree');
    }
    let result = [];
    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      result.push(node.value);
    };
    _traverse(this.root);
    return result;
  }

  find_maximum_value(){
    let ordered =  this.inOrder();
    return ordered[ordered.length-1];
  }
  BreadthFirst() {
    if (!this.root) {
      return false;
    }
    const queue = new Queue();
    const treeValues = [];
    queue.enqueue(this.root);
    queue.enqueue(queue.front.value.left);


    while (queue.size < 14) {
      console.log('queue.size --->', queue.size);
      const left = queue.front.value.left;
      const right = queue.front.value.right;

      if (left) {
        queue.enqueue(left);
        treeValues.push(left.value);
      }
      if (right) {
        queue.enqueue(right);
        treeValues.push(right.value);
      }

      queue.dequeue();
    }
    return treeValues;
  }
}

module.exports = BinaryTree;