// 境界名称配置
const realms = [
    '',
    // 练气期
    '练气一层', '练气二层', '练气三层', '练气四层', '练气五层',
    '练气六层', '练气七层', '练气八层', '练气九层',
    // 筑基期
    '筑基一层', '筑基二层', '筑基三层', '筑基四层', '筑基五层',
    '筑基六层', '筑基七层', '筑基八层', '筑基九层',
    // 金丹期
    '金丹一层', '金丹二层', '金丹三层', '金丹四层', '金丹五层',
    '金丹六层', '金丹七层', '金丹八层', '金丹九层',
    // 元婴期
    '元婴一层', '元婴二层', '元婴三层', '元婴四层', '元婴五层',
    '元婴六层', '元婴七层', '元婴八层', '元婴九层',
    // 化神期
    '化神一层', '化神二层', '化神三层', '化神四层', '化神五层',
    '化神六层', '化神七层', '化神八层', '化神九层',
    // 返虚期
    '返虚一层', '返虚二层', '返虚三层', '返虚四层', '返虚五层',
    '返虚六层', '返虚七层', '返虚八层', '返虚九层',
    // 合体期
    '合体一层', '合体二层', '合体三层', '合体四层', '合体五层',
    '合体六层', '合体七层', '合体八层', '合体九层',
    // 大乘期
    '大乘一层', '大乘二层', '大乘三层', '大乘四层', '大乘五层',
    '大乘六层', '大乘七层', '大乘八层', '大乘九层',
    // 渡劫期
    '渡劫一层', '渡劫二层', '渡劫三层', '渡劫四层', '渡劫五层',
    '渡劫六层', '渡劫七层', '渡劫八层', '渡劫九层',
    // 仙人境
    '仙人一品', '仙人二品', '仙人三品', '仙人四品', '仙人五品',
    '仙人六品', '仙人七品', '仙人八品', '仙人九品',
    // 真仙境
    '真仙一品', '真仙二品', '真仙三品', '真仙四品', '真仙五品',
    '真仙六品', '真仙七品', '真仙八品', '真仙九品',
    // 金仙境
    '金仙一品', '金仙二品', '金仙三品', '金仙四品', '金仙五品',
    '金仙六品', '金仙七品', '金仙八品', '金仙九品',
    // 太乙境
    '太乙一重', '太乙二重', '太乙三重', '太乙四重', '太乙五重',
    '太乙六重', '太乙七重', '太乙八重', '太乙九重',
    // 大罗境
    '大罗一重', '大罗二重', '大罗三重', '大罗四重', '大罗五重',
    '大罗六重', '大罗七重', '大罗八重', '大罗九重'
]

// 境界等级映射
const REALM_LEVELS = {
    '练气': 1,
    '筑基': 2,
    '金丹': 3,
    '元婴': 4,
    '化神': 5,
    '炼虚': 6,
    '合体': 7,
    '大乘': 8,
    '渡劫': 9,
    '仙人': 10
}

// 获取境界等级
function getRealmLevel(realmName) {
    return realms[realmName] || 0
}

// 获取境界名称
function getRealmName(level) {
    return getRealmLevel(level)
}

// 导出
export {
    REALM_LEVELS,
    getRealmLevel,
    getRealmName
}