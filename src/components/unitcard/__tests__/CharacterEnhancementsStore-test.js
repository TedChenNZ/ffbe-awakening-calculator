import { expect } from 'chai';
import CharacterEnhancementsStore from '../CharacterEnhancementsStore';

const enhancements = {
  202980001: {
    name: 'Tri-beam Laser',
    skill_id_old: 202980,
    skill_id_new: 701170,
    cost: {
      gil: 500000,
      materials: {
        270002600: 15,
        270002700: 10,
        270002800: 8,
        270002900: 2,
        270003000: 1,
      },
    },
    strings: {
      names: [
        'Tri-beam Laser',
        '三重雷射',
        '트라이 레이저',
        'Laser triple',
        'Triple-Jackpot',
        'Láser triple',
      ],
      description: [
        'Increase hit count (mid)',
        '提高命中次數(中)',
        '히트 수 상승(중)',
        'Augmente le nombre de coups (moyen)',
        'Erhöht die Trefferzahl (mittel)',
        'Mayor número de golpes (bastante)',
      ],
    },
  },
  202980002: {
    name: 'Tri-beam Laser',
    skill_id_old: 701170,
    skill_id_new: 701180,
    cost: {
      gil: 500000,
      materials: {
        270002600: 23,
        270002700: 15,
        270002800: 12,
        270002900: 4,
        270003000: 2,
      },
    },
    strings: {
      names: [
        'Tri-beam Laser',
        '三重雷射',
        '트라이 레이저',
        'Laser triple',
        'Triple-Jackpot',
        'Láser triple',
      ],
      description: [
        'Chance of increasing damage when activated',
        '使用時有機率提高傷害',
        '발동 시 일정 확률로 피해량 증가',
        "Activé, ajoute une chance d'augmenter les dégâts",
        'Chance auf steigenden Schaden bei Aktivierung',
        'Posibilita un daño mayor cuando está activado',
      ],
    },
  },
};

const character = {
  name: 'Ace (GL)',
};

describe('CharacterEnhancementsStore', () => {
  it('adds to the cart', () => {
    const store = new CharacterEnhancementsStore(character, enhancements);
    store.addToCart(202980002);
    expect(store.cart).to.have.lengthOf(1);
    expect(store.cart[0]).to.deep.equal(store.enhancements['202980002']);
  });
  it('removes from the cart', () => {
    const store = new CharacterEnhancementsStore(character, enhancements);
    store.addToCart(202980002);
    store.removeFromCart(202980002);
    expect(store.cart).to.have.lengthOf(0);
  });
  it('calculates the summary after adding and removing', () => {
    const store = new CharacterEnhancementsStore(character, enhancements);
    store.addToCart(202980001);
    expect(store.summary).to.have.nested.property('power.t1').which.equals(15);
    store.addToCart(202980002);
    expect(store.summary).to.have.nested.property('power.t1').which.equals(15 + 23);
    store.removeFromCart(202980002);
    expect(store.summary).to.have.nested.property('power.t1').which.equals(15);
  });
});
