import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../../../config/fetch';

class State {
    userInfo = {};
    @observable recordList = [];
    @observable principal = 0;
    getUserInfo = () => {
        storage.load({
            key: 'userInfo'
        }).then((res) => {
            this.userInfo = res;
            this.getBalance(res.id);
        }).catch(err => {
            console.log(err)
        })
    }


    /**
     * 获取账户余额信息
     */

    getBalance = () => {
        let url = 'getUserInfo';
        let params = {
            id: this.userInfo.id,
        }
        http.post(url, params).then((res) => {
            let { data } = res;
            this.principal = data.balance;
        })
    }

    getRecordList = (id) => {
        let url = 'getAdvanceList';
        let params = {
            id: id,
        };
        http.post(url, params).then((res) => {
            let { data = [] } = res;
            this.recordList = data;
        })

    }
}

export default new State();