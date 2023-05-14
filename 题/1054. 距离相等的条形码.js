/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
  const length = barcodes.length;
  const count = {};
  barcodes.forEach((item) => {
    count[item] = count[item] ? count[item] + 1 : 1;
  });
  let arr = [];
  for (let key in count) {
    arr.push([key, count[key]]);
  }
  arr.sort((a, b) => b[1] - a[1]); //按次数从大到小排序

  let index = 0; //填充偶数位
  for (let [k, v] of arr) {
    while (v > 0 && index < length) {
      barcodes[index] = k;
      v--;
      index += 2;
      if (index >= length) {
        index = 1; //填充奇数位
      }
    }
  }
  return barcodes;
};

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes1 = function (barcodes) {
  const length = barcodes.length;
  let m = new Map(); // 计数
  for (let i of barcodes) {
    if (!m.has(i)) m.set(i, 0);
    m.set(i, m.get(i) + 1);
  }
  let arr = Array.from(m.entries());
  arr.sort((a, b) => b[1] - a[1]); // 按次数从大到小排序
  let index = 0; // 先填充偶数位
  for (let [k, v] of arr) {
    while (v > 0 && index < length) {
      barcodes[index] = k;
      v--;
      index += 2;
      if (index >= length) index = 1; // 再填充奇数位
    }
  }
  return barcodes;
};

const barcodes = [2, 1, 3, 2, 3, 1, 1, 1];

let res = rearrangeBarcodes1(barcodes);
console.log("res", res);
