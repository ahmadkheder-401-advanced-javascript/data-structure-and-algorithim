/* eslint-disable new-cap */
'use strict';

function BinarySearch(array,target){
  let startIndex = 0;
  let endIndex = array.length - 1;

  while(startIndex <= endIndex){
    let middle ;
    array.length%2 ? middle = (array.length+1)/2 : middle=array.length/2;
    if(array[middle]=== target){
      return middle;
    }
    else if(array[middle] < target){
      startIndex = middle+1;
    }
    else if(array[middle] > target){
      endIndex = middle-1;
    }
    else{
      return -1;
    }
  }
}
console.log('before');
console.log(BinarySearch([4,8,15,16,23,42],15));
console.log(BinarySearch([4,8,15,16,23,42],1225));
console.log('after');
