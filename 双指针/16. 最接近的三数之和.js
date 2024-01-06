//16. 最接近的三数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // 1. 先排序
  // target - for循环的数

  let length = nums.length;
  let res = Number.MAX_SAFE_INTEGER;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < length; i++) {
    // 依次获取其中的元素
    // nums[i] + nums[i + 1] + nums[length - 1] = target

    let left = i + 1;
    let right = length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      // 条件成立 代表 sum 更接近 target
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum;
      }
    }
  }
  return res;
};
