class BinaryHeap {
  constructor() {
    this.data = []
  }

  parent(i) {
    return Math.floor((i - 1) / 2)
  }

  child(i, k) {
    return i * 2 + k
  }

  insert(value) {
    const length = this.data.length
    this.data.push(value)
    this.heapifyUp(length - 1)
  }

  heapifyUp(i) {
    const insertValue = this.data[i]

    while (i > 0 && insertValue > this.data[this.parent(i)]) {
      this.data[i] = this.data[this.parent(i)]
      i = this.parent(i)
    }

    this.data[i] = insertValue
  }

  delete(i) {
    const maxElement = this.data[i]

    this.data[i] = this.data[this.data.length - 1]
    this.data.pop()

    this.heapifyDown(i)

    return maxElement
  }

  heapifyDown(i) {
    const temp = this.data[i]

    while (this.child(i, 1) < this.data.length) {
      const child = this.maxChild(i)

      if (temp >= this.data[child]) {
        break
      }

      this.data[i] = this.data[child]
      i = child
    }

    this.data[i] = temp
  }

  maxChild(i) {
    const leftChild = this.child(i, 1)
    const rightChild = this.child(i, 2)

    return this.data[leftChild] > this.data[rightChild] ? leftChild : rightChild
  }

  printHeap() {
    console.log(this.data)
  }
}

const maxHeap = new BinaryHeap(10);

maxHeap.insert(10);
maxHeap.insert(4);
maxHeap.insert(9);
maxHeap.insert(1);
maxHeap.insert(7);
maxHeap.insert(5);
maxHeap.insert(3);

maxHeap.printHeap();
maxHeap.delete(5);
maxHeap.printHeap();
maxHeap.delete(2);
maxHeap.printHeap();