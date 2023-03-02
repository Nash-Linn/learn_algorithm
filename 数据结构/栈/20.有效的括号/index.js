/**
 *  leetcode-20
 *
 *  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 *  有效字符串需满足：
 *    左括号必须用相同类型的右括号闭合。
 *    左括号必须以正确的顺序闭合。
 *    每个右括号都有一个对应的相同类型的左括号。
 *
 *
 *  输入：s = "()"
 *  输出：true
 *
 *  输入：s = "()[]{}"
 *  输出：true
 *
 *  输入：s = "(]"
 *  输出：false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//   var stack = [];
//   let obj = {
//     "}": "{",
//     ")": "(",
//     "]": "[",
//   };
//   // let left = Object.values(obj);
//   let left = ["{", "(", "["];
//   for (let i = 0, len = s.length; i < len; i++) {
//     if (left.includes(s[i])) {
//       stack.push(s[i]);
//     } else {
//       if (obj[s[i]] == stack[stack.length - 1]) {
//         stack.pop();
//       } else {
//         stack.push(s[i]);
//       }
//     }
//   }
//   return !stack.length;
// };

var isValid = function (s) {
  var stack = [];
  for (let i = 0, len = s.length; i < len; i++) {
    let start = s[i];
    let end = stack[stack.length - 1];
    if (
      (start === "}" && end === "{") ||
      (start === ")" && end === "(") ||
      (start === "]" && end === "[")
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return !stack.length;
};

s = "}([{}])";

isValid(s);
