import { observable, action, toJS } from 'mobx';
import { StackActions, NavigationActions } from 'react-navigation';
import { Toast } from 'antd-mobile-rn';
import http from './../../config/fetch';
import moment from 'moment';

class State {
    @observable tel = '';
    @observable password = '';

    initParams = () => {
        storage.load({
            key: 'loginInfo',
            autoSync: false,
        }).then(res => {
            this.tel = res.tel;
            this.password = res.password;
        }).catch(err => {
            console.log('失败', err);
        })
    }

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
        let result = await http.post(url, params);
        if (result.success === 'true') {
            storage.save({
                key: 'loginInfo',
                data: result.info
            });
            Toast.success(`登陆成功`, 1, () => { }, true);
            return true
        } else {
            Toast.fail(`登陆失败，${result}`, 1, () => { }, true);
            return false
        }

    }


}
export default new State()