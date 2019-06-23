import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import NavigationService from './../../../../config/NavigationService';
import http from './../../../../config/fetch';

class State {
    userInfo = {};
    rootInfo = {};
    @observable flagModal = false;
    @observable amount = '';
    principal = 0;
    onChange = (value) => {
        let num = isNaN(value) ? '' : value;
        this.amount = num;
    }

    initParams = (data) => {
        this.rootInfo = data;
        this.currentbankAccount = {
            title: ''
        }
    }

    getUserInfo = () => {
        storage.load({
            key: 'userInfo'
        }).then((res) => {
            this.userInfo = res;
            this.getBankList(res.id);
            this.getBalance();
        }).catch(err => {
            console.log(err)
        })
    }

    /**
     * 获取账户余额信息
     */

    getBalance = () => {
        let url = 'getUserInfo';
        let params = {
            id: this.userInfo.id,
        }
        http.post(url, params).then((res) => {
            let { data } = res;
            this.principal = data.balance;
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
        if (params.balance > this.principal) {
            Toast.info(`提现金额不能大于账户余额`, 1, () => { }, true);
            return;
        }
        if (!params.bank_id || params.bank_id === '') {
            Toast.info(`请绑定银行卡`, 1, () => { }, true);
            return;
        }
        if (params.balance < 100 || remainder !== 0) {
            Toast.info(`提现金额大于100且为100的整数`, 1, () => { }, true);
            return;
        }

        if (params.balance === '') {
            Toast.info(`请出入转账金额`, 1, () => { }, true);
            return;
        }

        http.post(url, params).then((res) => {
            if (res.status === "success") {
                NavigationService.back();
                this.rootInfo.refresh();
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
            id: id,
            status: '1'
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

    @observable currentbankAccount = {
        title: ''
    };
    /**
     * 设置当前取款账户
     */
    setCurrentBankAccount = (obj = {}, flag) => {
        console.log(obj, flag, 'ggg')
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