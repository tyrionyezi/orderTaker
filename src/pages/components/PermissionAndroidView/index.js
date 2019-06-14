import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ToastAndroid,
    PermissionsAndroid,
} from 'react-native';
// import RootStore from "../../config/stores";

// const { initState } = RootStore;

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.requestMultiplePermission.bind(this);
    }

    show(data) {
        ToastAndroid.show(data, ToastAndroid.SHORT)
    }

    componentDidMount() {
        setTimeout(() => {
            this.requestMultiplePermission();
        }, 2000)
    }

    /*
    * 弹出提示框向用户请求某项权限。返回一个promise，最终值为用户是否同意了权限申请的布尔值。
    * 其中rationale参数是可选的，其结构为包含title和message)的对象。
    * 此方法会和系统协商，是弹出系统内置的权限申请对话框，
    * 还是显示rationale中的信息以向用户进行解释。
    * */
    async requestReadPermission() {
        try {
            //返回string类型
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    //第一次请求拒绝后提示用户你为什么要这个权限
                    'title': '需要读写权限',
                    'message': '没权限不能运行，同意就好了'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.show("已获取了读写权限")
            } else {
                this.show("获取读写权限失败")
            }
        } catch (err) {
            this.show(err.toString())
        }
    }

    async requestCarmeraPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    //第一次请求拒绝后提示用户你为什么要这个权限
                    'title': '我要相机权限',
                    'message': '没权限我不能工作，同意就好了'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.show("你已获取了相机权限")
            } else {
                this.show("获取相机失败")
            }
        } catch (err) {
            this.show(err.toString())
        }
    }

    async requestLocationPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    //第一次请求拒绝后提示用户你为什么要这个权限
                    'title': '我要地址查询权限',
                    'message': '没权限我不能工作，同意就好了'
                }
            )

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.show("你已获取了地址查询权限")
            } else {
                this.show("获取地址查询失败")
            }
        } catch (err) {
            this.show(err.toString())
        }
    }

    checkPermission() {
        try {
            //返回Promise类型
            const granted = PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
            )
            granted.then((data) => {
                this.show("是否获取读写权限" + data)
            }).catch((err) => {
                this.show(err.toString())
            })
        } catch (err) {
            this.show(err.toString())
        }
    }

    async requestMultiplePermission() {
        try {
            const permissions = [
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                PermissionsAndroid.PERMISSIONS.CAMERA
            ]
            //返回得是对象类型
            const granteds = await PermissionsAndroid.requestMultiple(permissions)
            let data = "是否同意地址权限: "
            if (granteds["android.permission.ACCESS_FINE_LOCATION"] === "granted") {
                data = data + "是\n"
            } else {
                data = data + "否\n"
            }
            data = data + "是否同意相机权限: "
            if (granteds["android.permission.CAMERA"] === "granted") {
                data = data + "是\n"
            } else {
                data = data + "否\n"
            }
            data = data + "是否同意存储权限: "
            if (granteds["android.permission.WRITE_EXTERNAL_STORAGE"] === "granted") {
                data = data + "是\n"
            } else {
                data = data + "否\n"
            }
            // if (this.props.isHome) {
            //     setTimeout(() => {
            //         if(!initState.isCodePush){
            //             initState.isCodePush = false;
            //             setTimeout(()=>{
            //                 initState.isCodePush = true;
            //             },1000)
            //         }
            //     }, 1000);
            // }
            // this.show(data)
        } catch (err) {
            //this.show(err.toString())
        }
    }

    render() {
        return null
    }

}