class Stack {
  constructor() {
    this.list = [];
  }

  add(value) {
    this.list.push(value);
  }

  remove() {
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

export default Stack;
