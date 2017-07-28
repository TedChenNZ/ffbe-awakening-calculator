import { observable, computed, action } from 'mobx';
import { SUMMARY } from './constants';
import UnitStore from './store/UnitStore';
import data from './unitEnhancementData';

export default class Store {
  @observable _cart = [];
  @observable _inventory = {};

  reset() {
    this._cart = [];
  }

  addToCart(id, server = 'GL') {
    const unitStore = new UnitStore(id, server);
    this._cart.push(unitStore);
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

  @computed get saveFile() {
    const saveFile = {};
    saveFile.cart = this._cart.map(item => item.saveFile);
    saveFile.inventory = this._inventory;
    return saveFile;
  }

  @action loadSaveFile(saveFile) {
    const cart = saveFile.cart.map(unitSaveFile =>
      new UnitStore(unitSaveFile.unitId, unitSaveFile.server, unitSaveFile.cart));
    this._cart = cart;
    this._inventory = saveFile.inventory;
  }
}

// const storeSingleton = new Store(getData());
// export default storeSingleton;
