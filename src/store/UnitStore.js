import { observable, computed } from 'mobx';
import { updateSummary } from '../utils';
import { SUMMARY } from '../constants';
import data from '../unitEnhancementData';

export default class UnitStore {
  @observable _cart = [];
  @observable _unit = {};

  constructor(unitId, server, cart = []) {
    this._unit = data[unitId];
    this._cart = cart;
  }

  reset() {
    this._cart = [];
  }

  addToCart(id) {
    const enhancement = this._unit.enhancements[id.toString()];
    this._cart.push(enhancement);
  }

  removeFromCart(id) {
    this._cart = this._cart.filter(item => item.id !== id.toString());
  }

  @computed get summary() {
    let summary = JSON.parse(JSON.stringify(SUMMARY)); // Clone SUMMARY
    this._cart.forEach((enhancement) => {
      console.log(enhancement);
      summary = updateSummary(summary, enhancement);
    });
    return summary;
  }

  @computed get unit() {
    return this._unit;
  }

  @computed get cart() {
    return this._cart;
  }

}
