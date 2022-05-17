class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  setSalary(amount) {
    this.salary = amount;
  }

  getSalary() {
    console.log(this.salary);
  }

  accept(fn) {
    fn(this);
  }
}

const increaseSalaryBy10 = (emp) => (emp.salary = Math.floor(emp.salary * 1.1));

const bob = new Employee('Bob', 50000);

bob.getSalary();
bob.accept(increaseSalaryBy10);
bob.getSalary();
