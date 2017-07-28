import { MATERIALS } from './data/materials';

export function enhancementToType(enhancement) {
  try {
    return MATERIALS[Object.keys(enhancement.cost.materials)[0]].type;
  } catch (e) {
    return '';
  }
}

export function convertEnhancement(rawEnhancement, id = '') {
  const enhancement = {};
  const materialIds = Object.keys(rawEnhancement.cost.materials);
  enhancement.type = MATERIALS[materialIds[0]].type;
  enhancement.gil = rawEnhancement.cost.gil;
  const level = rawEnhancement.skill_id_old < 700000 ? 1 : 2;
  enhancement.name = `${rawEnhancement.strings.names[0]} +${level}`;
  enhancement.description = rawEnhancement.strings.description[0];
  enhancement.skill_id_old = rawEnhancement.skill_id_old;
  enhancement.skill_id_new = rawEnhancement.skill_id_new;
  Object.keys(rawEnhancement.cost.materials).forEach((materialId) => {
    const material = MATERIALS[materialId];
    enhancement[material.tier] = rawEnhancement.cost.materials[materialId];
  });
  enhancement.id = id.toString();
  return enhancement;
}

export function convertEnhancements(rawEnhancements) {
  const enhancements = {};
  Object.keys(rawEnhancements).forEach((key) => {
    enhancements[key] = convertEnhancement(rawEnhancements[key], key);
  });
  return enhancements;
}


export function convertUnit(rawUnit, id = '') {
  const unit = {};
  unit.name = rawUnit.name;
  unit.id = id.toString();
  return unit;
}

export function convertUnits(rawUnits) {
  const units = {};
  Object.keys(rawUnits).forEach((key) => {
    units[key] = convertUnit(rawUnits[key], key);
  });
  return units;
}

export function convertRawData(rawUnits, rawEnhancements) {
  const data = {};
  const units = convertUnits(rawUnits);
  Object.keys(rawEnhancements).forEach((unitId) => {
    data[unitId] = JSON.parse(JSON.stringify(units[unitId]));
    data[unitId].enhancements = convertEnhancements(rawEnhancements[unitId]);
  });
  return data;
}

export function updateSummary(summary, enhancement) {
  const updatedSummary = summary;
  updatedSummary[enhancement.type.toLowerCase()].T1 += enhancement.T1 || 0;
  updatedSummary[enhancement.type.toLowerCase()].T2 += enhancement.T2 || 0;
  updatedSummary[enhancement.type.toLowerCase()].T3 += enhancement.T3 || 0;
  updatedSummary[enhancement.type.toLowerCase()].T4 += enhancement.T4 || 0;
  updatedSummary[enhancement.type.toLowerCase()].T5 += enhancement.T5 || 0;
  updatedSummary.gil += enhancement.gil;
  return updatedSummary;
}

export default {
  enhancementToType,
};
