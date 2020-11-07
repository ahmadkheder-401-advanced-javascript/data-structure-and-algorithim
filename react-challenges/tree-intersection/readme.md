## Tree Intersection

### Challenge

- Write a function called tree_intersection that takes two binary tree parameters. Without utilizing any of the built-in library methods, and return a set of values found in both trees.

### Approach & Efficiency

- I used function, for loop, if statements, and while loop.

### Solution

**Problem Domain:**
write a function that takes in two binary trees as args and return their values.

**Input:**
Bnary tree

**Input:**
array

**Algorithm:**


- create a function `tree-insertion` that takes in two args 
- using tree fuctions, preOrder the tree.
- define new array 
- loop through first tree length
- loop through second tree length
- check if the index of the first equal second then return


**Visualization:**
![Visualization](tree-intersection/treeInsertion.jpg)

**code**

```pesudocode
const tree_intersection = (tree1, tree2) => {
  let BT1 = tree1.preOrder();
  let BT2 = tree2.preOrder();
  let arr = [];
  let index = 0;

  while(index < BT1.length) {
    for(let i = 0; i < BT2.length; i++) {
      if (BT1[index] === BT2[i]) {
        arr.push(BT2[i]);
      }
    }
    index++;
  }

  return arr;
};
```

**Big O:**
Time: O(n log n), Space: O(n)

