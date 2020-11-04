# Challenge Summary

Conduct a depth first preorder traversal on a graph

## Challenge Description

Create a function that accepts an adjacency list as a graph, and conducts a depth first traversal. Without utilizing any of the built-in methods available to your language, return a collection of nodes in their pre-order depth-first traversal order

## Approach & Efficiency

I used ,for and while loops , if statment

## Big O

space(n) declared new array and new set
time(n^2) since I will loop through each node and it neighbors

## Solution

**Problem Domain**
Create a function that accepts an adjacency list as a graph, and conducts a depth first traversal. Without utilizing any of the built-in methods available to your language, return a collection of nodes in their pre-order depth-first traversal order.

**Input:** graph

![graph](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-38/Day28Example.PNG)

**Output**:` A, B, C, G, D, E, H, F`
**Edge Cases:** 

- Empty Grapgh
- grapgh contains one
- not graph

**Algorithm:**

- define an empty stack
- define an empty output array
- define a visited set
- push the root to stack
- while stack is not empty:
  - peek the top
  - if it has unvisited neighbors 
    add the node to the visited
    push unvisited children to stack
  - if the top doesn't have unvisited children
    pop it from stack
    push it to output
  - return output

   **code**

   ```
   (root) => {
  const stack = new Stack();
  const resultArr = [];
  const visited = new Set();
  resultArr.push(root);
  visited.add(root);
  stack.push(root);

  while(!stack.isEmpty()) {
    let current = stack.peek();
    let unvisited = false;
    for (let i = 0; i < current.getNeighbors().length; i ++) {
      let neighbor = current.getNeighbors()[i];
      if(!visited.has(neighbor)){
        unvisited = true;
        visited.add(neighbor);
        stack.push(neighbor);
        resultArr.push(neighbor);
        break;
      }
    }
    if (!unvisited) {
      stack.pop();
    }
  }
  return resultArr;
  ```  
  **Big O:**

  space complixity: O(n)
  time complixity: O(n^2)
