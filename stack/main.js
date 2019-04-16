class Stack {
  constructor() {
    this.list = [];
  }

  push(value) {
    this.list.push(value);
  }

  pop() {
    if (this.list.length) {
      this.list.pop();
    }
    return 'Stack is empty';
  }

  peek() {
    if (this.list.length) {
      return this.list[this.list.length - 1];
    }
    return 'Stack is empty';
  }

  print() {
    return this.list;
  }

  get size() {
    return this.list.length;
  }
}

let stack = new Stack();

console.log(stack.size);
stack.push(1);
stack.push(2);
console.log(stack.peek());
stack.push(3);
console.log(stack.size);
console.log(stack.print());
stack.pop();
console.log(stack.size);
console.log(stack.print());
