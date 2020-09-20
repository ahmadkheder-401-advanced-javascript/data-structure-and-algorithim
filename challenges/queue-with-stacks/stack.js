'use strict';

const Node = require('./node.js');
const CustomError = require('./customError.js');

class Stack {
  constructor() {
    this.top = null;
    this.len = 0;
  }
/**
 * 
 * @param {*} value 
 */
  push(value) {
    if (!value) {
      throw new CustomError('Invalid argument!');
    }
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.len++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new CustomError('Stack is empty');
    }
    let item = this.top;
    this.top = this.top.next;
    this.len--;
    return item.value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new CustomError('Stack is empty');
    }
    return this.top.value;
  }

  isEmpty() {
    return this.len === 0 ;
  }
}

module.exports = Stack;