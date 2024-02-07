// 524. 通过删除字母匹配到字典里最长单词

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  let left = 0;
  let right = 0;
  let str = "";

  for (let i = 0; i < dictionary.length; i++) {
    left = 0;
    right = 0;

    while (left < s.length && right < dictionary[i].length) {
      if (s.charAt(left) === dictionary[i].charAt(right)) {
        right++;
      }

      // 当此时长度一样
      if (right === dictionary[i].length) {
        //拿着 dictionary[i] 的长度 跟已有的之前的 str 的结果的长度比较
        if (
          dictionary[i].length > str.length ||
          (dictionary[i].length === str.length && dictionary[i] < str)
        ) {
          str = dictionary[i];
        }
      }
      left++;
    }
  }

  return str;
};
