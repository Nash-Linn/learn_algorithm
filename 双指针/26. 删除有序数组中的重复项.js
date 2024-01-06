// 26. 删除有序数组中的重复项

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates1 = function (nums) {
  let len = nums.length;
  let i = 1
  for(let j = 1;j<len;j++){
    if(nums[j] != nums[i-1]){
      nums[i] = nums[j]
      i++
    }
  }
  return i
};


var removeDuplicates = function (nums) {
let 
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

let a = removeDuplicates(nums);
console.log(a)