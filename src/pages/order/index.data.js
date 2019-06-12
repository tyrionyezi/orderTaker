const flag = require('./../../asset/flag.png');
const states = require('./../../asset/stats.png');
const jinbi = require('./../../asset/jinbi.png');
const patreon = require('./../../asset/patreon-fill.png');

const card1Data = [
    {
        icon: flag,
        title: '未完成',
        value: 1,
        path: 'orderList',
    }, {
        icon: states,
        title: '已完成',
        value: 2,
        path: 'GoodsList',
    },
];

const card2Data = [
    {
        icon: jinbi,
        title: '未完成',
        value: '1',
        path: 'GoodsList',
    }, {
        icon: patreon,
        title: '已完成',
        value: '2',
        path: 'GoodsList',
    },
]


const stepsData = [
    {
        title: '第一步 进店关键字点击查看示例',
        txt: '手动输入搜索关键字，关键字不可自行修改，按照要求筛选搜索条件，请勿随意增增加索条件，找到目标商品浏览五分钟，复制并分享链接'
    }, {
        title: '第二步 浏览店铺',
        txt: '根据主图，价格，找到目标商品，点击进入商铺，浏览商铺内2个以上商品，至少1分钟复制上传分享链接，找到目标商品，从上到下至少浏览3分钟，在目标商品详情中找到以下答案'
    }
]

export {
    card1Data,
    card2Data,
    stepsData
}