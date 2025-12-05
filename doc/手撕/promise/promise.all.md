核心思路
1. 接收一个 Promise 实例的数组或具有 Iterator 接口的对象作为参数
2. 这个方法返回一个新的 promise 对象，
3. 遍历传入的参数，用Promise.resolve()将参数"包一层"，使其变成一个promise对象
4. 参数所有回调成功才是成功，返回值数组与参数顺序一致
5. 参数数组其中一个失败，则触发失败状态，第一个触发失败的 Promise 错误信息作为 Promise.all 的错误信息。

```js
Promise.myAll = function (proms) {
  let res, rej;
  const p = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  })
  let i = 0;
  let fulfilled = 0;
  let result = [];
  for(let prom of proms) {
    let index = i;
    i++;
    Promise.resolve(prom).then((data) => {
      // 1. 完成的数据汇总搭配最终结果
      result[index] = data;
      // 2. 判定是否全部完成
      fulfilled++;
      if (fulfilled === i) {
        res(result);
      }
    }, rej)
  }
  if (i === 0) {
    res([]);
  }

  // resolve();
  // reject();
  return p;
}

Promise.myAll([1, 2, 3, Promise.resolve(123)]).then(res => {
  console.log(res);
  
}, err => {
  console.log('err:',err);
  
})
```