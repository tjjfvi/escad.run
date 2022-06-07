export class Stack {
  list;

  constructor(values) {
    for (const value of values) {
      this.push(value);
    }
  }

  push(value) {
    this.list = {
      value,
      next: this.list
    };
    return this;
  }

  pop() {
    const value = this.list?.value;
    this.list = this.list?.next;
    return value;
  }

  *[Symbol.iterator]() {
    while (this.list) {
      const value = this.list.value;
      this.list = this.list.next;
      yield value;
    }
  }

}
export function depthFirst(roots, children, thisVal = undefined) {
  const stack = new Stack(roots);

  for (const node of stack) {
    for (const child of children.call(thisVal, node)) {
      stack.push(child);
    }
  }
}