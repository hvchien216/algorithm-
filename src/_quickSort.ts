const swap = (arr: number[], left: number, right: number ) => {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

const partition = (arr: number[], left: number, right: number, pivot: number): number => {
let _left = left;
let _right = right;
  while(_left <= _right){
    while(arr[_left] < pivot){
      _left++;
    }

    while(arr[_right] > pivot) {
      _right--;
    }

    if(_left <= _right){
      swap(arr, _left, _right);
      _left++;
      _right--;
    }
  }

  return _left;
}
const _quickSort = (arr: number[], left: number, right: number): any => {
  // b1. select pivot

  if(left >= right) return;

  let middle = Math.floor((left + right) / 2);
  let pivot = arr[middle];

  // b2. partition
  let pivotValue = partition(arr, left, right, pivot);

  // b3. divide array => loop
  _quickSort(arr, left, pivotValue - 1);
  _quickSort(arr, pivotValue, right);
  return arr;
}


const array1 = [100,-1,0.1,-0.5, 2, 5, 4, 7, 5, 6, 8, 0, 12, 34, 15];
_quickSort(array1, 0, array1.length - 1)
console.log(array1)