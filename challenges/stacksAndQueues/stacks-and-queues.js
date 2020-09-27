/* eslint-disable eqeqeq */
'use strict';
let Node = require('./nodeClass');

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

class Queue extends Node {
  constructor() {
    super();
    this.front = this.value;
    this.rear;

  }
  enqueue(value) {
    if (this.isEmpty()) {
      this.front = new Node(value);
      this.rear = this.front;
    } else {
      this.rear.next = new Node(value);
      this.rear = this.rear.next;
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('The queue is empty');
    } else {
      let dequeued = this.front;
      this.front = this.front.next;
      dequeued.next = null;
      return dequeued.value;
    }
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error('The queue is empty');
      // return console.log("The queue is empty")
    } else {
      return this.front.value;
    }
  }
  isEmpty() {
    return this.front == null ? 1 : 0;
  }

}
module.exports = {
  Stack, Queue,
};
