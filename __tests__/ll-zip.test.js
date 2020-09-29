'use strict';

let LinkedList = require('../challenges/ll-zip').LinkedList;
const zipLists = require('../challenges/ll-zip').zipLists;

describe('zipLists Lists', () => {

  it('zipLists() returns a linked list, which is in the form of a Javascript object.', () => {

    let ll1 = new LinkedList();
    ll1.append(1);
    ll1.append(3);
    ll1.append(2);

    let ll2 = new LinkedList();
    ll2.append(5);
    ll2.append(9);
    ll2.append(4);
    expect(typeof zipLists(ll1, ll2)).toEqual('object');

  });
  it('zipLists() first node of the first arg  is the head of zipped lists', () => {

    let ll1 = new LinkedList();
    ll1.append(1);
    ll1.append(3);
    ll1.append(2);

    let ll2 = new LinkedList();
    ll2.append(5);
    ll2.append(9);
    ll2.append(4);

    expect(zipLists(ll1, ll2).head.value).toEqual(1);


  });
  it('zipLists() first node of the second arg  is the second of zipped lists', () => {

    let ll1 = new LinkedList();
    ll1.append(1);
    ll1.append(3);
    ll1.append(2);

    let ll2 = new LinkedList();
    ll2.append(5);
    ll2.append(9);
    ll2.append(4);

    expect(zipLists(ll1, ll2).head.next.value).toEqual(5);


  });



});
