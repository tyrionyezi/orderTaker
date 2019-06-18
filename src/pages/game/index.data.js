const flag = require('./../../asset/flag.png');
const states = require('./../../asset/stats.png');
const jinbi = require('./../../asset/jinbi.png');
const patreon = require('./../../asset/patreon-fill.png');

const card1Data = [
    {
        icon: flag,
        title: '常规游戏',
        value: '',
        path: 'GoodsList',
    },
    // {
    //     icon: states,
    //     title: '活动游戏',
    //     value: '',
    //     path: 'GoodsList',
    // },
];

const card2Data = [
    {
        icon: jinbi,
        title: '优质游戏',
        value: '',
        path: 'GoodsList',
    },
    // {
    //     icon: patreon,
    //     title: '特别游戏',
    //     value: '',
    //     path: 'GoodsList',
    // },
]

export {
    card1Data,
    card2Data
}