```js
Promise.myAllSettled = function(promises) {
  // 将非 Promise 值转换为 Promise
  const wrappedPromises = promises.map(p => 
    Promise.resolve(p)
      .then(value => ({
        status: 'fulfilled',
        value
      }))
      .catch(reason => ({
        status: 'rejected',
        reason
      }))
  )
  
  return Promise.all(wrappedPromises)
}

const test1 = [
  Promise.resolve(1),
  Promise.reject(2),
  Promise.resolve(3)
]

Promise.myAllSettled(test1)
  .then(results => {
    console.log(results)
  })
```