class PochtaRossii {
  calculateDelivery(pckg) {
    // Some long operation here)
    return '100 RUB';
  }
}
class CDEK {
  calculateDelivery(pckg) {
    // Some long operation here)
    return '300 RUB';
  }
}
class PonyExpress {
  calculateDelivery(pckg) {
    // Some long operation here)
    return '200 RUB';
  }
}

class Delivery {
  company = null;

  setStrategy(strategy) {
    this.company = strategy;
  }

  calculateDelivery(p) {
    return this.company.calculateDelivery(p);
  }
}

//TEST
const packageTest = {
  name: 'posylka',
  from: 'Simferopol',
  to: 'Berlin',
};

const pochtaRosii = new PochtaRossii();
const cdek = new CDEK();
const ponyExpress = new PonyExpress();

const strategyExample = new Delivery();

strategyExample.setStrategy(pochtaRosii);
console.log(strategyExample.calculateDelivery(packageTest));
strategyExample.setStrategy(ponyExpress);
console.log(strategyExample.calculateDelivery(packageTest));
strategyExample.setStrategy(cdek);
console.log(strategyExample.calculateDelivery(packageTest));
