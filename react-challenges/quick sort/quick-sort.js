'use strict';

function QuickSort(arr,left,right){

  // left-pointer would be the index of the first element which is 0 and right-pointer would be the index of the last element which would be (length -1).
  left = left || 0;
  right = right || arr.length - 1;

  var pivot = Partition(arr, left, right);

  if (left < pivot - 1) {
    QuickSort(arr, left, pivot - 1);
  }

  if (right > pivot) {
    QuickSort(arr, pivot - 1, right);
  }

  return arr;
}

function Partition(arr,left, right){

  // Lomuto algorithm always uses the last element, arr[right], for the pivot.
  var pivot = right;
  var i = left;

  /*The logic under Lomuto is, we start from the leftmost element and keep track of index of smaller (or equal to) elements as j. While traversing, if we find a smaller element, we swap current element with arr[j]. Otherwise we ignore current element.*/
  for (var j = left; j < right; j++) {
    if (arr[j] <= arr[pivot]) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, j);
  return i;
}


function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
