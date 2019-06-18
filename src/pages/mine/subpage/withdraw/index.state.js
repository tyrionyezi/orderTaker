import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../../../config/fetch';

class State {
    userInfo = {};
    @observable flagModal = false;
    @observable amount = '';
    onChange = (value) => {
        let num = isNaN(value) ? '' : value;
        this.amount = num;
    }

    getUserInfo = () => {
        storage.load({
            key: 'userInfo'
        }).then((res) => {
            this.userInfo = res;
            this.getBankList(res.id);
        }).catch(err => {
            console.log(err)
        })
    }

    withdraw = () => {
        let url = 'addAdvance';
        let params = {
            user_id: this.userInfo.id,
            bank_id: toJS(this.currentbankAccount).card,
            balance: this.amount,
        }

        let remainder = params.balance % 100;
        if (params.balance < 100 || remainder !== 0) {
            Toast.info(`提现金额大于100且为100的整数`, 1, () => { }, true);
            return;
        }

        if (params.bank_id === '') {
            Toast.fail(`请绑定银行卡`, 1, () => { }, true);
            return;
        }
        if (params.balance) {

        }

        if (params.balance === '') {
            Toast.fail(`请出入转账金额`, 1, () => { }, true);
            return;
        }

        http.post(url, params).then((res) => {
            if (res.status === "success") {
                Toast.success(`提现成功`, 1, () => { }, true);
            } else {
                Toast.fail(`体现失败`, 1, () => { }, true);
            }
        })
    }

    /**
     * 获取银行卡列表
     */
    bankList = [];
    getBankList = (id) => {
        let url = 'getBankList';
        let params = {
            id: id
        }
        http.post(url, params).then((res) => {
            let { data } = res;
            this.bankList = this.progressData(data);
            if (this.bankList.length > 0) {
                this.setCurrentBankAccount(this.bankList[0], false)
            }
        })
    };

    progressData = (arr = []) => {
        let data = [];
        arr.map((item, index) => {
            data.push({
                ...item,
                title: item.deposit,
                value: item.card && item.card.toString().slice(-4),
                isTial: false
            })
        })
        return data;
    }

    @observable currentbankAccount = {};
    /**
     * 设置当前取款账户
     */
    setCurrentBankAccount = (obj = {}, flag) => {
        this.currentbankAccount = obj;
        if (flag) {
            this.switchModal();
        }
    }



    /**
     * 模太狂开关
     */
    switchModal = () => {
        this.flagModal = !this.flagModal;
    }
}

export default new State();