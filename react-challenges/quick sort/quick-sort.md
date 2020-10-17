# Quick Sort

Pseudo Code

```ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp

```

```javascript

'use strict';

function QuickSort(arr,left,right){
    left = left || 0;
    right = right || arr.length - 1;

    var pivot = Partition(arr, left, right);

    if (left < pivot - 1) {
        QuickSort(arr, left, pivot - 1);
    }

    if (right > pivot) {
        QuickSort(arr, pivot - 1, right)
    }

    return arr;
}

function Partition(arr,left, right){

        var pivot = right;
        var i = left;
        for (var j = left; j < right; j++) {
            if (arr[j] <= arr[pivot]) {
                swap(arr, i, j);
                i++
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

```

## Big O

worst-case running time: O(n^2)

## Example implementation

![WB](https://miro.medium.com/max/600/1*DtH6fEdBhoUGnjBWudJ8pA.png)