import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import NavigationService from './../../../../config/NavigationService';
import http from './../../../../config/fetch';
import moment from 'moment';

class State {
    rootInfo = {};
    @observable addFileds = {
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

    initParams = (params) => {
        this.rootInfo = params;
    }

    back = () => {
        this.rootInfo.refresh();
        NavigationService.pop();
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
        receiver_tel: '',
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

    /**
     * 获取买手信息
     */
    buyerInfo = {};
    getBuyerInfo = () => {
        let url = 'getBuyerInfo';
        let params = {
            id: this.rootInfo.data.id,
        }

        http.post(url, params).then((res) => {
            let { data = {} } = res;
            this.buyerInfo = data;
            let obj = {
                name: data.name,
                sex: [`${data.sex}`],
                Ymd: data.Ymd && new Date(moment(data.Ymd)),
                credit: '',
                tag: '',
                serial: data.serial,
                receiver_name: data.receiver_name,
                receiver_tel: data.receiver_tel,
                address: data.address && data.address.split(','),
                street: data.street,
            }

            this.reqParams = data;
            this.addFileds = obj;
        })
    }


    /**
     * 更新买手信息
     */
    updateBuyer = async () => {
        let url = 'updateBuyer';
        let params = this.reqParams;
        params.id = this.buyerInfo.id;
        params.name = this.buyerInfo.name;
        let result = await http.post(url, params);

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

        if (result.status === 'success') {
            NavigationService.pop();
            this.rootInfo.refresh();
            Toast.success("修改成功", 2, () => { }, true);
        } else {
            Toast.success(`添加失败，${result}`, 2, () => { }, true);
            return false;
        }

    };

}
export default new State()