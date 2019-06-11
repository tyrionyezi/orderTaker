import { observable, action, toJS } from 'mobx';
import http from './../../config/fetch';
import moment from 'moment';

class State {

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
            let { data } = res;
            this.dataList = data;
        })
    }

}
export default new State()