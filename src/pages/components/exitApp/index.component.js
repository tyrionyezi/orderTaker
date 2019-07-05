import React, { Component } from 'react'
import {
    Platform,
    ToastAndroid,
    BackHandler,
} from 'react-native'


function exitApp(WrappedComponent) {
    return class ExitApp extends Component {
        constructor(props) {
            super(props)
        }

        componentDidMount() {
            if (Platform.OS === 'android') {
                BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
            }
        }

        componentWillUnmount() {
            if (Platform.OS === 'android') {
                BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
            }
        }

        onBackAndroid = () => {
            //禁用返回键
            if (this.props.navigation.isFocused()) {//判断   该页面是否处于聚焦状态
                if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                    //最近2秒内按过back键，可以退出应用。
                    // return false;
                    BackHandler.exitApp();//直接退出APP
                } else {
                    this.lastBackPressed = Date.now();
                    ToastAndroid.show('再按一次退出应用', 1000);//提示
                    return true;
                }
            }
        }


        render() {
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }
}

export {
    exitApp
}