const quickSort = (arr: number[]): number[] => {
  console.log(arr.length)
  // nếu left >= right: case = là length = 1, còn > là invalid left và right (left > right)
  if(arr.length < 2) return arr

  //b1. get pivot
  let pivotIndex = arr.length - 1  // || 0
  let pivot = arr[pivotIndex];
  let left: number[] = [];
  let right: number[] = [];
  //b2. partition
  //for (let index = 1 ; index < arr.length; index++)
  for (let index = 0 ; index < arr.length - 1; index++) {
    if(arr[index] < pivot){
      left.push(arr[index])
    } else {
      right.push(arr[index])
    }
  }

  //b3. chia doi mang
  return quickSort(left).concat(pivot, quickSort(right))
}

console.log(quickSort([100,-1,0.1,-0.5, 2, 5, 4, 7, 5, 6, 8, 0, 12, 34, 15]))