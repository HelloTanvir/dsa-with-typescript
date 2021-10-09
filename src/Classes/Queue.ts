class Queue {
  constructor(private collection: any[] = []) {}

  // add a value at the end of the queue
  enqueue(value: any) {
    this.collection.push(value);
  }

  // remove a value from the beginning of the queue
  dequeue() {
    return this.collection.shift();
  }

  // show the queue
  print() {
    console.log(this.collection);
  }

  // show the first value of the queue
  front() {
    return this.collection[0];
  }

  // get the size of the queue
  size() {
    return this.collection.length;
  }

  // check if the queue is empty
  isEmpty() {
    return this.collection.length === 0;
  }
}

const testQueue = () => {
  const queue = new Queue();
  queue.enqueue("a");
  queue.enqueue("b");
  console.log(queue.size());
  console.log(queue.isEmpty());
  queue.print();
  queue.dequeue();
  console.log(queue.size());
  console.log(queue.isEmpty());
  queue.print();
  queue.dequeue();
  console.log(queue.isEmpty());
};

export default testQueue;
