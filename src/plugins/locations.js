// 地点配置
export const locations = [
  {
    id: 'newbie_village',
    name: '新手村',
    description: '灵气稀薄的凡人聚集地，适合初入修仙之道的修士。',
    minLevel: 1,
    spiritCost: 50,
    rewards: [
      { type: 'spirit_stone', chance: 0.3, amount: [1, 3] },
      { type: 'herb', chance: 0.3, amount: [1, 2] },
      { type: 'cultivation', chance: 0.2, amount: [5, 10] },
      { type: 'pill_fragment', chance: 0.2, amount: [1, 1] }
    ]
  },
  // 筑基期地点
  {
    id: 'celestial_mountain',
    name: '天阙峰',
    description: '云雾缭绕的仙山，传说是远古仙人讲道之地。',
    minLevel: 10,
    spiritCost: 1500,
    rewards: [
      { type: 'spirit_stone', chance: 0.25, amount: [30, 60] },
      { type: 'herb', chance: 0.3, amount: [15, 25] },
      { type: 'cultivation', chance: 0.25, amount: [150, 300] },
      { type: 'pill_fragment', chance: 0.2, amount: [6, 10] }
    ]
  },
  // 金丹期地点
  {
    id: 'phoenix_valley',
    name: '凤凰谷',
    description: '常年被火焰环绕的神秘山谷，据说有凤凰遗留的道韵。',
    minLevel: 19,
    spiritCost: 2000,
    rewards: [
      { type: 'spirit_stone', chance: 0.25, amount: [50, 100] },
      { type: 'herb', chance: 0.3, amount: [20, 35] },
      { type: 'cultivation', chance: 0.25, amount: [250, 500] },
      { type: 'pill_fragment', chance: 0.2, amount: [8, 12] }
    ]
  },
  // 元婴期地点
  {
    id: 'dragon_abyss',
    name: '龙渊',
    description: '深不见底的神秘深渊，蕴含远古真龙的气息。',
    minLevel: 28,
    spiritCost: 3000,
    rewards: [
      { type: 'spirit_stone', chance: 0.25, amount: [80, 150] },
      { type: 'herb', chance: 0.3, amount: [30, 50] },
      { type: 'cultivation', chance: 0.25, amount: [400, 800] },
      { type: 'pill_fragment', chance: 0.2, amount: [10, 15] }
    ]
  },
  // 化神期地点
  {
    id: 'immortal_realm',
    name: '仙界入口',
    description: '传说中通往仙界的神秘之地，充满无尽机缘。',
    minLevel: 37,
    spiritCost: 5000,
    rewards: [
      { type: 'spirit_stone', chance: 0.25, amount: [150, 300] },
      { type: 'herb', chance: 0.3, amount: [50, 100] },
      { type: 'cultivation', chance: 0.25, amount: [800, 1500] },
      { type: 'pill_fragment', chance: 0.2, amount: [15, 20] }
    ]
  },
  // 渡劫期地点
  {
    id: 'celestial_palace',
    name: '凌霄宝殿',
    description: '传说中仙界最神圣的地方，只有最强大的修士才能进入。',
    minLevel: 45,
    spiritCost: 10000,
    rewards: [
      { type: 'spirit_stone', chance: 0.25, amount: [300, 600] },
      { type: 'herb', chance: 0.3, amount: [100, 200] },
      { type: 'cultivation', chance: 0.25, amount: [1500, 3000] },
      { type: 'pill_fragment', chance: 0.2, amount: [20, 30] }
    ]
  },
  // 仙人境地点
  {
    id: 'east_heaven',
    name: '西天灵山',
    description: '传说中西天灵山是佛门圣地，只有最虔诚的修士才能进入。',
    minLevel: 55,
    spiritCost: 20000,
    rewards: [
      { type: 'spirit_stone', chance: 0.25, amount: [600, 1200] },
      { type: 'herb', chance: 0.3, amount: [200, 400] },
      { type: 'cultivation', chance: 0.25, amount: [3000, 6000] },
      { type: 'pill_fragment', chance: 0.2, amount: [30, 40] }
    ]
  }
]

// 计算实际获取概率（考虑幸运值）
export const calculateRewardChance = (baseChance, luck = 1) => {
  return Math.min(baseChance * luck, 1) // 确保概率不超过100%
}