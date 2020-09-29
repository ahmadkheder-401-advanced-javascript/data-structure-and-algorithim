'use strict';

const BinarySearchTree = require('../challenges/tree/tree');

describe('BST Module', () => {
  it('Can successfully instantiate an empty tree', () => {
    var BST = new BinarySearchTree();
    try {
      BST.preOrder();
    } catch (error) {
      expect(error).toEqual(new Error('Empty Tree'));
    }
  });
  it('Can successfully instantiate a tree with a single root node', () => {
    var BST = new BinarySearchTree();
    BST.add(26);
    expect(BST.inOrder()).toEqual([26]);
  });
  it('Can successfully add a left child and right child to a single root node', () => {
    var BST = new BinarySearchTree();
    BST.add(26);
    BST.add(27);
    expect(BST.inOrder()).toEqual([26, 27]);
  });
  it('Can successfully return a collection from a preorder traversal', () => {
    var BST = new BinarySearchTree();
    BST.add(26);
    BST.add(36);
    BST.add(21);
    BST.add(18);
    BST.add(28);
    BST.add(16);
    expect(BST.preOrder()).toEqual([26, 21, 18, 16, 36, 28]);
  });
  it('Can successfully return a collection from an inorder traversal', () => {
    var BST = new BinarySearchTree();
    BST.add(26);
    BST.add(36);
    BST.add(21);
    BST.add(18);
    BST.add(28);
    BST.add(20);
    expect(BST.inOrder()).toEqual([18, 20, 21, 26, 28, 36]);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    var BST = new BinarySearchTree();
    BST.add(15);
    BST.add(25);
    BST.add(10);
    BST.add(7);
    BST.add(22);
    BST.add(17);
    BST.add(13);
    BST.add(5);
    BST.add(9);
    BST.add(27);
    expect(BST.postOrder()).toEqual([5, 9, 7, 13, 10, 17, 22, 27, 25, 15]);
  });
});
