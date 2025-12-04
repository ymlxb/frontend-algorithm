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

const PENDING = 'pengding';
const RESOLVE = 'resolve';
const REJECTED = 'rejected';

class MyPromise {
  /**
   * 
   * @param {Function} executor  任务执行器
   */
  constructor(executor) {
    this._state = PENDING; // 状态
    this._value = undefined; // 数据
   try {
     executor(this._resolve.bind(this), this._reject.bind(this));
   } catch (error) {
     this._reject(error)
   }
  }
  /**
   * 
   * @param {String} newState 新的状态
   * @param {any} value 相关数据
   */
  _changeState(newState, value) {
    if (this._state !== PENDING) return;
    this._state = newState;
    this._value = value;
  }

  _resolve(data) {
   this._changeState(RESOLVE,data)
  }
  _reject(reason) {
    this._changeState(REJECTED,reason)
    
  }
}

const pro = new MyPromise((resolve, reject) => {
  // resolve(123);
  // reject(234)
  throw 123;
})

console.log(pro);
