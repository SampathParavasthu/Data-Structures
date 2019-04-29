class Queue {
  constructor() {
    this.list = [];
  }

  add(value) {
    this.list.unshift(value);
  }

  remove() {
    this.list.length && this.list.shift();
  }

  print() {
    return this.list.length > 0 ? this.list : 'Queue is empty';
  }

  get size() {
    return this.list.length;
  }
}

export default Queue;
