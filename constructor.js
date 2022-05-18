function Hero(name, superpower) {
  this.name = name;
  this.superpower = superpower;

  this.getProfile = function () {
    return `My name is ${this.name} and I can ${this.superpower}`;
  };
}

// Comments:
// The same functionality can be implemented with ES6 classes

const thor = new Hero('Thor', 'produce thunders');

console.log(thor.name);
console.log(thor.superpower);
console.log(thor.getProfile());
