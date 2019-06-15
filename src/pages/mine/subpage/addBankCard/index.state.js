import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../../../config/fetch';
import moment from 'moment';

class State {
    @observable name = null;
    @observable card = null;
    @observable depositBank = [];
    deposit = '';
    pic_bank = null;

    initParams = () => {
        this.name = null;
        this.card = null;
        this.depositBank = [];
        this.pic_bank = null;
    }

    nameChange = (value) => {
        this.name = value
    }

    cardChange = (value) => {
        this.card = value
    }

    depositChange = (arr = []) => {
        this.depositBank = arr;
        this.deposit = arr.length > 0 ? arr[0] : '';
    }

    /**
     * 获取银行卡照片
     */
    getBankCardPic = (data) => {
        this.pic_bank = data;
    }
    /**
     * 添加银行卡
     */
    addBank = async () => {
        let url = 'addBank';
        let params = {
            id: '',
            name: this.name,
            card: this.card,
            deposit: this.deposit,
            pic_bank: this.pic_bank,
        };
        storage.load({
            key: 'userInfo',
            // autoSync: false,
        }).then((res) => {
            params.id = res.id;
            if (params.name === null) {
                Toast.fail("请填写真实姓名", 2, () => { }, true);
                return
            }
            if (params.card === null) {
                Toast.fail("请填写银行卡", 2, () => { }, true);
                return
            }
            if (params.deposit === null) {
                Toast.fail("请选择开户行", 2, () => { }, true);
                return
            }
            if (params.pic_bank === null) {
                Toast.fail("请上传银行卡正面照片", 2, () => { }, true);
                return
            }
            console.log(params)
            http.post(url, params).then((result) => {
                console.log(result, 'result')
                // this.processData(result.data);
            });
        }).catch((err) => {
            console.log(err)
        })
    }


}
export default new State()