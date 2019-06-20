import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../../../config/fetch';
import moment from 'moment';

class State {
    rootInfo = {
        serialNumber: '',
    }

    initParams = (data) => {
        this.rootInfo.serialNumber = data.serial;
    }

    //账户信息
    @observable acconutInfoList = [
        {
            title: '任务账号',
            value: '',
            isTail: false,
        }, {
            title: '订单ID',
            value: '',
            isTail: false,
        }, {
            title: '任务类型',
            value: '',
            isTail: false,
        }, {
            title: '搜索关键字',
            value: '',
            isTail: false,
        }, {
            title: '是否允许筛选',
            value: '',
            isTail: false,
        }, {
            title: '排序方式',
            value: '',
            isTail: false,
        }, {
            title: '收货人数',
            value: '',
            isTail: false,
        },
    ]


    /**
     * 获取订单详情
     */
    getOrderInfo = () => {
        let url = 'orderInfo';
        let params = {
            serial: this.rootInfo.serialNumber,
        }
        if (params.serial === '') {
            Toast.fail("该订单不存在", 2, () => { }, true);
            return
        }
        http.post(url, params).then((res) => {
            let { data = {} } = res;
            this.processOrderListData(data);
        })
    };

    //加工数据
    processOrderListData = (obj = []) => {
        let filterTxt = {
            '0': '否',
            '1': '是'
        }
        let sortTxt = {
            '0': '销量',
            '1': '综合',
            '2': '直通车'
        }
        let taskTxt = {
            '1': '手机淘宝/天猫任务(app下单)',
            '3': '手机京东任务',
            '5': '手机拼多多',
            '7': '手机淘宝/天猫浏览、收藏、加购物车',
            '9': '手机京东浏览、收藏、加购物车',
            '11': '手机拼多多浏览任务'
        }
        let data = [
            {
                title: '任务账号',
                value: obj.name,
                isTail: false,
            }, {
                title: '订单ID',
                value: obj.serial,
                isTail: false,
            }, {
                title: '任务类型',
                value: taskTxt[obj.type],
                isTail: false,
            }, {
                title: '搜索关键字',
                value: obj.commen_keywords,
                isTail: false,
            }, {
                title: '是否允许筛选',
                value: filterTxt[obj.filter],
                isTail: false,
            }, {
                title: '排序方式',
                value: sortTxt[obj.sort_style],
                isTail: false,
            }, {
                title: '收货人数',
                value: obj.receive_num,
                isTail: false,
            }, {
                title: '关键字确认',
                value: `${obj.keywords && obj.keywords.substring(0, 2)}***${obj.keywords && obj.keywords.slice(-2)}`,
                isTail: false,
            },
        ];
        this.acconutInfoList = data;
    }

    formParams = {
        keywords: '',
        shop_name: '',
        goods_url: '',
    }

    //获取数据
    onChange = (key, value) => {
        console.log(key, value);
        this.formParams[key] = value;
    };

    /**
     * 完成订单
     */
    orderComplete = () => {
        let url = 'orderComplete';
        let params = {
            serial: this.rootInfo.serialNumber,
            shop_name: this.formParams.shop_name,
            goods_url: this.formParams.goods_url,
            keywords: this.formParams.keywords,
        }
        if (params.serial === '') {
            Toast.fail("该订单不存在", 2, () => { }, true);
            return
        }
        if (params.keywords === '') {
            Toast.fail("请填写关键字", 2, () => { }, true);
            return
        }
        if (params.shop_name === '') {
            Toast.fail("请填写商店名称", 2, () => { }, true);
            return
        }
        if (params.goods_url === '') {
            Toast.fail("请填写商品链接", 2, () => { }, true);
            return
        }

        http.post(url, params).then((res) => {
            if (res.status == 'scuccess') {
                Toast.success("订单完成", 2, () => { }, true);
            } else {
                Toast.info("订单完成", 2, () => { }, true);
            }
        })
    }
}
export default new State()