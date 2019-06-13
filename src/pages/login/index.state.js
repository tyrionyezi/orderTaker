import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../config/fetch';
import moment from 'moment';

class State {
    @observable dataList = [];

    @observable tel = '';
    @observable password = '';

    telChange = (value) => {
        this.tel = value
    }

    pwdChange = (value) => {
        this.password = value;
    }
    /**
     * 获取买手账号列表
     */
    login = async () => {
        let url = 'login';
        let params = {
            tel: this.tel,
            password: this.password,
        };
        params.tel = params.tel.trim();
        params.password = params.password.trim();
        if (params.tel === '') {
            Toast.fail("手机号不能为空", 2, () => { }, true);
            return
        }
        if (params.password === '') {
            Toast.fail("密码不能为空", 2, () => { }, true);
            return
        }
        console.log(params, '12313212');
        let result = await http.post(url, params);
        if (result !== 'success') {
            return true
        }

    }


}
export default new State()