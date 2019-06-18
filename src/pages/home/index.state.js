import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import moment from 'moment';
import http from './../../config/fetch';

class State {



    @observable userInfo = {
        cion: 0,
        principal: 0,
    }


    /**
     * 获取账户余额信息
     */
    getUserInfo = () => {
        storage.load({
            key: 'userInfo'
        }).then(res => {
            console.log('成功', res);
            let url = 'getUserInfo';
            let params = {
                id: res.id,
            }
            http.post(url, params).then((res) => {
                let { data } = res;
                this.principal = data.balance;
            })
        }).catch(err => {
            console.log('失败', err);
        })

    }
}
export default new State()