import { MATERIALS } from './materials';

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

export default {
  enhancementToType,
};
