class CustomSubject {
  observers = [];

  subscribe(fn) {
    this.observers.push(fn);
  }

  fire() {
    this.observers.forEach((fn) => fn.call(this, 'Enver'));
  }
  unsubscribe(obj) {
    this.observers = this.observers.filter((fn) => fn !== obj);
  }
}

//TEST

const subject = new CustomSubject();

// Create observers
const obs1 = (data) => console.log('Obs1 received data', data);
const obs2 = (data) => console.log('Obs2 received data', data);

//Subscribe the observers
subject.subscribe(obs1);
subject.subscribe(obs2);

// Send message
subject.fire();

// Cancel subscription
subject.unsubscribe(obs1);
subject.fire();
