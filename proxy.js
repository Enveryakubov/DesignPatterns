class CriptoCurrencyApi {
  getValue(coin) {
    console.log('Calling external API...');
    switch (coin) {
      case 'Bitcoin':
        return '$10 000';
      case 'Etherium':
        return '$5 000';
      case 'Litecoin':
        return '$3 000';
    }
  }
}

class CryptoCurrencyProxy {
  cache = {};
  api = new CriptoCurrencyApi();

  getValue(val) {
    if (this.cache[val]) {
      console.log('The value is retrived from cache');
      return this.cache[val];
    }
    this.cache[val] = this.api.getValue(val);
    return this.cache[val];
  }
}

const proxy = new CryptoCurrencyProxy();

console.log(proxy.getValue('Bitcoin'));
console.log(proxy.getValue('Bitcoin'));
console.log(proxy.getValue('Etherium'));
console.log(proxy.getValue('Etherium'));
console.log(proxy.getValue('Bitcoin'));
