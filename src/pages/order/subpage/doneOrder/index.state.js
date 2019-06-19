import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../../../config/fetch';
import moment from 'moment';

class State {
    //导航传过来的参数
    userInfo = {};
    rootInfo = {
        wrap_type: 1,
    }
    initParams = (obj, wrap_type) => {
        this.rootInfo.wrap_type = wrap_type;
        this.orderStatus = 3;
    }
    //订单状态
    orderStatus = 3; //3审核状态 2订单已完成
    setTabIndex = (item) => {
        console.log(item, 'ddd')
        this.orderStatus = item.value;
        this.getHasOrderList();
    }

    @observable orderList = [];
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

    /**
     * 获取订单列表
     */
    getHasOrderList = (id) => {
        let url = 'orderHas';
        let params = {
            id: this.userInfo.id,
            wrap_type: this.rootInfo.wrap_type,
            status: this.orderStatus,
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
            if (this.rootInfo.wrap_type === 3) {
                data.push({
                    ...item,
                    title: item.shop_name,
                    value: item.charge,
                    isTail: true,
                    path: 'orderProgress'
                })
            } else {
                data.push({
                    ...item,
                    title: item.shop_name,
                    value: item.charge,
                    isTail: false,
                    path: 'orderProgress'
                })
            }
        })
        this.orderList = data;
    }
}
export default new State()