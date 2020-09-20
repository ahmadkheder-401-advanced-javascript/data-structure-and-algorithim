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
    pop(){
        if (this.isEmpty) {
            // throw new RangeError('The Stack is Empty');
            // return console.log("The Stack is Empty");
            throw 'The Stack is Empty';
        } 
            let popped = this.top;
            this.top = this.top.next;
            popped.next = null;
            return popped.value;
        
            

    }
    peek() {
        if (this.isEmpty()) {
            // throw new RangeError('The Stack is Empty');
            return console.log("The Stack is Empty");
        } else {
            return this.top.value;
        }
    }
    isEmpty() {
        return this.top.value == null ? 1 : 0;
    }

}

class Queue extends Node {
    constructor() {
        super();
        this.front = this.value;
        this.rear;

    }
    enqueue(value) {
        let newNode = new Node(value);
        this.rear.next = newNode;
        this.rear = newNode;
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new RangeError('The queue is empty');
            // return console.log("The queue is empty;")
        } else {
            let dequeued = this.front;
            this.front = this.front.next;
            dequeued.next = null;
            return dequeued.value;
        }
    }
    peek(){
        if (this.isEmpty()) {
            throw new RangeError('The queue is empty');
            // return console.log("The queue is empty")
        } else {
           return this.front.value;
        }
    }
    isEmpty(){
        return this.front.value == null ? 1 : 0;
    }

}
module.exports = {
    Stack,Queue
}