class Iterator {
  index = 0;
  constructor(list) {
    this.list = list;
  }
  reachEnd() {
    return this.index === this.list.length;
  }
  next() {
    if (this.reachEnd()) return 'The list is exhaused';
    return this.list[this.index++];
  }
  restore() {
    this.index = 0;
    return 'The iterator is restored';
  }
}

//TEST
const listSample = [1, 'Enver', { test: 'test' }];

const iter = new Iterator(listSample);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

console.log(iter.restore());
console.log(iter.next());
