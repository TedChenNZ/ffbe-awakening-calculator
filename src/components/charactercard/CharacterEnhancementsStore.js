import { observable, computed, action, toJS } from 'mobx';
import { convertEnhancements, updateSummary } from '../../utils';
import { SUMMARY } from '../../constants';

export default class CharacterEnhancementsStore {
  @observable _character = {};
  @observable _cart = [];
  @observable _enhancements = {};


  constructor(character, rawEnhancements) {
    this._character = character;
    this._enhancements = convertEnhancements(rawEnhancements);
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
    let summary = JSON.parse(JSON.stringify(SUMMARY)); // Clone SUMMARY
    this._cart.forEach((enhancement) => {
      summary = updateSummary(summary, enhancement);
    });
    return summary;
  }


  @computed get enhancements() {
    return this._enhancements;
  }

  @computed get cart() {
    return this._cart;
  }

}
