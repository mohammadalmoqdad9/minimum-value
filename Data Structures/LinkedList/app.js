const LinkedList = require("./linkedList");

const list = new LinkedList();

list.add(5);
list.add(10);
list.add(20);
list.add(30);

list.printList(); // Head -> 5 -> 10 -> 20 -> 30 -> Null

list.remove(10);
list.printList(); // Head -> 5 -> 20 -> 30 -> Null

console.log(list.includes(20)); // true
console.log(list.includes(10)); // false

list.insertAt(15, 2);
list.printList(); // Head -> 5 -> 20 -> 15 -> 30 -> Null