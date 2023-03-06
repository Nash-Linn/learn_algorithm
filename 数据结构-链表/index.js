let a = {
  key: "a",
};
let b = {
  key: "b",
};
let c = {
  key: "c",
};
let d = {
  key: "d",
};

a.next = b;
b.next = c;
c.next = d;
d.next = null;

console.log("a", a);

//遍历链表
function ergodic(a) {
  let obj = a;
  while (obj && obj.key) {
    console.log(obj.key);
    obj = obj.next;
  }
}

//链表中插入某个元素
let m = { key: "mmmm" };
m.next = c.next;
c.next = m;

//删除操作
c.next = d;
ergodic(a);
let a = {
  key: "a",
};
let b = {
  key: "b",
};
let c = {
  key: "c",
};
let d = {
  key: "d",
};

a.next = b;
b.next = c;
c.next = d;
d.next = null;

console.log("a", a);

//遍历链表
function ergodic(a) {
  let obj = a;
  while (obj && obj.key) {
    console.log(obj.key);
    obj = obj.next;
  }
}

//链表中插入某个元素
let m = { key: "mmmm" };
m.next = c.next;
c.next = m;

//删除操作
c.next = d;
ergodic(a);
