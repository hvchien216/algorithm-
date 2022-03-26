//https://leetcode.com/problems/count-largest-group/

function findLucky(arr: number[]): number {
  //ý tưởng:
  // dùng Map duyệt qua sau đó lấy key là số, value là số lần xuất hiện của số đó
  // sau đó loop qua Map so sánh key và value để tìm ra số lucky
  
  let result: number = -1;
  const countMap: Record<number,number> = {};

  for(let i = 0; i < arr.length; i++){
      countMap[arr[i]] = (countMap[arr[i]] || 0) + 1;
  }
  
  for (const [key, value] of Object.entries(countMap)) {
      if(Number(key) === value && value > result){
          result = Number(key)
      }
  }
  
  return result;
};

const testCases: number[][] = [
  [2,2,3,4],
  [2,2,3,3,3,1],
  [5]
];

for (const arr of testCases) {
  const expect = findLucky(arr);
  console.log(expect); // 2 3 -1
}

export {};
