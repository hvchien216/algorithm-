//https://leetcode.com/problems/number-of-good-pairs/

const numIdenticalPairs_SOLUTION_1 = (nums: number[]): number => {
  let result = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        result++;
      }
    }
  }

  return result;
};

const numIdenticalPairs_SOLUTION_2 = (nums: number[]): number => {
  let result = 0,
    numCountMap: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    let count: number | undefined = numCountMap[nums[i]];
    let isExist: boolean = !!count;

    if (isExist) {
      result += count;
      numCountMap[nums[i]] = count + 1;
    } else {
      numCountMap[nums[i]] = 1;
    }
  }

  return result;
};

const testCases: number[][] = [
  [1, 2, 3, 1, 1, 3],
  [1, 1, 1, 1],
  [1, 2, 3],
];
//expected ====> 4 | 6 | 0

for (const arr of testCases) {
  let expect = numIdenticalPairs_SOLUTION_1(arr);
  console.log(expect);
}

console.log('================================');

for (const arr of testCases) {
  let expect = numIdenticalPairs_SOLUTION_2(arr);
  console.log(expect);
}
