import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../../../config/fetch';
import moment from 'moment';

class State {
    //导航传过来的参数
    userInfo = {};
    rootInfo = {};
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

    @observable orderInfo = {};

    /**
     * 获取订单列表
     */
    getHasOrderList = () => {
        let url = 'orderDfCheck';
        let params = {
            serial: this.rootInfo.data.serial,
        };
        http.post(url, params).then((res) => {
            let { data } = res;
            this.orderInfo = data;
        })
    };


}
export default new State()