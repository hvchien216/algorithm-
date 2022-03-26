//https://leetcode.com/problems/create-target-array-in-the-given-order

function createTargetArray(nums: number[], index: number[]): number[] {
  const result: number[] = [];
  
  for(let i = 0; i < nums.length; i++){
      if(result.length == index[i]){
          result.push(nums[i])
      }else {
          insert(result,index[i],nums[i])
      }
          
      
  }
  
  return result;
};

function insert(arr: number[], position: number, value: number): number[] {
      
  for(let i = position; i < arr.length; i++){
      let temp: number = arr[i];
      arr[i] = value;
      value = temp;
  }
  arr.push(value);
  
  return arr
}

const testCases: any = [
  [[0,1,2,3,4],
  [0,1,2,2,1]]
];

for (const arr of testCases) {
  const expect = createTargetArray(arr[0],arr[1]);
  console.log(expect); // [0,4,1,3,2]
}

export {};
