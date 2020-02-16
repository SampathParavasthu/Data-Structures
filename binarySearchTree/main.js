class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  getRootNode() {
    return this.root;
  }

  insert(data) {

    function insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
          return;
        }
        insertNode(node.left, newNode)
      } else {
        if (node.right === null) {
          node.right = newNode;
          return;
        }
        insertNode(node.right, newNode);
      }
    }


    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    insertNode(this.root, newNode);
  }

  remove(data) {
    function findMinNode() {
      if (node.left === null) {
        return node;
      }
      return this.findMinNode(node.left);
    }

    function removeNode(node, key) {
      if (node === null) {
        return null;
      } else if (key < node.data) {
        node.left = removeNode(node.left, key);
        return node;
      } else if (key > node.data) {
        node.right = removeNode(node.right, key);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        if (node.left === null) {
          node = node.right;
          return node;
        }
        if (node.right === null) {
          node = node.left;
          return node;
        }

        let aux = findMinNode(node.right);
        node.data = aux.data;
        node.right = removeNode(node.right, key);
        return node;
      }

    }

    this.root = removeNode(this.root, data);
  }

  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }

  inOrderPrint(node) {
    if (node !== null) {
      this.inOrderPrint(node.left);
      console.log(node.data);
      this.inOrderPrint(node.right);
    }
  }

  preOrderPrint(node) {
    if (node !== null) {
      console.log(node.data);
      this.preOrderPrint(node.left);
      this.preOrderPrint(node.right);
    }
  }

  postOrderPrint(node) {
    this.preOrderPrint(node.left);
    this.preOrderPrint(node.right);
    console.log(node.data);
  }


}

export default BinarySearchTree;