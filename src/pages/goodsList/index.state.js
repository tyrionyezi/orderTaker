import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../config/fetch';
import moment from 'moment';

class State {

    userInfo = {};
    //初始化参数
    initParams = (type) => {
        this.tabIndex = 0;
        this.flagModal = false;
        this.allPlatformSet = {
            '0': [],
            '1': [],
            '2': [],
        };
        this.singleAccount = {
            '0': {},
            '1': {},
            '2': {},
        };
        this.currentPlatformAccount = {};
        this.rootInfo.wrap_type = type;
        this.getUserInfo();
    };

    getUserInfo = () => {
        storage.load({
            key: 'userInfo'
        }).then((res) => {
            this.userInfo = res;
            this.getAccountList();
        }).catch(err => {
            console.log(err)
        })
    }

    rootInfo = {
        wrap_type: 1,
        platform: 0,
    };

    @observable flagModal = false;

    @action switchModal = () => {
        this.flagModal = !this.flagModal;
    }

    singleAccount = {
        '0': {},
        '1': {},
        '2': {},
    }

    setSingleAccount = (index = 0, obj = {}) => {
        this.singleAccount[index] = obj;
        this.setCurrnetPlatformAccount();
    }

    setCurrentAccount = (index = 0, obj = {}) => {
        this.switchModal();
        this.singleAccount[index] = obj;
        this.setCurrnetPlatformAccount();
    }

    //当前平台的接单账号
    @observable currentPlatformAccount = {};

    /**
     * 设置当前平台接单账号
     */
    setCurrnetPlatformAccount = () => {
        this.currentPlatformAccount = this.singleAccount[this.tabIndex];
    }

    @observable dataList = [];
    getTaskList = () => {
        let url = 'getOrderList';
        let params = {
            wrap_type: this.rootInfo.wrap_type,
            platform: this.tabIndex,
        };
        http.post(url, params).then((res) => {
            let { data } = res;
            this.dataList = data;
        })
    }

    // 所有平台账号的数据
    allPlatformSet = {
        '0': [],
        '1': [],
        '2': [],
    }
    getAccountList = () => {
        let url = 'getBuyerList';
        let params = {
            id: this.userInfo.id
        }
        if (params.id === '') {
            return
        }
        http.post(url, params).then((res) => {
            let { data = [] } = res;
            console.log(res, 'resresresres')
            this.allPlatformSet = data;
            if (this.allPlatformSet['0'].length > 0) {
                this.setSingleAccount(0, this.allPlatformSet['0'][0])
            }

            if (this.allPlatformSet['1'].length > 0) {
                this.setSingleAccount(1, this.allPlatformSet['1'][0])
            }

            if (this.allPlatformSet['2'].length > 0) {
                this.setSingleAccount(2, this.allPlatformSet['2'][0])
            }
        })
    }

    @observable tabIndex = 0;
    @action tabChange = (item, index) => {
        this.tabIndex = item.value;
        this.setCurrnetPlatformAccount();
        this.getTaskList();
    }

    /**
     * 接单
     * @param
     */
    receiveOrder = (item) => {
        storage.load({
            key: 'userInfo',
        }).then((res) => {
            let url = 'orderReceiving';
            let params = {
                serial: item.serial,
                buyer: toJS(this.currentPlatformAccount).id,
                id: res.id,
            }
            if (params.id === '') {
                Toast.fail("请登录", 2, () => { }, true);
                return
            }
            if (params.buyer === '') {
                Toast.fail("请添加的买手信息", 2, () => { }, true);
                return
            }
            http.post(url, params).then((res) => {
                if (res === 'sucess') {
                    Toast.success("接单成功", 2, () => { }, true);
                    this.getTaskList();
                }
            })
        })
    }

}
export default new State()