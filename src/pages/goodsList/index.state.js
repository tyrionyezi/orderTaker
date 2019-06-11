import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../config/fetch';
import moment from 'moment';

class State {

    rootInfo = {
        wrap_type: 0,
        platform: 1,
    }

    initParams = () =>{
        this.tabIndex = 1;
        this.allPlatformSet = {
            '1': [],
            '2': [],
            '3': [], 
        }
    };

    @observable dataList = [];
    getOrderList = () => {
        let url = 'getOrderList';
        let params = {
            wrap_type: 1,
            type: 6,
        };
        // console.log(global.http);
        // return;
        http.post(url, params).then((res) => {
            console.log(res, 'resresres')
            let { data } = res;
            this.dataList = data;
        })
    }

    @observable allPlatformSet = {
        '1': [],
        '2': [],
        '3': [], 
    }

    classifyData = (arr = []) => {
        let data = {
            '1': [],
            '2': [],
            '3': [], 
        }
        arr.map((item,index) => {
            if(item.platform === '1') {
                data['1'].push(item)
            }else if(item.platform === '2') {
                data['2'].push(item)
            }else if(item.platform === '2') {
                data['3'].push(item)
            }
        })

        this.allPlatformSet = data;
    }
    @observable accountList = [];
    getAccountList = () => {
        let url = 'getBuyerList';
        let params = {
            id:20
        }
        if(params.id === '') {
            return
        }
        http.post(url, params).then((res) => {
            let { data = [] } = res;
            this.accountList = data;
            this.classifyData(data);
        })
    }

    @observable tabIndex = 1;
    @action tabChange = (item, index) => {
        this.tabIndex = item.value;
        this.getOrderList()
    }

    /**
     * 接单
     * @param
     */
    receiveOrder = (item) => {
        console.log(item, 'itemitemitem')
        let url = 'orderReceiving';
        let params = {
            serial: item.serial,
            buyer: toJS(this.allPlatformSet)[this.tabIndex][0].id,
            id: 20
        }
        if(params.id === '') {
            Toast.fail("请登录", 2, () => { }, true);
            return
        }
        http.post(url, params).then((res) => {
            if(res === 'sucess') {
                Toast.success("接单成功", 2, () => { }, true);
                this.getOrderList();
            }
        })
    }

}
export default new State()