export default class Stack {
  constructor(
    private storage: { [key: number]: any } = {},
    private count: number = 0
  ) {}

  // adds a value at the end of the stack
  push(value: any) {
    this.storage[this.count] = value;
    this.count++;
  }

  // removes a value from the end of the stack
  pop() {
    if (this.count === 0) return undefined;

    this.count--;
    const removedValue = this.storage[this.count];
    delete this.storage[this.count];
    return removedValue;
  }

  // show the value of the end of the stack'
  peek() {
    return this.storage[this.count - 1];
  }

  // show the length of the stack
  length() {
    return this.count;
  }
}
