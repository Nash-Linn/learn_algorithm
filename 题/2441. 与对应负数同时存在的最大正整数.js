// 给你一个 不包含 任何零的整数数组 nums ，找出自身与对应的负数都在数组中存在的最大正整数 k 。

// 返回正整数 k ，如果不存在这样的整数，返回 -1 。

//

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/largest-positive-integer-that-exists-with-its-negative
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let max = Math.max(...nums);
  if (nums.includes(0 - max)) {
    return max;
  } else {
    let newArr = nums.filter((item) => item != max);
    if (newArr.length == 0) {
      return -1;
    }
    return findMaxK(newArr);
  }
};

let nums = [-1, 10, 6, 7, -7, 1];

console.log("findMaxK(nums)", findMaxK(nums));
