/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 1. 右侧指针移位
  // 2. 判断是否符合预期
  // 3. 左侧指针是否需要移位
  // 4. 进入下一次循环

  if (s.length <= 1) {
    return s.length;
  }

  let left = 0;
  let right = 1;
  let max = 0;
  let temp;
  while (right < s.length) {
    temp = s.slice(left, right);
    if (temp.includes(s[right])) {
      left++;
      continue;
    } else {
      right++;
    }
    if (right - left > max) {
      max = right - left;
    }
  }
  return max;
};

s = "abcabcbb";
lengthOfLongestSubstring(s);
