import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../../../config/fetch';
import moment from 'moment';

class State {
    rootInfo = {
        status: 1,
        wrap_type: 0,
    }
    initParams = (obj, wrap_type) => {
        this.rootInfo.status = obj.value
        this.rootInfo.wrap_type = wrap_type;
    }

    @observable orderList = [];

    /**
     * 获取订单列表
     */
    getHasOrderList = () => {
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
            console.log(res, 'reserere')
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