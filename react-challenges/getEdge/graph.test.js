'use strict';

let Graph = require('../graph/graph').Graph;
let Vertex = require('../graph/graph').Vertex;
let Edge = require('../graph/graph').Edge;

describe('create a new graph', () => {
  const graph = new Graph();

  const two = new Vertex(2);
  const three = new Vertex(3);
  const six = new Vertex(6);
  graph.addNode(two);
  graph.addNode(three);


  it('addNode()', () => {
    expect(graph.addNode(two).value).toBe(2);
  });


  it('addEdge()', () => {
    expect(graph.addEdge(two, six)).toBe('node not found');
    expect(graph.addEdge(two, three)).toBe(Edge);
  });


  it('getNeighbours()', () => {
    expect(graph.getNeighbours(six)).toBe('node does not exist');
    let result = graph.getNeighbours(two);
    expect(result).toBeDefined();
    expect(result[0].vertex).toBe(three);

  });

  it('size()', () => {
    let result = graph.size();
    expect(result).toBeDefined();
    expect(result).toEqual(2);

  });

  it('getNodes()', () => {
    let result = graph.getNodes();
    expect(result).toBeDefined();
  });

});
