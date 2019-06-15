import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../../../config/fetch';
import moment from 'moment';

class State {
    @observable tabIndex = 0;
    initParams = () => {
        this.tabIndex = 0;
        this.dataList = [];
    }
    @observable dataList = [];
    /**
     * 获取买手账号列表
     */
    getBuyerList = () => {
        let url = 'getBuyerList';
        let params = {
            id: 20
        };
        http.post(url, params).then((res) => {
            let { data } = res;
            this.progressData(data);
        })
    }


    progressData = (obj = []) => {
        let data = [];
        for (i in obj) {
            let _arr = [];
            obj[i].map((item, index) => {
                _arr.push({
                    ...item,
                    title: item.name,
                    value: item.id,
                    path: 'updateAccount',
                    isTail: true
                })
            })
            data.push(_arr);
        }

        this.dataList = data;
    }

    setCurrentListData = (item, index) => {
        this.tabIndex = item.value;
    }

    delete = (item) => {
        console.log
    }
    test = () => {
        console.log('hhh')
    }

}
export default new State()