//https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/

const canMakeArithmeticProgression = (arr: number[]): boolean => {
  let min = arr[0],
    max = arr[0],
    n = arr.length;
  const numberExistMappings: Record<string, boolean> = {};

  for (const num of arr) {
    if(num < min){
      min = num
    }

    if(num > max){
      max = num
    }
    numberExistMappings[num] = true;
  }

  let totalDiff = max - min;

  if(totalDiff % (n - 1) != 0){
    return false;
  }
  let diff = Math.floor(totalDiff / (n - 1));

  while(min > max){
    min += diff;

    let isExist = numberExistMappings[min];

    if(!isExist) return false
  }

  return true;
};

const testCases: number[][] = [
  [3, 1, 5],
  [7, 4, 2],
];

for (const arr of testCases) {
  const expect = canMakeArithmeticProgression(arr);
  console.log(expect);
}

export {};
