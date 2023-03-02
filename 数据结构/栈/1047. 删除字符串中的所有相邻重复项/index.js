//1047. 删除字符串中的所有相邻重复项
/**
 * 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
 * 在 S 上反复执行重复项删除操作，直到无法继续删除。
 * 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
 *
 * 输入："abbaca"
 * 输出："ca"
 * 解释：
 * 例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
 */

// var removeDuplicates = function (s) {
//   let arr = [];
//   for (let i = 0; i <= s.length - 1; i++) {
//     let start = s[i];
//     let end = arr[arr.length - 1];
//     if (start === end) {
//       arr.pop();
//     } else {
//       arr.push(start);
//     }
//   }
//   return arr.join("");
// };

var removeDuplicates = function (s) {
  let arr = [];
  for (let i = 0; i <= s.length - 1; i++) {
    let end = arr.pop();
    if (s[i] != end) {
      arr.push(end);
      arr.push(s[i]);
    }
  }
  return arr.join("");
};

// var removeDuplicates = function (s) {
//   let arr = [];
//   for (v of s) {
//     let prev = arr.pop();
//     if (prev != v) {
//       arr.push(prev);
//       arr.push(v);
//     }
//   }
//   return arr.join("");
// };

let s = "abbaca";

console.log("removeDuplicates(s)", removeDuplicates(s));
