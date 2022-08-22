//https://leetcode.com/problems/count-largest-group/

function binarySearch(array: number[], value: number): number {
  //ý tưởng: chia đôi mảng, có 3 trục min, max, middle, khi array[middle] > value => min = middle + 1 or ngược lại

  let middle,
    min = 0,
    max = array.length - 1;

  while (min <= max) {
    middle = Math.floor((min + max) / 2);

    if (array[middle] === value) {
      return middle;
    } else if (array[middle] > value) {
      max = middle - 1;
    } else {
      min = middle + 1;
    }
  }

  return -1;
}

const testCases: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

const expect = binarySearch(testCases, 3);
console.log(expect); // 2

export {};
