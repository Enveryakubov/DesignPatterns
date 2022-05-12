class Backender {
  profession = 'Backend developer';
  constructor(name) {
    this.name = name;
  }

  get profile() {
    return `I am ${this.name} and I work as ${this.profession}`;
  }
}

class Frontender {
  profession = 'Frontend developer';
  constructor(name) {
    this.name = name;
  }

  get profile() {
    return `I am ${this.name} and I work as a ${this.profession}`;
  }
}

const profConfig = {
  backender: 1,
  frontender: 2,
};

class DeveloperFactory {
  create(name, type) {
    switch (type) {
      case 1:
        return new Backender(name);
      case 2:
        return new Frontender(name);
    }
  }
}

//TEST

const developerFactory = new DeveloperFactory();

const dev1 = developerFactory.create('Fedor', profConfig.backender);
const dev2 = developerFactory.create('Enver', profConfig.frontender);

console.log(dev1.profile);
console.log(dev2.profile);
