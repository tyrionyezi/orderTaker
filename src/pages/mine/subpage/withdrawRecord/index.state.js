import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../../../config/fetch';

class State {
    userInfo = {};
    @observable recordList = [];

    getUserInfo = () => {
        storage.load({
            key: 'userInfo'
        }).then((res) => {
            this.userInfo = res;
            this.getRecordList(res.id);
        }).catch(err => {
            console.log(err)
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