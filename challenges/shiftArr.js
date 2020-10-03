'use strict';
let arr = [4,8,15,23,42];
let element = 16;
function insertShiftArray(arr,element){
  let middle;
  arr.length%2 ? middle = (arr.length+1)/2 : middle=arr.length/2;
  for(let i = arr.length-1; i >= middle ; i--){
    arr[i+1] = arr[i];
  }
  arr[middle] = element;
  return arr;
}
console.log(arr);
insertShiftArray(arr,element);
console.log(arr);

