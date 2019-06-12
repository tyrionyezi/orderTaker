import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../../../config/fetch';
import moment from 'moment';

class State {
    initParams = (params) => {
        this.reqParams['platform'] = params.platform;
    }

    @observable orderList = [];


    /**
     * 获取订单列表
     */
    getOrderList = () => {
        let url = 'orderHas';
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