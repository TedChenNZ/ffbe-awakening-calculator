import rawUnits from './data/units.json';
import rawEnhancements from './data/enhancements';
import { convertRawData } from './utils';

export function getData() {
  return convertRawData(rawUnits, rawEnhancements);
}

export default {
  getData
}
