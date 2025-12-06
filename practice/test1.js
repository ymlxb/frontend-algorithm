// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// function myNew (constructor, ...args) {
//   if (typeof constructor !== 'function') {
//     throw new TypeError('第一个参数必须是函数');
//   }
//   const obj = Object.create(constructor.prototype);
//   const result = constructor.apply(obj, args);
//   if (result && (typeof result === 'function' || typeof result === 'object')) {
//     return result;
//   }
//   return obj;
// }

// const person = myNew(Person,'张三', 25);
// console.log('person.name:', person.name);
// console.log('person.age:', person.age);

// function myInstanceOf(left, right) {
//   let proto = Object.getPrototypeOf(left);
//   let prototype = right.prototype;
//   while (proto !== null) {
//     if (proto === prototype) {
//       return true;
//     }

//     proto = Object.getPrototypeOf(proto);
//   }
//   return false;
// }

// let arr = [1,2,3]
// console.log(myInstanceOf(arr, Array));    // true
// console.log(myInstanceOf(arr, Object));   // true
// console.log(myInstanceOf(arr, Function)); // false

// function myNew(constructor, ...args) {
//   if (typeof constructor !== 'function') {
//     throw TypeError('第一个参数必须是函数');
//   }
//   const obj = Object.create(constructor.prototype);
//   let result = constructor.apply(obj, args);
//   if (result && (typeof result === 'function' || typeof result === 'object')) {
//     return result;
//   }
//   return obj;
// }

// function curry(fn, ...args) {
//   return fn.length <= args.length ? fn(args) : curry.bind(null, fn, ...args)
// }

// const invertCase = (str) =>
//   str
//     .split("")
//     .map((char) =>
//       char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
//     )
//     .join("");
// console.log(invertCase("Hello World!")); // hELLO wORLD!
// console.log(invertCase("JavaScript")); // jAVAsCRIPT


// 发布订阅模式

// const EventBus = {
//   events: {},

//   on(event, fn) {
//     (this.events[event] || (this.events[event] = [])).push(fn)
//   },

//   emit(event, ...args) {
//     this.events[event]?.forEach(fn => fn(...args))
//   },

//   off(event, fn) {
//     this.events[event] = this.events[event]?.filter(f => f !== fn)
//   }
// }

// console.log('=== 1. 基础订阅发布测试 ===')

// // 测试 1: 基本订阅发布
// EventBus.on('message', (msg) => {
//   console.log('监听器1收到消息:', msg)
// })

// EventBus.on('message', (msg) => {
//   console.log('监听器2收到消息:', msg)
// })

// console.log('发布消息:')
// EventBus.emit('message', 'Hello World!')
// // 预期输出:
// // 监听器1收到消息: Hello World!
// // 监听器2收到消息: Hello World!

// // 测试 2: 传递多个参数
// EventBus.on('user', (name, age, city) => {
//   console.log(`用户信息: ${name}, ${age}岁, 来自${city}`)
// })

// console.log('\n发布带多个参数的事件:')
// EventBus.emit('user', '张三', 25, '北京')
// // 预期输出: 用户信息: 张三, 25岁, 来自北京
// console.log('\n=== 2. 取消订阅测试 ===')

// // 定义要取消的回调函数
// const callbackToRemove = (msg) => {
//   console.log('这个回调会被移除:', msg)
// }

// const anotherCallback = (msg) => {
//   console.log('这个回调会保留:', msg)
// }

// // 订阅事件
// EventBus.on('test', callbackToRemove)
// EventBus.on('test', anotherCallback)

// console.log('第一次发布:')
// EventBus.emit('test', '第一次触发')
// // 预期输出:
// // 这个回调会被移除: 第一次触发
// // 这个回调会保留: 第一次触发

// // 取消订阅特定的回调
// EventBus.off('test', callbackToRemove)

// console.log('取消后再次发布:')
// EventBus.emit('test', '第二次触发')
// // 预期输出:
// // 这个回调会保留: 第二次触发
// // (注意: "这个回调会被移除" 不会出现)

// const PENDING = 'pengding';
// const RESOLVE = 'resolve';
// const REJECTED = 'rejected';

// class MyPromise {
//   /**
//    * 
//    * @param {Function} executor  任务执行器
//    */
//   constructor(executor) {
//     this._state = PENDING; // 状态
//     this._value = undefined; // 数据
//    try {
//      executor(this._resolve.bind(this), this._reject.bind(this));
//    } catch (error) {
//      this._reject(error)
//    }
//   }

