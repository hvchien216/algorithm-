//https://leetcode.com/problems/count-largest-group/

function countLargestGroup(n: number): number {
  //ý tưởng:
  
  
  let result: number = 0;
  let maxLengthGr = 0;
  const countMaps: Record<string,number> = {}
  
  for(let i = 1; i <= n; i++ ){
      let temp: number = i;
      let sum = 0;
      while(temp > 0){
          sum += Math.floor(temp % 10);
          temp /= 10;
      }
      
      countMaps[sum] = (countMaps[sum] || 0) + 1;
      
      
      if(countMaps[sum] == maxLengthGr){
          result++;
      }else if(countMaps[sum] > maxLengthGr) {
          result = 1;
          maxLengthGr = countMaps[sum]
      }
  }
  
  
  return result;
};

const testCases: number[] = [
  13,
  126,
];

for (const arr of testCases) {
  const expect = countLargestGroup(arr);
  console.log(expect); // 4 1
}

export {};
