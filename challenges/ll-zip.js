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
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }


}
function zipLists(list1, list2){
  let list3 = new LinkedList();
  let cur1 = list1.head;
  let cur2 = list2.head;

  let largest = length(list1) >= length(list2) ? length(list1):length(list2);
  while(largest != 0){
    if(cur1){
      list3.append(cur1.value);
      cur1 = cur1.next;
    }
    if(cur2){
      list3.append(cur2.value);
      cur2 = cur2.next;

    }
    largest--;
  }
  return list3;

}

function length(list){
  let current = list.head;
  let length = 0;

  while(current){
    length++;
    current=current.next;
  }
  return length;
}

let ll1 = new LinkedList();
ll1.append(1);
ll1.append(3);
ll1.append(2);

let ll2 = new LinkedList();
ll2.append(5);
ll2.append(9);
ll2.append(4);
console.log('>>>>',zipLists(ll1, ll2).head.next.next);

module.exports = {LinkedList,Node};
