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
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {

      let curruntNode = this.head;
      while (curruntNode.next) {
        curruntNode = curruntNode.next;
      }
      curruntNode.next = newNode;
    }
  }

  includes(value) {
    let curentNode = this.head;
    while (curentNode) {
      if (curentNode.value == value) {
        return 1;
      }
      curentNode = curentNode.next;
    }
    return 0;
  }

}

class HashTable {
  constructor(size) {
    this.size = size;
    this.entries = new Array(size);
  }
  hash(key) {
    let charArr = key.split('');
    return charArr.reduce((accumilate, value) => {
      return accumilate + value.charCodeAt(0);

    }, 0) * 599 % this.size;
  }
  add(key, value) {
    let hashIndex = this.hash(key);

    if (!this.entries[hashIndex]) {
      this.entries[hashIndex] = new LinkedList();
    }
    let entry = { [key]: value };
    this.entries[hashIndex].append(entry);
  }
  get(key) {
    const index = this.hash(key);
    return this.entries[index] ? this.entries[index] : null;
  }
  contains(key) {
    const hashIndex = this.hash(key);
    return this.entries[hashIndex] ? 1 : 0;
  }

}

module.exports = {LinkedList, Node, HashTable};
