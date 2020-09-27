# data-structure-and-algorithim
![cc15-tree](aasset/cc15.png)
# BinarySearchTree
- [x] Can successfully instantiate an empty tree
- [x] Can successfully instantiate a tree with a single root node
- [x] Can successfully add a left child and right child to a single root node
- [x] Can successfully return a collection from a preorder traversal
- [x] Can successfully return a collection from an inorder traversal
- [x] Can successfully return a collection from a postorder traversal


## Challenge

Create tree class with adding metode and implement depth traverse methods.

## Approach & Efficiency

- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
- Create a BinaryTree class
- Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
- Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

- Create a BinarySearchTree class
- Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
- Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

### Bog O
Time complixty: O(n).

## Implementation

- Create a new tree

```javascript
var BST = new BinarySearchTree();
```

- Insert new value to your tree

```javascript
BST.add(value);
```

- Search for specific value

```javascript
BST.contains(value);
```

- Performs preorder traversal of a tree 

```javascript
BST.preOrder();
```

- Performs inorder traversal of a tree 

```javascript
BST.inOrder();
```

- Performs postorder traversal of a tree 

```javascript
BST.postOrder();
```