import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../../../config/fetch';
import moment from 'moment';

class State {
    addBank = [
        {
            title: '暂无银行卡',
            value: '添加',
            path: 'addbankCard',
            isTail: true,
        }
    ]
    @observable bankList = [];
    @observable name = '';
    @observable idCard = '';

    initParams = () => {
        this.bankList = [];
    }

    nameChange = (value) => {
        this.name = value
    }

    idCardChange = (value) => {
        this.idCard = value
    }
    getBankList = () => {
        let url = 'getBankList';
        let params = {
            id: '',
        };
        storage.load({
            key: 'userInfo',
            // autoSync: false,
        }).then((res) => {
            console.log(res, 'rererererer')
            params.id = res.id;
            if (params.id === '') {
                console.log('222')
                Toast.fail("请登录", 2, () => { }, true);
                return
            }
            http.post(url, params).then((result) => {
                let { data = [] } = result;
                this.processData(result.data);
            });
        }).catch((err) => {
            console.log(err)
        })
        // if (result === 'success') {
        //     Toast.success(`添加成功`, 1, () => { }, true);
        //     return true
        // } else {
        //     Toast.fail(`添加失败${result}`, 1, () => { }, true);
        //     return false
        // }
    }

    processData = (arr = []) => {
        console.log(arr, 'arr')
        if (arr.length === 0) this.bankList = [];
        let data = [];
        arr.map((item, index) => {
            data.push({
                ...item,
                title: item.deposit,
                value: item.card,
                isTail: false
            })
        })
        this.bankList = data;
    }


}
export default new State()