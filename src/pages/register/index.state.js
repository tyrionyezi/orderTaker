import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../config/fetch';
import moment from 'moment';

class State {
    @observable dataList = [];

    @observable tel = '';
    @observable password = '';
    @observable password1 = '';
    @observable name = '';
    @observable email = '';


    telChange = (value) => {
        this.tel = value
    }

    pwdChange = (value) => {
        this.password = value;
    }

    pwdChange1 = (value) => {
        this.password1 = value;
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
        if (this.password !== this.password1) {
            Toast.info("两次密码不相同", 2, () => { }, true);
            return
        }
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
        if (params.tel === '') {
            Toast.info("手机号不能为空", 2, () => { }, true);
            return
        }
        if (params.name === '') {
            Toast.info("账户名不能为空", 2, () => { }, true);
            return
        }
        if (params.password === '') {
            Toast.fail("密码不能为空", 2, () => { }, true);
            return
        }
        let result = await http.post(url, params);
        if (result === 'success') {
            Toast.success(`注册成功`, 1, () => { }, true);
            return true
        } else {
            Toast.fail(`注册失败，${result}`, 1, () => { }, true);
            return false
        }
    }


}
export default new State()