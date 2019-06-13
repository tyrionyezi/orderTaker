import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../../../config/fetch';
import moment from 'moment';

class State {
    @observable dataList = [];
    /**
     * 获取买手账号列表
     */
    getBuyerList = () => {
        let url = 'getBuyerList';
        let params = {
            id: 20
        };
        http.post(url, params).then((res) => {
            console.log(res, 'resresres')
            let { data } = res;
            this.dataList = data;
        })
    }


}
export default new State()