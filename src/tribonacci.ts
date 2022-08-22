//https://leetcode.com/problems/n-th-tribonacci-number/

function tribonacci(n: number): number {
  const result: number[] = [0, 1, 1];

  for (let index = 3; index <= n; index++) {
    result.push(result[index - 3] + result[index - 2] + result[index - 1]);
  }

  return result[n];
}

const expect = tribonacci(25);
console.log(expect); 

// input: 4  => 2
// input: 25 => 1389537

export {};
