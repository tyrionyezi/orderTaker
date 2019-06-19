import { observable, action, toJS } from 'mobx';
import { Toast, Result } from 'antd-mobile-rn';
import http from './../../../../config/fetch';
import moment from 'moment';

class State {
    userInfo = {};
    rootInfo = {
        status: 1,
        wrap_type: 1,
    }
    initParams = (obj, wrap_type) => {
        this.rootInfo.status = obj.status;
        this.rootInfo.wrap_type = wrap_type;
    }

    getUserInfo = () => {
        storage.load({
            key: 'userInfo'
        }).then((res) => {
            this.userInfo = res;
            this.getHasOrderList();
        }).catch(err => {
            console.log(err)
        })
    }

    @observable orderList = [];

    /**
     * 获取订单列表
     */
    getHasOrderList = () => {
        let url = 'orderHas';
        let params = {
            id: this.userInfo.id,
            wrap_type: this.rootInfo.wrap_type,
            status: this.rootInfo.status,
        };
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
            if (this.rootInfo.wrap_type === 0) {
                data.push({
                    ...item,
                    title: item.shop_name,
                    value: item.charge,
                    isTail: true,
                    path: 'confirmAdvancePaymentOrder'
                })
            } else {
                data.push({
                    ...item,
                    title: item.shop_name,
                    value: item.charge,
                    isTail: true,
                    path: 'confirmBrowseOrder'
                })
            }
        })
        this.orderList = data;
    }

    cancelOrder = (item) => {
        let url = 'orderOff';
        let params = {
            serial: item.serial,
        }
        http.post(url, params).then((res) => {
            if (res.status === 'success') {
                Toast.success(res.msg, 2, () => { }, true);
                this.getHasOrderList();
            } else {
                Toast.success(res.msg, 2, () => { }, true);
            }

        })
    }
}
export default new State()