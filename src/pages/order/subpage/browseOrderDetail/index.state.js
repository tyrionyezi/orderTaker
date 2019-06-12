import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../../../config/fetch';
import moment from 'moment';

class State {
    initParams = (params) => {
        this.reqParams['platform'] = params.platform;
    }

    @observable orderList = [];

    //账户信息
    acconutInfoList = [
        {
            title: '任务账号',
            value: '12312',
            isTail: false,
        }, {
            title: '订单ID',
            value: '12312',
            isTail: false,
        }, {
            title: '任务类型',
            value: 'ww',
            isTail: false,
        }, {
            title: '搜索关键字',
            value: '12312',
            isTail: false,
        }, {
            title: '是否允许筛选',
            value: '12312',
            isTail: false,
        }, {
            title: '排序方式',
            value: '12312',
            isTail: false,
        }, {
            title: '收货人数',
            value: '12312',
            isTail: false,
        },
    ]


    /**
     * 获取订单列表
     */
    getOrderList = () => {
        let url = 'orderInfo';
        let params = this.reqParams;
        if (params.id === '') {
            Toast.fail("请登录", 2, () => { }, true);
            return
        }
        http.post(url, params).then((res) => {
            let { data = [] } = res;
            this.processOrderListData(data);
        })
    };

    //加工数据
    processOrderListData = (arr = []) => {
        let data = [];
        arr.map((item, index) => {
            data.push({
                title: item,
                value: '',
                isTail: true,
                path: 'orderList'
            })
        })
        this.orderList = data;
    }
}
export default new State()