//   then(onFulfilled, onRejected) {
//     return new Promise((resolve, reject) => {});
//   }
//   /**
//    * 
//    * @param {String} newState 新的状态
//    * @param {any} value 相关数据
//    */
//   _changeState(newState, value) {
//     if (this._state !== PENDING) return;
//     this._state = newState;
//     this._value = value;
//   }

//   _resolve(data) {
//    this._changeState(RESOLVE,data)
//   }
//   _reject(reason) {
//     this._changeState(REJECTED,reason)
    
//   }
// }

// const pro = new MyPromise((resolve, reject) => {
//   // resolve(123);
//   // reject(234)
//   throw 123;
// })

// console.log(pro);


// Promise.myAll = function (proms) {
//   let res, rej;
//   const p = new Promise((resolve, reject) => {
//     res = resolve;
//     rej = reject;
//   })
//   let i = 0;
//   let fulfilled = 0;
//   let result = [];
//   for(let prom of proms) {
//     let index = i;
//     i++;
//     Promise.resolve(prom).then((data) => {
//       // 1. 完成的数据汇总搭配最终结果
//       result[index] = data;
//       // 2. 判定是否全部完成
//       fulfilled++;
//       if (fulfilled === i) {
//         res(result);
//       }
//     }, rej)
//   }
//   if (i === 0) {
//     res([]);
//   }

//   // resolve();
//   // reject();
//   return p;
// }

// Promise.myAll([1, 2, 3, Promise.resolve(123)]).then(res => {
//   console.log(res);
  
// }, err => {
//   console.log('err:',err);
  
// })

// Promise.myAllSettled = function(promises) {
//   // 将非 Promise 值转换为 Promise
//   const wrappedPromises = promises.map(p => 
//     Promise.resolve(p)
//       .then(value => ({
//         status: 'fulfilled',
//         value
//       }))
//       .catch(reason => ({
//         status: 'rejected',
//         reason
//       }))
//   )
  
//   return Promise.all(wrappedPromises)
// }

// const test1 = [
//   Promise.resolve(1),
//   Promise.reject(2),
//   Promise.resolve(3)
// ]

// Promise.myAllSettled(test1)
//   .then(results => {
//     console.log(results)
//   })

// Promise.race = function (proms) {
//   return new Promise((resolve, reject) => {
//     for (let prom of proms) {
//       Promise.resolve(prom).then(resolve, reject);
//     }
//   })
// }

// // 测试1: 第一个Promise最先完成（成功）
// const test1 = () => {
//   console.log('测试1: 第一个Promise最快成功');
  
//   const fast = new Promise(resolve => 
//     setTimeout(() => resolve('fast'), 100)
//   );
  
//   const slow = new Promise(resolve => 
//     setTimeout(() => resolve('slow'), 500)
//   );
  
//   Promise.race([fast, slow])
//     .then(result => {
//       console.log('✓ 结果:', result, '预期: fast');
//     })
//     .catch(err => {
//       console.log('✗ 不应该失败:', err);
//     });
// };

// test1();

// function debounce(fn, delay) {
//   let timerId;
//   return () => {
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       fn();
//     },delay);
//   }
// }

// let count = 0;
// const log = () => {
//   count++;
//   console.log(`函数执行第 ${count} 次，时间:`, new Date().toLocaleTimeString());
// };

// // 创建防抖函数
// const debouncedLog = debounce(log, 1000);

// // 快速连续调用
// console.log('快速连续调用5次:');
// debouncedLog();
// debouncedLog();
// debouncedLog();
// debouncedLog();
// debouncedLog();

// // 等待结果
// setTimeout(() => {
//   console.log('1.5秒后 count =', count); // 应该是 1
// }, 1500);

function throttle(fn, wait) {
  let lastTime = null;
  return function(...arges) {
    const now = Date.now();
    if (lastTime === null || now - lastTime > wait) {
      // 技能之前没用过，或者技能 CD 已好
      fn.apply(this, arges);
      lastTime = now; 
    }
  }
}

// 创建测试函数
let count = 0;
const log = () => {
  count++;
  console.log(`函数第 ${count} 次执行，时间:`, new Date().toLocaleTimeString());
};

// 创建节流函数（1秒内只能执行一次）
const throttledLog = throttle(log, 1000);

console.log('快速连续调用10次（1秒内）:');
const startTime = Date.now();
for (let i = 0; i < 10; i++) {
  throttledLog();
}

// 等待查看结果
setTimeout(() => {
  console.log(`1秒后 count = ${count} (应该为1)`);
  
  console.log('\n2秒后再调用一次:');
  throttledLog();
  
  setTimeout(() => {
    console.log(`再过0.5秒 count = ${count} (应该为2)`);
  }, 500);
}, 1000);