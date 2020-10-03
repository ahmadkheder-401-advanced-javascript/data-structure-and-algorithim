'use strict';

const bs = require('../challenges/binaryArr');

describe('Array Binary Search', () => {

  it('binarySearch(arr,key) finds the index where the element at that index matches the search key', () => {
    let test = bs([1, 2, 5, 8], 5);
    expect( test ).toEqual(2);
  });

  it('binarySearch(arr,key) finds the index where the element at that index matches the search key', () => {
    let test = bs([1, 2, 3, 4, 6, 7, 789, 123, 456, 789], 123);
    expect( test ).toEqual( 7 );
  });

  it('binarySearch(arr,key) returns -1 if the search key is not found', () => {
    let test = bs([1, 3, 4, 5, 6, 7, 789, 123, 456, 789], 2);
    expect( test ).toEqual( -1 );
  });

});
