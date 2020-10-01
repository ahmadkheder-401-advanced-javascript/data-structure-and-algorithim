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
    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = node;
    return this;

  }

  kth_from_end(k){
    let current = this.head;
    let length = 0;

    while(current){
      length++;
      current=current.next;
    }
    let index = 1;
    current=this.head;
    while(current && index !== length-k){
      index++;
      current=current.next;
    }
    return current? current: 'exception';
  }

}
