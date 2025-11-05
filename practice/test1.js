function Queue() {
  this.arr = []
  this.push = function(value){
    this.arr.push(value)
  }
  this.shift = function(value){
    this.arr.shift(value)
  }
}

let queue = new Queue()
queue.push(1)
queue.push(2)
queue.push(3)
console.log(queue.arr);
queue.shift()
console.log(queue.arr);