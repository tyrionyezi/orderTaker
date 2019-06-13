import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../../../config/fetch';
import moment from 'moment';

class State {
    @observable name = '';
    @observable idCard = '';

    nameChange = (value) => {
        this.name = value
    }

    idCardChange = (value) => {
        this.idCard = value
    }
    /**
     * 注册张账号
     */
    register = async () => {
        let url = 'register';
        let params = {
            name: this.name,
            idCard: this.idCard,
        };
        params.name = params.name.trim();
        params.idCard = params.idCard.trim();
        console.log(params, 'p')
        if (params.name === '') {
            Toast.fail("姓名不能为空", 2, () => { }, true);
            return
        }
        if (params.idCard === '') {
            Toast.fail("身份证号码", 2, () => { }, true);
            return
        }
        let result = await http.post(url, params);
        if (result === 'success') {
            Toast.success(`添加成功`, 1, () => { }, true);
            return true
        } else {
            Toast.fail(`添加失败${result}`, 1, () => { }, true);
            return false
        }
    }


}
export default new State()