import rawUnits from './data/units.json';
import rawEnhancements from './data/enhancements.json';
import { convertRawData } from './utils';

const data = convertRawData(rawUnits, rawEnhancements);

export default data;
