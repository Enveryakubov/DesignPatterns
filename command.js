class MathOperations {
  constructor(initialValue = 0) {
    this.result = initialValue;
  }

  add(num) {
    this.result += num;
    return this.result;
  }
  sub(num) {
    this.result -= num;
    return this.result;
  }
  multiply(num) {
    this.result *= num;
    return this.result;
  }
}

class Command {
  history = [];
  constructor(subject) {
    this.subject = subject;
  }
  execute(command, arg) {
    this.history.push(command);
    return this.subject[command](arg);
  }
}

//TEST

const subject = new MathOperations();

const mathStore = new Command(subject);

console.log(mathStore.execute('add', 5));
console.log(mathStore.execute('multiply', 5));
console.log(mathStore.execute('sub', 15));
console.log(mathStore.history);
