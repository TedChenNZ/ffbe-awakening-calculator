import { observable, computed } from 'mobx';
import { SUMMARY } from './constants';

export default class Store {
  @observable _cart = [];
  @observable _inventory = {};
  @observable _data = {};

  constructor(data) {
    this._data = data;
  }

  reset() {
    this._cart = [];
  }

  addToCart(id) {
    const enhancement = this._enhancements[id.toString()];
    this._cart.push(enhancement);
  }

  removeFromCart(id) {
    this._cart = this._cart.filter(item => item.id !== id.toString());
  }

  @computed get summary() {
    const summary = JSON.parse(JSON.stringify(SUMMARY)); // Clone SUMMARY
    this._cart.forEach((characterStore) => {
      console.log(characterStore.summary);
    });
    return summary;
  }

  @computed get cart() {
    return this._cart;
  }

  @computed get inventory() {
    return this._inventory;
  }
}

// const storeSingleton = new Store(getData());
// export default storeSingleton;
