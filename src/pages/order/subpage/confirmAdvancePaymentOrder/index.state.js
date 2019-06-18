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
                value: obj.type,
                isTail: false,
            }, {
                title: '搜索关键字',
                value: obj.keywords,
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