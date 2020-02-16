class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (value === null) return;
    const node = new Node(value);
    let current = this.head;

    if (current === null) {
      this.head = node;
      return;
    }

    while (current && current.next) {
      current = current.next;
    }
    current.next = node;

  }

  remove(value) {
    if (value === null) return false;
    let current = this.head;
    let previous = current;
    if (current.value === value) {
      this.head = this.head.next;
      return true;
    }

    while (current && current.value !== value) {
      previous = current;
      current = current.next;
    }
    if (current === null) {
      return false;
    }

    previous.next = current.next;
    return true;

  }

  search(value) {
    if (value === null) return false;
    let current = this.head;
    while (current && current.value !== value) {
      current = current.next;
    }

    if (current === null) {
      return false;
    }
    return true;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

}

export default LinkedList;
