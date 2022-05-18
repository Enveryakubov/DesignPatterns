const car = {
  numOfWheels: 4,
  start: () => 'started engine',
  stop: () => 'stopped engine',
};

// Lets extend the object

const bmw = Object.assign(car, {
  model: 'BMW',
  maxSpeed: 220,
  extra: () => 'Can do wzzzz',
});

console.log(bmw.numOfWheels);
console.log(bmw.start());
console.log(bmw.extra());
