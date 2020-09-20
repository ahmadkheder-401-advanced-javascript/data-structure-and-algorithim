'use strict';

const Stack = require("./stack");

class PseudoQueue {
    constructor() {
      this.storage1 = new Stack();
      this.storage2 = new Stack();
    }
  /**
   * 
   * @param {*} value 
   */
    enqueue(value) {
      if (!value) {
        throw new RangeError("Invalid argument!");
      }
      this.storage1.push(value);
    }
  
    dequeue() {
      let curr = this.storage1.top;
      while (curr) {
        this.storage2.push(curr.value);
        curr = curr.next;
      }
      this.storage2.pop();
      this.storage1 = new Stack();
      curr = this.storage2.top;
      while (curr) {
        this.storage1.push(curr.value);
        curr = curr.next;
      }
      this.storage2 = new Stack();
    }
  }
  
  module.exports = PseudoQueue;