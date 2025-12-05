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

const EventBus = {
  events: {},

  on(event, fn) {
    (this.events[event] || (this.events[event] = [])).push(fn)
  },

  emit(event, ...args) {
    this.events[event]?.forEach(fn => fn(...args))
  },

  off(event, fn) {
    this.events[event] = this.events[event]?.filter(f => f !== fn)
  }
}

console.log('=== 1. 基础订阅发布测试 ===')

// 测试 1: 基本订阅发布
EventBus.on('message', (msg) => {
  console.log('监听器1收到消息:', msg)
})

EventBus.on('message', (msg) => {
  console.log('监听器2收到消息:', msg)
})

console.log('发布消息:')
EventBus.emit('message', 'Hello World!')
// 预期输出:
// 监听器1收到消息: Hello World!
// 监听器2收到消息: Hello World!

// 测试 2: 传递多个参数
EventBus.on('user', (name, age, city) => {
  console.log(`用户信息: ${name}, ${age}岁, 来自${city}`)
})

console.log('\n发布带多个参数的事件:')
EventBus.emit('user', '张三', 25, '北京')
// 预期输出: 用户信息: 张三, 25岁, 来自北京
console.log('\n=== 2. 取消订阅测试 ===')

// 定义要取消的回调函数
const callbackToRemove = (msg) => {
  console.log('这个回调会被移除:', msg)
}

const anotherCallback = (msg) => {
  console.log('这个回调会保留:', msg)
}

// 订阅事件
EventBus.on('test', callbackToRemove)
EventBus.on('test', anotherCallback)

console.log('第一次发布:')
EventBus.emit('test', '第一次触发')
// 预期输出:
// 这个回调会被移除: 第一次触发
// 这个回调会保留: 第一次触发

// 取消订阅特定的回调
EventBus.off('test', callbackToRemove)

console.log('取消后再次发布:')
EventBus.emit('test', '第二次触发')
// 预期输出:
// 这个回调会保留: 第二次触发
// (注意: "这个回调会被移除" 不会出现)

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
