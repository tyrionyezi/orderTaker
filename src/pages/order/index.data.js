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
        path: 'doneOrder',
        navTitle: '浏览已完成',
    },
];

const card2Data = [
    {
        icon: jinbi,
        title: '未完成',
        value: '1',
        path: 'orderList',
    }, {
        icon: patreon,
        title: '已完成',
        value: '2',
        path: 'doneOrder',
        navTitle: '垫付已完成',
    },
]


const stepsData = [
    {
        title: '第一步 进店关键字点击查看示例',
        txt: '手动输入搜索关键字，关键字不可自行修改，按照要求筛选搜索条件，请勿随意增增加索条件，找到目标商品浏览五分钟，复制并分享链接',
        label: '关键字',
        placeholder: '请输入关键字',
        fileds: 'keywords',
    }, {
        title: '第二步 浏览店铺',
        txt: '根据主图，价格，找到目标商品，点击进入商铺，浏览商铺内2个以上商品，至少1分钟复制上传分享链接，找到目标商品，从上到下至少浏览3分钟，在目标商品详情中找到以下答案',
        label: '店铺名称',
        placeholder: '请输入店铺名称',
        fileds: 'shop_name'
    }, {
        title: '第三步 店铺商品',
        txt: '',
        label: '商品链接',
        placeholder: '请输入商品链接',
        fileds: 'goods_url'
    }
]

const progressData = [
    {
        title: '任务信息',
        value: '2019/06/15',
        status: true,
        info: [
            {
                title: 'ID',
                value: '123123123',
            }, {
                title: '账号名称',
                value: '章三',
            }, {
                title: '金额',
                value: '100',
            }
        ]
    }, {
        title: '订单付款',
        value: '未完成',
        status: false,
        info: [
            {
                title: '',
                value: '支付宝商户订单号',
            }
        ]
    }, {
        title: '商家发货',
        value: '未完成',
        status: false,
        info: [
            {
                title: '返还金额',
                value: '0',
            }, {
                title: '',
                value: '500分级以上好评后立即返回，500以下48小时内返还退款，申诉中的订单不能催返款',
            },
        ]
    }, {
        title: '收货好评',
        value: '未完成',
        status: false,
        info: [
            {
                title: '返还金额',
                value: '0',
            }, {
                title: '',
                value: '500分级以上好评后立即返回，500以下48小时内返还退款，申诉中的订单不能催返款',
            },
        ]
    }, {
        title: '商家验收',
        value: '未完成',
        status: false,
        info: [
            {
                title: '获取佣金',
                value: '0',
            }, {
                title: '',
                value: '平台规定好评后48小时后返佣',
            },
        ]
    },
]

export {
    card1Data,
    card2Data,
    stepsData,
    progressData
}