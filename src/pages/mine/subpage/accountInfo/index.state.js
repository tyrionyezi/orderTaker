import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import moment from 'moment';

class State {

    @observable userInfo = [
        {
            title: '头像',
            value: '',
            isTail: false,
        }, {
            title: 'Id',
            value: '',
            isTail: false,
        }, {
            title: '账号',
            value: '',
            isTail: false,
        }, {
            title: '账号密码',
            value: '',
            isTail: true,
            path: 'updatePassword',
        }, {
            title: '登录历史',
            value: '',
            isTail: false,
        }, {
            title: 'QQ账号',
            value: '',
            isTail: false,
        }, {
            title: '微信',
            value: '',
            isTail: false,
        },
    ];

    getUserInfo = () => {
        storage.load({
            key: 'userInfo'
        }).then(res => {
            console.log('成功', res);
            this.loadData(res);
        }).catch(err => {
            console.log('失败', err);
        })

    }

    loadData = (obj) => {
        let data = [
            {
                title: '头像',
                value: null,
                isTail: false,
            }, {
                title: 'Id',
                value: obj.tel,
                isTail: false,
            }, {
                title: '账号名',
                value: obj.name,
                isTail: false,
            }, {
                title: '账号密码',
                value: '',
                isTail: true,
                path: 'updatePassword',
            }, {
                title: '登录历史',
                value: '',
                isTail: false,
            }, {
                title: 'QQ账号',
                value: obj.qq,
                isTail: false,
            }, {
                title: '微信',
                value: obj.wx,
                isTail: false,
            },
        ]

        this.userInfo = data;

    }
}
export default new State()