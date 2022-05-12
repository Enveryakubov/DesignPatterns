class DatabaseConnection {
  static instance = null;
  randomNumber = null;

  constructor() {
    if (DatabaseConnection.instance) return DatabaseConnection.instance;
    this.randomNumber = Math.floor(Math.random() * 100000);
    return (DatabaseConnection.instance = this);
  }
}

const conn1 = new DatabaseConnection();
const conn2 = new DatabaseConnection();
const conn3 = new DatabaseConnection();

// TESTS

console.log(conn1 === conn2);

console.log(conn1.randomNumber);
console.log(conn2.randomNumber);
console.log(conn3.randomNumber);
