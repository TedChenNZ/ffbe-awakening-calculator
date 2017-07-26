import { expect } from 'chai';
import { convertUnits } from '../utils';

import units from '../data/units.json';

describe('units', () => {
    it('does something', () => {
      console.log(convertUnits(units));
    });
});
