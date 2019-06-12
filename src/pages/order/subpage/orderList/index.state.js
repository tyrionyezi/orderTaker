import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../../../config/fetch';
import moment from 'moment';

class State {
    rootInfo = {
        status: 1,
        wrap_type: 1,
    }
    initParams = (obj, wrap_type) => {
        console.log(obj, wrap_type)
        this.rootInfo.status = obj.value
        this.rootInfo.wrap_type = wrap_type;
    }

    @observable orderList = [];

    /**
     * 获取订单列表
     */
    getHasOrderList = () => {
        Toast.fail("开始", 1, () => { }, true);
        let url = 'orderHas';
        let params = {
            id: 20,
            wrap_type: this.rootInfo.wrap_type,
            status: this.rootInfo.status,
        };
        if (params.id === '') {
            Toast.fail("请登录", 2, () => { }, true);
            return
        }
        http.post(url, params).then((res) => {
            let { data = [] } = res;
            Toast.fail(data.length, 1, () => { }, true);
            Toast.fail("结束", 1, () => { }, true);
            this.processOrderListData(data);
        })
    };

    //加工数据
    processOrderListData = (arr = []) => {
        let data = [];
        arr.map((item, index) => {
            if (this.rootInfo.wrap_type === 0) {
                data.push({
                    ...item,
                    title: item.shop_name,
                    value: item.charge,
                    isTail: true,
                    path: 'advancePaymentOrderDetail'
                })
            } else {
                data.push({
                    ...item,
                    title: item.shop_name,
                    value: item.charge,
                    isTail: true,
                    path: 'browseOrderDetail'
                })
            }
        })
        this.orderList = data;
    }
}
export default new State()