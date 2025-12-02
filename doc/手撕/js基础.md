
## 手写 instanceOf 方法
```js
function myInstanceOf(left,right) {
  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;
  while(proto !== null){
    if(proto === prototype){
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

let arr = [1,2,3]
console.log(myInstanceOf(arr, Array));    // true
console.log(myInstanceOf(arr, Object));   // true  
console.log(myInstanceOf(arr, Function)); // false
```
## 手写 new 操作符
```js
function myNew(constructor, ...args) {
  // 1. 创建一个新对象，并将其原型指向构造函数的 prototype
  const obj = Object.create(constructor.prototype);
  
  // 2. 执行构造函数，将 this 绑定到新创建的对象
  const result = constructor.apply(obj, args);
  
  // 3. 判断构造函数的返回值类型
  // 如果构造函数返回了一个对象，则返回该对象
  // 否则返回新创建的对象
  if (result && (typeof result === 'object' || typeof result === 'function')) {
    return result;
  }
  
  return obj;
}
```

## 手写 Promise.all

## 手写防抖函数

## 手写节流函数

## 手写 call 函数

## 手写 apply 函数

## 手写 bind 函数

## 实现 Ajax 请求

## 实现深拷贝