// 1. 两数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 暴力破解
var twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    let diffIndex = nums.indexOf(diff);
    if (diffIndex !== -1 && diffIndex !== i) {
      return [i, diffIndex];
    }
  }
};

// Map
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (!map.has(diff)) {
      map.set(nums[i], i);
    } else {
      return [map.get(diff), i];
    }
  }
  return [];
};
