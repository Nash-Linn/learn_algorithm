let arr = [1, 23, 3];

// console.log(arr instanceof Array);

const myInstanceof = (target, obj) => {
  let p = target;
  while (p) {
    if (p == obj.prototype) {
      return true;
    }
    p = p.__proto__;
  }
  return false;
};

console.log(myInstanceof(arr, Array));
