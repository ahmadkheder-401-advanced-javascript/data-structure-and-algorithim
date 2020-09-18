'use strict';

const Node = require('./ll-zip').Node;
const LinkedList = require('./ll-zip').LinkedList;

function validate(head){
    let fast = head;
    let slow = head;

    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    fast = head;
    slow = reverse(slow);

    while(slow.value !== null){
        if(slow.value !== fast.value){
            return false;
        }
        return true;
    }
    let reverse = function(head){
        let prevNode =null;

        while(head !== null){
            let nextNode = head.next;
            head.next = prevNode;
            prevNode = head;
            head = nextNode;
        }
        return prevNode;
    }
}