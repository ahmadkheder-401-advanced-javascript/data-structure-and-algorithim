'use strict';

const Stack = require('./stacks-and-queues').Stack;
const Queue = require('./stacks-and-queues').Queue;

describe('Stack Module', ()=>{
    it(' can push onto a stack ',()=>{
        let stack = new Stack();
        expect(stack.push(10)).toEqual(stack.top.value);
    });
    it(' can push multiple values onto a stack ',()=>{
        let stack = new Stack();
        stack.push(10);
        stack.push(11);
        stack.push(12);
        expect(stack.top.value).toEqual(12);
    });
    it(' can pop off the stack ',()=>{
        let stack = new Stack();
        stack.push(10);
        stack.push(11);
        stack.push(12);
        expect(stack.pop()).toEqual(12);
    });
    it('empty a stack after multiple pops',()=>{
        let stack = new Stack();
        stack.push(10);
        stack.push(11);
        stack.push(12);
        stack.pop();
        stack.pop();
        stack.pop();
        expect(stack.isEmpty()).toBeTruthy();
    });
    it('peek the next item on the stack',()=>{
        let stack = new Stack();
        stack.push(10);
        stack.push(11);
        stack.push(12);
        expect(stack.peek()).toEqual(12);
    });
    it('instantiate an empty stack',()=>{
        let stack = new Stack();
        expect(stack instanceof Stack).toBeTruthy();
    });
    it('Calling pop or peek on empty stack raises exception',()=>{
        let stack = new Stack();
        expect(stack.peek()).toThrow('The Stack is Empty');
        expect(stack.pop()).toThrow('The Stack is Empty');
    });

    //--------------------------
    it('Can enqueue into a queue',()=>{
        let queue = new Queue();
        expect(queue.enqueue(10)).toEqual(rear.value);
    });
    it('enqueue multiple values into a queue',()=>{
        let queue = new Queue();
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
        expect(queue.peek()).toEqual(10);
    });
    it('dequeue out of a queue the expected value',()=>{
        let queue = new Queue();
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
        expect(queue.dequeue()).toEqual(10);
    });
    it('peek into a queue, seeing the expected value',()=>{
        let queue = new Queue();
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
        expect(queue.peek()).toEqual(10);
    });
    it('empty a queue after multiple dequeues',()=>{
        let queue = new Queue();
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        expect(queue.isEmpty()).not.toBeTruthy();
    });
    it(' instantiate an empty queue',()=>{
        let queue = new Queue();
        expect(queue instanceof Queue).toBeTruthy();
    });
    it('Calling dequeue or peek on empty queue raises exception',()=>{
        let queue = new Queue();
        expect(queue.dequeue()).toThrow("The queue is empty")
        expect(queue.peek()).toThrow(RangeError)
    });
   
});