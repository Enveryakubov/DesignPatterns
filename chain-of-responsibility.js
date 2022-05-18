class MathOperations {
  constructor(initialValue = 0) {
    this.total = initialValue;
  }

  add(num) {
    this.total += num;
    return this;
  }

  sub(num) {
    this.total -= num;
    return this;
  }
  multiply(num) {
    this.total *= num;
    return this;
  }
}

//TEST
const test = new MathOperations();

console.log(test.add(3).multiply(5).sub(5).total);
