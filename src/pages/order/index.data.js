const flag = require('./../../asset/flag.png');
const states = require('./../../asset/stats.png');
const jinbi = require('./../../asset/jinbi.png');
const patreon = require('./../../asset/patreon-fill.png');

const card1Data = [
    {
        icon: flag,
        title: '未完成',
        value: '',
        path: 'GoodsList',
    }, {
        icon: states,
        title: '已完成',
        value: '',
        path: 'GoodsList',
    },
];

const card2Data = [
    {
        icon: jinbi,
        title: '未完成',
        value: '',
        path: 'GoodsList',
    }, {
        icon: patreon,
        title: '已完成',
        value: '',
        path: 'GoodsList',
    },
]

export {
    card1Data,
    card2Data
}