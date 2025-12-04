```js
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
```