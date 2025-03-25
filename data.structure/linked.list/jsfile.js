class node {
  constructor(value, next) {
    this.value = value || null;
    this.next = next || null;
  }
}

class linkedList {
  constructor(head) {
    this.head = null;
    this.length = 0;
  }

  prepend(data) {
    this.head = new node(data, this.head);
    this.length++;
  }

  append(data) {
    let addLastNode = new node(data);
    let current;
    if (!this.head) {
      this.head = addLastNode;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = addLastNode;
    }
    this.length++;
  }

  totalNodes() {
    return this.length;
  }

  firstNode() {
    return this.head;
  }

  lastNode() {
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    return current;
  }

  pop() {
    let current = this.head;
    let previous;

    while (current.next) {
      previous = current;
      current = current.next;
    }
    this.length--;
    previous.next = current.next;
  }

  contains(data) {
    let current = this.head;
    let previous;
    if (!current.next) {
      if (current.value == data) {
        return true;
      }
    }
    while (current.next) {
      previous = current;
      current = current.next;
      if (current.value == data || previous.value == data) {
        return true;
      }
    }
    return false;
  }

  at(index) {
    let current = this.head;
    if (index == 0) {
      return current;
    }
    let count = 0;
    while (current.next) {
      current = current.next;
      count++;
      if (index == count) {
        return current;
      }
    }
  }

  find(data) {
    let current = this.head;
    if (current.value == data) {
      return 0;
    }
    let count = 0;
    while (current.next) {
      current = current.next;
      count++;
      if (current.value == data) {
        return count;
      }
    }
    return null;
  }

  toString() {
    let string = `(${this.head.value}) -> `;
    let current = this.head;
    while (current.next) {
      current = current.next;
      string = string + `(${current.value}) -> `;
    }
    return string + `null`;
  }

  insertAt(data, index) {
    const newNode = new node(data);
    if (index == 0) {
      this.prepend(data);
    }
    let current = this.head;
    let previous;
    let count = 0;
    while (current.next) {
      previous = current;
      current = current.next;
      count++;
      if (count == index) {
        previous.next = newNode;
        newNode.next = current;
        this.length++;
      }
      if (!current.next && count + 1 == index) {
        current.next = newNode;
        this.length++;
        return;
      }
    }
  }

  removeAt(index) {
    let current = this.head;
    if (index == 0) {
      this.head = current.next;
    }
    let previous;
    let count = 0;
    while (current.next) {
      previous = current;
      current = current.next;
      count++;
      if (index == count) {
        previous.next = current.next;
      }
    }
    this.length--;
  }
}

const n1 = new linkedList();
n1.append(100);
n1.append(200);
n1.prepend(500);
n1.prepend(1000);

console.log(n1);
console.log(`total nodes: ${n1.totalNodes()}`);
console.log(`first node: ${n1.firstNode().value}`);
console.log(`last node: ${n1.lastNode().value}`);
// n1.pop();
console.log(n1.contains(200));
console.log(n1.at(1));
console.log(n1.find(200));
n1.insertAt(50, 3);
console.log(n1);
// n1.removeAt(3);
// console.log(n1);
console.log(n1.toString());

const list = new linkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());

function stringToNumber(string) {
  let hashCode = 0;
  for (let i = 0; i < string.length; i++) {
    hashCode += string.charCodeAt(i);
  }
  return hashCode;
}

function hash(name, surname) {
  return stringToNumber(name) + stringToNumber(surname);
}

console.log(hash(`Fred`, `Smith`));
console.log(typeof n1);

const linkedListFn = [];

function appendNode(value) {
  let newNode = {
    value: value,
    next: null,
  };
  if (linkedListFn.length) {
    linkedListFn[linkedListFn.length - 1].next = newNode;
  }
  linkedListFn.push(newNode);
}

function prependNode(value) {
  let newNode = {
    value,
    next: linkedListFn[0],
  };
  linkedListFn.unshift(newNode);
}

function findNode(value) {
  return linkedListFn.findIndex((node) => node.value === value);
}

const node1 = appendNode(100);

const node2 = appendNode(150);

const node3 = appendNode(420);
console.log(findNode(420));

console.log(linkedListFn);

const node4 = prependNode(888);
console.log(linkedListFn);
