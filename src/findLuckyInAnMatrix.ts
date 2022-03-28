//https://leetcode.com/problems/lucky-numbers-in-a-matrix

function luckyNumbers(matrix: number[][]): number[] {
  //  ý tưởng:
  // dùng map lưu số lần xuẩt hiện của min, max nếu biến đó = 2 sẽ tìm đc

  const result: number[] = [];

  let m: number = matrix.length; // row
  let n: number = matrix[0].length; // column

  const countMaps: Record<string, number> = {};

  for (let i = 0; i < m; i++) {
    let min = matrix[i][0];
    for (let j = 1; j < n; j++) {
      let number = matrix[i][j];
      if (number < min) {
        min = number;
      }
    }
    countMaps[min] = (countMaps[min] || 0) + 1;
  }

  for (let i = 0; i < n; i++) {
    let max = matrix[0][i];
    for (let j = 1; j < m; j++) {
      let number = matrix[j][i];
      if (number > max) {
        max = number;
      }
    }
    countMaps[max] = (countMaps[max] || 0) + 1;
  }

  for (const [key, val] of Object.entries(countMaps)) {
    if (Number(val) === 2) {
      result.push(Number(key));
    }
  }

  return result;
}

const testCases: number[][] = [
  [3, 7, 8],
  [9, 11, 13],
  [15, 16, 17],
];

const expect = luckyNumbers(testCases);
console.log(expect); // 15

export {};
