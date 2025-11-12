class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  remove(data) {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    } else {
      console.log("Data not found");
    }
  }

  printList() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    let current = this.head;
    let output = "Head -> ";
    while (current) {
      output += `${current.data} -> `;
      current = current.next;
    }
    output += "Null";
    console.log(output);
  }

  includes(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) return true;
      current = current.next;
    }
    return false;
  }

  insertAt(data, index) {
    if (index < 0) {
      console.log("Invalid index");
      return;
    }

    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let count = 0;

    while (current && count < index - 1) {
      current = current.next;
      count++;
    }

    if (!current) {
      console.log("Index out of range");
      return;
    }

    newNode.next = current.next;
    current.next = newNode;
  }
}

module.exports = LinkedList;