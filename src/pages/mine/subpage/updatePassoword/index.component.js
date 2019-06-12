import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ImageBackground,
    FlatList,
    View,
    Text,
    Image,
    TouchableOpacity,
    AsyncStorage,
    Dimensions,
    NativeModules,
    DeviceEventEmitter,
    Alert
} from 'react-native';
import { List, InputItem, Toast } from 'antd-mobile-rn';
import Http from './../../../../config/fetch';
import Btn from './../../../components/button/index.component';
export default class Index extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        oldPwd: '',
        newPwd: '',
    }

    updatePassword = () => {
        let url = 'reset';
        let params = {
            old_password: this.state.oldPwd,
            new_password: this.state.newPwd,
        }
        if (!params.old_password || !params.new_password) {
            Toast.fail("不能为空", 2, () => { }, true)
            return
        }
        console.log(params, 'paramsparams')
        Http.post(url, params).then((res) => {
            console.log(res, 'rrrr')
        })
    }

    render() {
        return (
            <View style={_style.container}>
                <List>
                    <InputItem
                        clear
                        type="password"
                        value={this.state.oldPwd}
                        onChange={oldPwd => {
                            this.setState({
                                oldPwd,
                            });
                        }}
                        placeholder="请输入原始密码"
                    >
                        原密码
                        </InputItem>
                    <InputItem
                        clear
                        type="password"
                        value={this.state.newPwd}
                        onChange={newPwd => {
                            this.setState({
                                newPwd,
                            });
                        }}
                        placeholder="请输入新密码"
                    >
                        新密码
                        </InputItem>
                </List>

                <View style={_style.btnBox}>
                    <Btn
                        txt={"完成"}
                        onClick={this.updatePassword}
                    />
                </View>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        // paddingTop: 100,
    },
    btnBox: {
        marginTop: 50
    }
})