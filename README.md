# learn_algorithm

1.复杂度
2.双指针
3.滑动窗口
4.二叉树

## 复杂度

时间复杂度  更短时间

空间复杂度  更少空间

大O表示法
O(n) 算法执行的规模 消耗的时间 或者 空间

### 时间复杂度
不是代码真正的时间 随着数据规模的增长所表达的趋势

```js
  function a(){
    console.log("hello") //1次
    return 1 //1次
  } 
  //-->  2次 

  function b(){
    for(let i = 0;i < n; i++){  // n+1次
      console.log("hello")  // n次
    }
    return 1  //1次
  }
  //-->  2n+2次  ---> O(n)

  function c(){
    let sun = 0;             // 1
    let i = 1;               // 1
    let j = 1;               // 1
    for(;i<n;++i){           // n 次
      j = 1;                 // 1*n
      for(;j<n;++j){         // n*n
        sum = sum + i + j;   // n*n
      }
    }
  }
  // 2n^2 + 2n + 3  ---> O(n^2)
```

1.时间复杂度 量级最大的部分
2.循环 嵌套 递归

O(1) 常数阶
O(log n) 对数阶
O(n) 线性阶
O(nlog n) 线性对数阶
O(n^2) 平方阶

```js
function a(n){
  let i = 1
  while(i <= n){
    i = i * 2
  }
}

function cal(n){
  let sum = 0
  for(let i = 0; i < n; i++){
    sum += a(n)
  }
  return sum
}
```

1. 最好情况时间复杂度
2. 最坏情况时间复杂度
3. 平均情况时间复杂度
4. 均摊时间复杂度

```js
function a(n){
  const arr = []
  arr.length = n
  for(let i = 0; i < n; i++){
    arr[i] = i * i
  }
}
```

## 双指针
-> -> 
同向移动 
快慢指针
a -> b -> c -> d -> e -> a


<- -> 
背向移动



-> <- 两端移动