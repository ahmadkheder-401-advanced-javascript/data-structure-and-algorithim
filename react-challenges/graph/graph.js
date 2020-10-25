'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.list = new Map();
  }

  addNode(vertex) {
    this.list.set(vertex, []);
    return vertex;
  }

  addEdge(startVertex, endNode, weight) {
    if (!this.list.has(startVertex) || !this.list.has(endNode)) {
      return 'node not found !!!';
    } else {
      const adjacencies = this.list.get(startVertex);
      adjacencies.push(new Edge(endNode, weight));
      return Edge;
    }
  }

  getNeighbours(vertex) {
    if (!this.list.has(vertex)) {
      return 'node does not exist';
    } else {
      return this.list.get(vertex);
    }
  }

  getNodes() {
    return this.list.entries();
  }

  size() {
    return this.list.size;
  }
}
module.exports = { Vertex, Edge, Graph};
