class Node {
  constructor(coordinate, hitBool) {
    this.coordinate = coordinate;
    this.hitBool = hitBool;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  cosntructor() {
    this.root = null;
    this.tail = null;
  }

  addNode(value, hitBool) {
    if (!this.root) {
      const newNode = new Node(value, hitBool);
      this.root = newNode;
      this.tail = this.root;
    } else {
      let currentNode = this.tail;
      const newNode = new Node(value, hitBool);
      newNode.prev = currentNode;
      currentNode.next = newNode;
      this.tail = this.tail.next;
    }
  }

  getRoot() {
    return this.root;
  }

  getTail() {
    return this.tail;
  }

  searchForCoordinates(x, y) {
    let currentNode = this.root;
    while (currentNode) {
        if (currentNode.coordinate[0] === x && currentNode.coordinate[1] === y) {
            return currentNode;
        } else {
            currentNode = currentNode.next;
        }
    }
    return null;
  }

  printList() {
    let currentNode = this.root;
    let str = "";
    while (currentNode) {
        str += `${currentNode.coordinate}/${currentNode.hitBool} `;
        currentNode = currentNode.next;
    }
    console.log(str);
  }
}


module.exports = { LinkedList };