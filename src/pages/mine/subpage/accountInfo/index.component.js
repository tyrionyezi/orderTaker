import React, { Component } from 'react'
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
import { observer } from 'mobx-react';
import List from './../../../components/list/index.component';
import _state from './index.state'
@observer
export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    logout = () => {
        storage.remove({
            key: 'loginInfo'
        });
        this.props.navigation.replace('login');
    }

    componentDidMount() {
        _state.getUserInfo();
    }

    render() {
        let { userInfo } = _state;
        return (
            <View style={_style.container}>
                <List {...this.props} data={userInfo}></List>
                <TouchableOpacity
                    style={_style.logout}
                    activeOpacity={0.5}
                    onPress={this.logout}
                >
                    <View style={_style.logoutBtn}>
                        <Text style={_style.logoutTxt}>退出登录</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    container: {
        backgroundColor: '#dcd8d84d'
    },
    logout: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    logoutBtn: {
        marginTop: 50,
        width: 150,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFA000',
        lineHeight: 50,
        borderRadius: 10,
    },
    logoutTxt: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
    }
})