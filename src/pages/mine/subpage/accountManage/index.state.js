import { observable, action, toJS } from 'mobx';
import { Toast, Result } from 'antd-mobile-rn';
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
        storage.load({
            key: 'userInfo'
        }).then((res) => {
            let url = 'getBuyerList';
            let params = {
                id: res.id,
            };
            http.post(url, params).then((res) => {
                let { data } = res;
                this.progressData(data);
            })
        }).catch((err) => {
            console.log(err)
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

        this.dataList = [];
    }

    setCurrentListData = (item, index) => {
        this.tabIndex = item.value;
    }

    delete = (item) => {
        let url = 'deleteBuyer';
        let params = {
            id: item.id
        };
        http.post(url, params).then((res) => {
            let { data } = res;
            if (data.status === 'success') {
                Toast.success("删除成功", 2, () => { }, true);
                this.getBuyerList();
            } else {
                Toast.fail("删除失败", 2, () => { }, true);
            }
        })
    }

}
export default new State()