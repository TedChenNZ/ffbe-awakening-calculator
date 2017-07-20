import MATERIALS from './materials';

export function enhancementToType(enhancement) {
  try {
    return MATERIALS[Object.keys(enhancement.cost.materials)[0]].type;
  } catch (e) {
    return '';
  }
}

export function convertEnhancement(rawEnhancement) {
  const enhancement = {};
  const materialIds = Object.keys(rawEnhancement.cost.materials);
  enhancement.type = MATERIALS[materialIds[0]].type;
  enhancement.gil = rawEnhancement.cost.gil;
  const level = rawEnhancement.skill_id_old < 700000 ? 1 : 2;
  enhancement.name = `${rawEnhancement.strings.names[0]} +${level}`;
  enhancement.description = rawEnhancement.strings.description[0];
  Object.keys(rawEnhancement.cost.materials).forEach((materialId) => {
    const material = MATERIALS[materialId];
    enhancement[material.tier] = rawEnhancement.cost.materials[materialId];
  });
  return enhancement;
}


export default {
  enhancementToType,
};
