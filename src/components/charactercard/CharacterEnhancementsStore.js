import { observable, computed, action, toJS } from 'mobx';
import { convertEnhancements } from '../../utils';




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
    const enhancement = this._enhancements[id.toString()];
  }

  @computed get summary() {
    const summary = {
      power: {t1: 0, t2: 0, t3: 0, t4: 0, t5: 0,},
      support: {t1: 0, t2: 0, t3: 0, t4: 0, t5: 0,},
      healing: {t1: 0, t2: 0, t3: 0, t4: 0, t5: 0,},
      guard: {t1: 0, t2: 0, t3: 0, t4: 0, t5: 0,},
      tech: {t1: 0, t2: 0, t3: 0, t4: 0, t5: 0,},
      black: {t1: 0, t2: 0, t3: 0, t4: 0, t5: 0,},
      white: {t1: 0, t2: 0, t3: 0, t4: 0, t5: 0,},
      gil: 0,
    };

    this._cart.forEach((enhancement) => {
      summary[enhancement.type.toLowerCase()].t1 += enhancement.t1;
      summary[enhancement.type.toLowerCase()].t2 += enhancement.t2;
      summary[enhancement.type.toLowerCase()].t3 += enhancement.t3;
      summary[enhancement.type.toLowerCase()].t4 += enhancement.t4;
      summary[enhancement.type.toLowerCase()].t5 += enhancement.t5;
      summary.gil += enhancement.gil;
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
