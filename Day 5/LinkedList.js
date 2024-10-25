class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
  }
  append(a) {
    let NewNode = new Node(a);
    if (this.head == null) {
      this.head = NewNode;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = NewNode;
    }
  }
}

let data = new SingleLinkedList();
data.append(10);
data.append(20);
data.append(30);

console.log(data);
