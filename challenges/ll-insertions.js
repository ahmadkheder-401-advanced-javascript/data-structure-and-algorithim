/* eslint-disable no-unused-vars */

'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  append(value) {

    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

  }
}
