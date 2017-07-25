const MATERIAL_TYPES = {
  POWER: 'Power',
  SUPPORT: 'Support',
};

const MATERIAL_TIERS = {
  T1: 't1',
  T2: 't2',
  T3: 't3',
  T4: 't4',
  T5: 't5',
};

const MATERIALS = {
  270002600: {
    type: MATERIAL_TYPES.POWER,
    tier: MATERIAL_TIERS.T1,
  },
  270002700: {
    type: MATERIAL_TYPES.POWER,
    tier: MATERIAL_TIERS.T2,
  },
  270002800: {
    type: MATERIAL_TYPES.POWER,
    tier: MATERIAL_TIERS.T3,
  },
  270002900: {
    type: MATERIAL_TYPES.POWER,
    tier: MATERIAL_TIERS.T4,
  },
  270003000: {
    type: MATERIAL_TYPES.POWER,
    tier: MATERIAL_TIERS.T5,
  },
};

module.exports = {
  MATERIAL_TIERS,
  MATERIAL_TYPES,
  MATERIALS,
};
