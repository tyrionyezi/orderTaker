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


    render() {
        return (
            <View style={_style.headerBox}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ height: 25, width: 25 }} source={require('./../../../../asset/¥.png')} />
                    <Text style={_style.tilteTxt}>{`金币：${10}`}</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ height: 25, width: 25 }} source={require('./../../../../asset/purse.png')} />
                    <Text style={_style.tilteTxt}>{`本金：${10}`}</Text>
                </View>
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