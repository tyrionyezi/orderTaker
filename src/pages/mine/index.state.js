import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import moment from 'moment';

class State {

    @observable userInfo = {};

    getUserInfo = () => {
        storage.load({
            key: 'userInfo'
        }).then(res => {
            console.log('成功', res);
            this.userInfo = res;
        }).catch(err => {
            console.log('失败', err);
        })

    }
}
export default new State()