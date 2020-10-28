'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next;
  }
}

class Stack extends Node {
  constructor() {
    super();
    this.top = this.value;

  }
  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    return value;
  }

  pop() {
    if (this.top === null) throw new Error('The Stack is Empty');

    let take = this.top;
    this.top = this.top.next;
    return take.value;
  }
  peek() {
    if (this.isEmpty()) {

      throw new Error('The Stack is Empty');

    } else {
      return this.top.value;
    }
  }
  isEmpty() {
    return this.top === null ? 1 : 0;
  }

}

module.exports = (root) => {
  const stack = new Stack();
  const resultArr = [];
  const visited = new Set();
  resultArr.push(root);
  visited.add(root);
  stack.push(root);

  while(!stack.isEmpty()) {
    let current = stack.peek();
    let unvisited = false;
    for (let i = 0; i < current.getNeighbors().length; i ++) {
      let neighbor = current.getNeighbors()[i];
      if(!visited.has(neighbor)){
        unvisited = true;
        visited.add(neighbor);
        stack.push(neighbor);
        resultArr.push(neighbor);
        break;
      }
    }
    if (!unvisited) {
      stack.pop();
    }
  }
  return resultArr;
};
