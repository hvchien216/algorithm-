//https://leetcode.com/problems/number-of-equivalent-domino-pairs/

function numberOfEquivalentDominoPairs(dominoes: number[][]): number {
  const obj: Record<string,number>= {};
  let result = 0;
  for (let index = 0; index < dominoes.length; index++) {
    let [a,b] = dominoes[index];
    console.log("before",`${a}_${b}`)
    
    if(a > b) {
      [a,b] = [b,a];
    }
    console.log("after",`${a}_${b}`, obj[`${a}_${b}`])
    console.log("=========")
    obj[`${a}_${b}`] = typeof obj[`${a}_${b}`] == 'number' ? obj[`${a}_${b}`] + 1 : 1
  }

  for (const key of Object.keys(obj)) {
    console.log("keys",key, obj[key])
    console.log("=========")
    if(obj[key] > 1) {
      result += (obj[key] * (obj[key] - 1) /2);
    }
  }

  return result;
}

const expect = numberOfEquivalentDominoPairs([[1,2],[1,2],[1,1],[1,2],[2,2]]);
console.log(expect); 

// input: [[1,2],[1,2],[1,1],[1,2],[2,2]]  => 3
// input: [[1,2],[2,1],[3,4],[5,6]]        => 1

export {};
