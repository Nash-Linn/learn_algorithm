//15. 三数之和
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum1 = function (nums) {
  // 1. 排序
  nums.sort((a, b) => a - b);
  let res = [];
  // 2. 遍历，取当前值，左右指针
  for (let i = 0; i < nums.length; i++) {
    // 2.1 如果当前值大于0，后面的值都大于0，不可能和为0
    if (nums[i] > 0) break;
    // 2.2 如果当前值和前一个值相同，跳过
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    // 2.3 左指针
    let left = i + 1;
    // 2.4 右指针
    let right = nums.length - 1;
    while (left < right) {
      // 2.5 如果三数之和大于0，右指针左移
      if (nums[i] + nums[left] + nums[right] > 0) {
        right--;
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        // 2.6 如果三数之和小于0，左指针右移
        left++;
      } else {
        // 2.7 如果三数之和等于0，加入结果集
        res.push([nums[i], nums[left], nums[right]]);
        // 2.8 如果左指针和前一个值相同，跳过
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        // 2.9 如果右指针和前一个值相同，跳过
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        // 2.10 左右指针移动
        left++;
        right--;
      }
    }
  }
  return res;
};

var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] > 0) {
        right--;
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left++;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }
  return res;
};

let n = [-1, 0, 1, 2, -1, -4];
let r = threeSum(n);
console.log(r);
