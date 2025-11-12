const LinkedList = require('./linkedList');

describe('LinkedList Tests', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('Add node to the end', () => {
    list.add(10);
    list.add(20);
    expect(list.head.data).toBe(10);
    expect(list.head.next.data).toBe(20);
  });

  test('Remove node by value', () => {
    list.add(5);
    list.add(10);
    list.add(15);
    list.remove(10);
    expect(list.head.next.data).toBe(15);
  });

  test('Includes should return true if value exists', () => {
    list.add(7);
    expect(list.includes(7)).toBe(true);
  });

  test('Insert node at specific index', () => {
    list.add(1);
    list.add(2);
    list.insertAt(5, 1);
    expect(list.head.next.data).toBe(5);
  });
});