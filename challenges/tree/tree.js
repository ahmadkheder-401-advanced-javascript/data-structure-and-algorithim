'use strict';


class Node {
    constructor(value, left = null, rigth = null) {
        this.value = value;
        this.left = left;
        this.rigth = rigth;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        var newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.addNode(this.root, newNode);
        }
    }

    addNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.addNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.addNode(node.right, newNode);
            }
        }
    }


    getRootNode() {
        if (!this.root) {
            throw new Error('Empty Tree');
        }
        return this.root;
    }


    preOrder() {
        if (!this.root) {
            throw new Error('Empty Tree');
        }
        let result = [];
        let _traverse = (node) => {
            result.push(node.value);
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
        };

        _traverse(this.root);
        return result;
    }

    inOrder() {
        if (!this.root) {
            throw new Error('Empty Tree');
        }
        let result = [];
        let _traverse = (node) => {
            if (node.left) _traverse(node.left);
            result.push(node.value);
            if (node.right) _traverse(node.right);
        };

        _traverse(this.root);
        return result;
    }


    postOrder() {
        if (!this.root) {
            throw new Error('Empty Tree');
        }
        let result = [];
        let _traverse = (node) => {
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
            result.push(node.value);
        };
        _traverse(this.root);
        return result;
    }


    contains(node, value) {
        if (!node) {
            throw new Error('Empty Tree');
        } else if (value < node.value) {
            return this.contains(node.left, value);
        } else if (value > node.value) {
            return this.contains(node.right, value);
        } else {
            return node;
        }
    }
}

module.exports = BinarySearchTree;