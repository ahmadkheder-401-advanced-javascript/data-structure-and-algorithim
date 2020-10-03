/* eslint-disable new-cap */
'use strict';
const BinarySearch = function BinarySearch(arr, key) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  let middle = Math.floor((endIndex + startIndex) / 2);
  while (arr[middle] !== key) {
    if (startIndex > endIndex) {
      return -1;
    }
    middle = Math.floor((endIndex + startIndex) / 2);
    console.log(startIndex, endIndex, middle);
    if (arr[middle] < key) {
      startIndex = middle + 1;
    }
    else if (arr[middle] > key) {
      endIndex = middle - 1;
    }
  }
  return middle;
};

module.exports = BinarySearch;
