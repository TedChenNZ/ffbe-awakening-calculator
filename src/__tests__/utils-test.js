import { expect } from 'chai';
import { convertEnhancement } from '../utils';
import { MATERIAL_TYPES, MATERIAL_TIERS } from '../constants';

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


describe('utils', () => {
  describe('convertEnhancement()', () => {
    describe('correctly converts Tri-beam +1', () => {
      it('correctly converts Tri-beam +1', () => {
        const actual = convertEnhancement(enhancements[202980001]);
        expect(actual).to.have.property('name').which.equals('Tri-beam Laser +1');
        expect(actual).to.have.property('gil').which.equals(500000);
        expect(actual).to.have.property('type').which.equals(MATERIAL_TYPES.POWER);
        expect(actual).to.have.property(MATERIAL_TIERS.T1).which.equals(15);
        expect(actual).to.have.property(MATERIAL_TIERS.T2).which.equals(10);
        expect(actual).to.have.property(MATERIAL_TIERS.T3).which.equals(8);
        expect(actual).to.have.property(MATERIAL_TIERS.T4).which.equals(2);
        expect(actual).to.have.property(MATERIAL_TIERS.T5).which.equals(1);
      });
    });
    describe('correctly converts Tri-beam +2', () => {
      it('correctly converts Tri-beam +1', () => {
        const actual = convertEnhancement(enhancements[202980002]);
        expect(actual).to.have.property('name').which.equals('Tri-beam Laser +2');
        expect(actual).to.have.property('type').which.equals(MATERIAL_TYPES.POWER);
        expect(actual).to.have.property('gil').which.equals(500000);
        expect(actual).to.have.property(MATERIAL_TIERS.T1).which.equals(23);
        expect(actual).to.have.property(MATERIAL_TIERS.T2).which.equals(15);
        expect(actual).to.have.property(MATERIAL_TIERS.T3).which.equals(12);
        expect(actual).to.have.property(MATERIAL_TIERS.T4).which.equals(4);
        expect(actual).to.have.property(MATERIAL_TIERS.T5).which.equals(2);
      });
    });
  });
});
