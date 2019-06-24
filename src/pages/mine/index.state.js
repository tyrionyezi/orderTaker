import { observable, action, toJS } from 'mobx';
import http from './../../config/fetch';
import { Toast } from 'antd-mobile-rn';
import moment from 'moment';

class State {

    @observable userInfo = {};
    @observable headInfo = {};

    getUserInfo = () => {
        storage.load({
            key: 'userInfo'
        }).then(res => {
            console.log('成功', res);
            this.userInfo = res;
            this.getAccountInfo();
        }).catch(err => {
            console.log('失败', err);
        })

    }

    getAccountInfo = () => {
        let url = 'getUserInfo';
        let params = {
            id: this.userInfo.id,
        }
        http.post(url, params).then((res) => {
            let { data } = res;
            this.headInfo = data;
        })

    }
}
export default new State()