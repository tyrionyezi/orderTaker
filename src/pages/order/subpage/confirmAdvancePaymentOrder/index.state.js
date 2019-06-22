import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../../../config/fetch';
import NavigationService from './../../../../config/NavigationService';
import moment from 'moment';

class State {
    userIn = {}
    rootInfo = {}

    initParams = (data) => {
        this.rootInfo = data;
    }

    getUserInfo = () => {
        storage.load({
            key: 'userInfo'
        }).then((res) => {
            this.userInfo = res;
        }).catch(err => {
            console.log(err)
        })
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
            serial: this.rootInfo.data.serial,
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
        alipay_order: '',
        pic: '',
        fee: '',
    }

    //获取数据
    onChange = (value) => {
        this.formParams.pic = value;
    };

    @observable feeValue = '';
    //实际支付金额
    feeOnChange = (value) => {
        this.feeValue = value;
        this.formParams.fee = value;
    }
    @observable payOrder = '';
    payOrderOnChange = (value) => {
        this.payOrder = value;
        this.formParams.alipay_order = value;
    }

    /**
     * 完成订单
     */
    orderComplete = () => {
        let url = 'orderCompleteDF';
        let params = {
            id: this.userInfo.id,
            serial: this.rootInfo.data.serial,
            pic: this.formParams.pic,
            fee: this.formParams.fee,
            alipay_order: this.formParams.alipay_order,
        }
        if (params.serial === '') {
            Toast.info("该订单不存在", 2, () => { }, true);
            return
        }
        if (params.fee === '') {
            Toast.info("请填写实际垫付金额", 2, () => { }, true);
            return
        }
        if (params.alipay_order === '') {
            Toast.info("请填写支付宝商户订单号", 2, () => { }, true);
            return
        }

        http.post(url, params).then((res) => {
            if (res.status == 'success') {
                Toast.success("订单完成", 2, () => { }, true);
                NavigationService.back();
                this.rootInfo.refresh();
            } else {
                Toast.info(res.msg, 2, () => { }, true);
            }
        })
    }

}
export default new State()