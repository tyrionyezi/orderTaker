import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../config/fetch';
import moment from 'moment';

class State {
    @observable addFileds = {
        name: '',
        sex: '',
        Ymd: '',
        credit: '',
        tag: '',
        serial: '',
        receiver_name: '',
        recevier_tel: '',
        address: '',
        street: '',
    }

    initParams = (params) => {
        this.reqParams['platform'] = params.platform;
    }

    reqParams = {
        id: '20',
        name: '',
        platform: '',
        sex: '',
        Ymd: '',
        credit: '',
        tag: '',
        serial: '',
        receiver_name: '',
        recevier_tel: '',
        address: '',
        street: '',
    }

    @action setAddFiledsValue = (fileds, value) => {
        this.addFileds[fileds] = value;
        this.reqParams[fileds] = value;
        if (fileds === 'sex') {
            this.reqParams[fileds] = value[0];
        }
        if (fileds === 'credit') {
            this.reqParams[fileds] = value[0];
        }
    }


    addAccount = async () => {
        let url = 'addBuyer';
        let params = this.reqParams;
        console.log(params)
        if (params.id === '') {
            Toast.fail("请登录", 2, () => { }, true);
            return
        }
        if (params.name === '') {
            Toast.fail("平台账号不能为空", 2, () => { }, true);
            return
        }
        let result = await http.post(url, params);
        if (result === 'success') {
            Toast.success("添加成功", 2, () => { }, true);
            return true;
        } else {
            Toast.success(`添加失败，${result}`, 2, () => { }, true);
            return false;
        }

    };

}
export default new State()