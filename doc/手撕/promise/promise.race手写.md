任务数组任一完成（无论成功失败）即返回，状态与其一致

该方法的参数是 Promise 实例数组, 然后其 then 注册的回调方法是数组中的某一个 Promise 的状态变为 fulfilled 的时候就执行. 因为 Promise 的状态只能改变一次, 那么我们只需要把 Promise.race 中产生的 Promise 对象的 resolve 方法, 注入到数组中的每一个 Promise 实例中的回调函数中即可

```js

Promise.race = function (proms) {
  return new Promise((resolve, reject) => {
    for (let prom of proms) {
      Promise.resolve(prom).then(resolve, reject);
    }
  })
}

// 测试1: 第一个Promise最先完成（成功）
const test1 = () => {
  console.log('测试1: 第一个Promise最快成功');
  
  const fast = new Promise(resolve => 
    setTimeout(() => resolve('fast'), 100)
  );
  
  const slow = new Promise(resolve => 
    setTimeout(() => resolve('slow'), 500)
  );
  
  Promise.race([fast, slow])
    .then(result => {
      console.log('✓ 结果:', result, '预期: fast');
    })
    .catch(err => {
      console.log('✗ 不应该失败:', err);
    });
};

test1();
```