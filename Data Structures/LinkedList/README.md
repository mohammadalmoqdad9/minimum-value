# Linked List Implementation

## Problem Domain
Implement a **singly linked list** data structure in JavaScript.

This challenge focuses on building and testing a simple Linked List that allows you to:
- Add new nodes
- Remove nodes
- Print the list
- Check if a value exists in the list
- Insert a node at a specific index

---

## Classes and Methods

### 🔹 Node Class
Represents a single element in the list.
```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}