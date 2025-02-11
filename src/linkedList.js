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

  getList() {
    const legend = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    let currentNode = this.tail;
    let moveArray = [];
    while (currentNode && moveArray.length < 10) {
        moveArray.push({
          move: `${legend[currentNode.coordinate[0]]}${Math.abs(10 - currentNode.coordinate[1])}`,
          hitBool: currentNode.hitBool
        });
        currentNode = currentNode.prev;
    }
    return moveArray.reverse();
  }
}


module.exports = { LinkedList };