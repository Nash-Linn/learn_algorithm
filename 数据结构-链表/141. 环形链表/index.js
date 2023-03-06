//141. 环形链表
var hasCycle = function (head) {
  let f = head;
  let s = head;
  while (f != null && f.next != null) {
    s = s.next;
    f = f.next.next;
    if (s == f) return true;
  }
  return false;
};
