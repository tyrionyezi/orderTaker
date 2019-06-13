import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../config/fetch';
import moment from 'moment';

class State {
    @observable dataList = [];

    @observable tel = '';
    @observable password = '';
    @observable name = '';
    @observable email = '';


    telChange = (value) => {
        this.tel = value
    }

    pwdChange = (value) => {
        this.password = value;
    }

    nameChange = (value) => {
        this.name = value
    }

    emailChange = (value) => {
        this.email = value
    }
    /**
     * 注册张账号
     */
    register = async () => {
        let url = 'register';
        let params = {
            tel: this.tel,
            password: this.password,
            name: this.name,
            email: this.email
        };
        params.tel = params.tel.trim();
        params.password = params.password.trim();
        params.name = params.name.trim();
        params.email = params.email.trim();
        console.log(params, 'p')
        if (params.tel === '') {
            Toast.fail("手机号不能为空", 2, () => { }, true);
            return
        }
        if (params.name === '') {
            Toast.fail("账户名不能为空", 2, () => { }, true);
            return
        }
        if (params.password === '') {
            Toast.fail("密码不能为空", 2, () => { }, true);
            return
        }
        let result = await http.post(url, params);
        if (result === 'success') {
            Toast.fail(`注册成功，${result}`, 1, () => { }, true);
            return true
        } else {
            Toast.fail(`注册失败，${result}`, 1, () => { }, true);
            return false
        }
    }


}
export default new State()