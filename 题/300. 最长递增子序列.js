// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列 是由数组派生而来的序列，
// 删除（或不删除）数组中的元素而不改变其余元素的顺序。
// 例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

/**
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function (nums) {
//   // dp[i] 代表以 nums[i] 结尾的最长上升子序列的长度
//   // dp[i] = max(dp[j]) + 1, j < i && nums[j] < nums[i]
//   // dp[0] = 1
//   // res = max(dp[i])
//   const dp = new Array(nums.length).fill(1);
//   let max = 1;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//     max = Math.max(dp[i], max);
//   }
//   return max;
// };

// var lengthOfLIS = function (nums) {
//   const arr = [nums[0]];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > arr[arr.length - 1]) {
//       arr.push(nums[i]);
//     } else {
//       for (let j = 0; j < arr.length; j++) {
//         if (nums[i] <= arr[j]) {
//           arr[j] = nums[i];
//           break;
//         }
//       }
//     }
//   }
//   return arr.length;
// };

//采用二分查找
var lengthOfLIS = function (nums) {
  const arr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > arr[arr.length - 1]) {
      arr.push(nums[i]);
    } else {
      let left = 0;
      let right = arr.length - 1;
      while (left < right) {
        const mid = (left + right) >> 1;
        if (arr[mid] < nums[i]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      arr[left] = nums[i];
    }
  }
  return arr.length;
};
