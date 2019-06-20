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
} from 'react-native'
import { NoticeBar, Toast, Button } from 'antd-mobile-rn';
import { observer } from 'mobx-react';


@observer
export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    //提现

    getMoney = (data) => {
        this.props.navigation.push('wallet', {
            data: data
        })
    }


    render() {
        return (
            <View style={_style.headerBox}>
                <TouchableOpacity
                    style={{ alignItems: 'center' }}
                >
                    <Image style={{ height: 25, width: 25 }} source={require('./../../../../asset/¥.png')} />
                    <Text style={_style.tilteTxt}>{`金币：${0}`}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ alignItems: 'center' }}
                    onPress={this.getMoney.bind(this, { title: '本金提现' })}
                >
                    <Image style={{ height: 25, width: 25 }} source={require('./../../../../asset/purse.png')} />
                    <Text style={_style.tilteTxt}>{`本金：${0}`}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    headerBox: {
        height: 150,
        paddingTop: 80,
        backgroundColor: '#7f44f5',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    tilteTxt: {
        marginTop: 10,
        color: '#fff',
        fontSize: 18,
    }
})