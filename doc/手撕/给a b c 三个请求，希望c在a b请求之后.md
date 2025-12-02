```js

// 1. promise.all
function a() { return fetch('/api/a'); }      // 获取数据A
function b() { return fetch('/api/b'); }      // 获取数据B  
function c(dataA, dataB) {                    // 用数据A和B生成最终结果
  return fetch('/api/combine', {
    method: 'POST',
    body: JSON.stringify({ dataA, dataB })
  });
}

Promise.all([a(), b()])
  .then(([resultA , resultB]) => {
    return c(resultA , resultB)
  })
  .then( finalResult => {
    console.log('最终结果:',finalResult);
    
  })

  // 2. async/await
  async function handleRequests() {
    try {
      const [resultA, resultB] = await Promise.all([[a(), b()]]);
      const resultC = await c(resultA,resultB);
      console.log('最终结果:',resultC);
    } catch (error) {
      console.error('请求失败:',error);
    }
   }
```