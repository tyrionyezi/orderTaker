import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import NavigationService from './../../../../config/NavigationService';
import http from './../../../../config/fetch';
import moment from 'moment';

class State {
    rootInfo = {};
    userInfo = {}
    @observable addFileds = {
        platform: '',
        name: '',
        sex: '',
        Ymd: '',
        credit: '',
        tag: '',
        serial: '',
        receiver_name: '',
        receiver_tel: '',
        address: '',
        street: '',
    }

    getUserInfo = () => {
        storage.load({
            key: 'userInfo'
        }).then((res) => {
            console.log('res', res)
            this.userInfo = res;
        }).catch(err => {
            console.log(err)
        })
    }

    initParams = (data) => {
        this.rootInfo = data;
        this.getUserInfo();
        this.addFileds = {
            platform: '',
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
    }

    reqParams = {
        id: '',
        name: '',
        platform: '',
        sex: '',
        Ymd: '',
        credit: '',
        tag: '',
        serial: '',
        receiver_name: '',
        receiver_tel: '',
        address: '',
        street: '',
    }

    @action setAddFiledsValue = (fileds, value) => {
        this.addFileds[fileds] = value;
        this.reqParams[fileds] = value;
        this.reqParams.id = this.userInfo.id;
        if (fileds === 'sex') {
            this.reqParams[fileds] = value[0];
        }
        if (fileds === 'credit') {
            this.reqParams[fileds] = value[0];
        }

        if (fileds === 'platform') {
            this.reqParams[fileds] = value[0];
        }

        if (fileds === 'address') {
            this.reqParams[fileds] = value.join(',');
        }

        if (fileds === 'Ymd') {
            this.reqParams[fileds] = moment(value).format('YYYY-MM-DD HH:MM:SS');
        }

    }


    addAccount = async () => {
        let url = 'addBuyer';
        let params = this.reqParams;
        if (params.platform === '') {
            Toast.fail("请选择平台", 2, () => { }, true);
            return
        }
        if (params.id === '') {
            Toast.fail("请登录", 2, () => { }, true);
            return
        }
        if (params.name === '') {
            Toast.fail("平台账号不能为空", 2, () => { }, true);
            return
        }
        if (params.Ymd === '') {
            Toast.fail("生日不能为空", 2, () => { }, true);
            return
        }
        if (params.serial === '') {
            Toast.fail("订单编号", 2, () => { }, true);
            return
        }
        if (params.receiver_name === '') {
            Toast.fail("收件人不能为空", 2, () => { }, true);
            return
        }
        if (params.receiver_tel === '') {
            Toast.fail("手机人电话不能为空", 2, () => { }, true);
            return
        }

        if (params.address === '') {
            Toast.fail("手机人电话不能为空", 2, () => { }, true);
            return
        }

        let result = await http.post(url, params);
        if (result === 'success') {
            Toast.success("添加成功", 2, () => { }, true);
            NavigationService.back();
            this.rootInfo.refresh();

        } else {
            Toast.info(`添加失败，${result}`, 2, () => { }, true);
        }

    };

}
export default new State()