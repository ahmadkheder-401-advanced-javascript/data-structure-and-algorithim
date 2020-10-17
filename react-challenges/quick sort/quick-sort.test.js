'use strict';

let quickSort = require('./quick-sort');


describe('Quick Sort function', () => {


  it('should sort the input array', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    expect(quickSort(arr, 0, 5)).toEqual([4, 8, 15, 16, 23, 42]);
  });

});
