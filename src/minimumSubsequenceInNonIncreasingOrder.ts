//https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/


const minSubsequence = (nums: number[]): number[] => {
  //ý tưởng:
    // 1: tính sum of nums
    // 2: sort descending nums
    // 3: iteration nums with (tổng các phần trước or = index) > sums - tổng các phần       trước or = index
    
    const result: number[] = [];
    let sum: number = 0;
    
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
    }
    
    nums.sort((a,b) => b-a);
    
    let temp: number = 0;
    
    for(let i = 0; i < nums.length; i++){
        result.push(nums[i]);
        
        temp += nums[i];
        
        if(temp > sum - temp){
            break;
        }
        
        
    }
    
    return result;
};

const testCases: number[][] = [
  [4,3,10,9,8],
  [10, 5, 2],
];

for (const arr of testCases) {
  const expect = minSubsequence(arr);
  console.log(expect);
}

export {};
