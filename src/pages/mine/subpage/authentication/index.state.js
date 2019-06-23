import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile-rn';
import http from './../../../../config/fetch';
import moment from 'moment';
import storage from '../../../../config/storage';

class State {
    userId = '';
    userInfo = {};
    @observable name = null;
    @observable idCard = null;
    @observable idCardStatus = null;
    @observable pic_front = null;
    @observable pic_back = null;
    @observable desc = null;

    statusTxt = {
        '0': '未添加',
        '1': '待审核',
        '2': '审核通过',
        '3': '审核未通过',
    }

    initParams = () => {
        this.name = null;
        this.idCard = null;
        this.idCardStatus = null;
        this.pic_front = null;
        this.pic_back = null;
    }

    getUserInfo = () => {
        storage.load({
            key: 'userInfo'
        }).then((res) => {
            this.userInfo = res;
        }).catch(err => {
            console.log(err)
        })
    }

    getIdCardFrontPic = (data) => {
        this.pic_front = data;
    }

    getIdCardBackPic = (data) => {
        this.pic_back = data;
    }

    nameChange = (value) => {
        this.name = value
    }

    idCardChange = (value) => {
        this.idCard = value
    }
    /**
     * 获取是否认证情况
     */
    getCertificationList = () => {
        let url = 'getCertificationList';
        let params = {
            id: '',
        };
        storage.load({
            key: 'userInfo',
        }).then((res) => {
            params.id = res.id;
            if (params.id === '') {
                Toast.fail("请登录", 2, () => { }, true);
                return
            }
            http.post(url, params).then((result) => {
                let { data = {} } = result;
                if (data.status !== 0) {
                    this.name = data.name;
                    this.idCard = data.card;
                    this.idCardStatus = data.status;
                    this.pic_front = data.pic_front;
                    this.pic_back = data.pic_back;
                    this.desc = data.desc;
                } else {
                    this.idCardStatus = data.status;
                }
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


    /**
     * 添加身份认证
     */
    addCertification = () => {
        let url = 'addCertification';
        let params = {
            id: null,
            name: this.name,
            card: this.idCard,
            pic_front: this.pic_front,
            pic_back: this.pic_back
        }

        storage.load({
            key: 'userInfo',
        }).then((res) => {
            params.id = res.id;
            if (params.card === null) {
                Toast.fail("请输入身份证号", 2, () => { }, true);
                return
            }
            if (params.id === null) {
                Toast.fail("请登录", 2, () => { }, true);
                return
            }
            if (params.pic_front === null) {
                Toast.fail("请上传身份证正面照片", 2, () => { }, true);
                return
            }
            if (params.pic_back === null) {
                Toast.fail("请上传身份证背面照片", 2, () => { }, true);
                return
            }
            http.post(url, params).then((result) => {
                let data = result;
                if (data.status === 'success') {
                    this.getCertificationList();
                    Toast.success(`上传成功`, 1, () => { }, true);
                    return true;
                } else {
                    Toast.info(`添加失败`, 1, () => { }, true);
                    return false;
                }
            });
        }).catch((err) => {
            console.log(err)
        })
    }


}
export default new State()