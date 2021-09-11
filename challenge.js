class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(number) {
    let node = new Node(number);
    let currentNode;

    if (this.head === null) {
      this.head = node;

    } else {
      currentNode = this.head;

      while (currentNode.next_node) {
        currentNode = currentNode.next_node;
      }
      currentNode = currentNode.next_node;
    }
    this.size++;
  }

  get(index) {
    let currentNode = this.head;
    let count = 0;

    while (count < index) {
      count++;
      currentNode = currentNode.next_node;
    }
    return currentNode.value;
  }
}

const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list.get(1));
// => 5

module.exports = LinkedList;
