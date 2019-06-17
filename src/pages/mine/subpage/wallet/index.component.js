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
const { height, width } = Dimensions.get('window');
import Btn from './../../../components/button/index.component';
import List from './../../../components/list/index.component';
export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    toWithdraw = () => {
        this.props.navigation.push('withdraw', {
            data: { title: '收益提现' }
        })
    };

    render() {
        return (
            <View style={_style.contianer}>
                <View style={_style.headBox}>
                    <Text style={_style.value}>100</Text>
                    <Text style={_style.nametxt}>余额</Text>
                </View>
                <List
                    {...this.props}
                    data={[{ title: '提现记录', value: '', path: 'withdrawRecord', isTail: true }]}
                />
                <View style={_style.btnBox}>
                    <TouchableOpacity
                        style={_style.btn}
                        activeOpacity={0.5}
                        onPress={this.toWithdraw}

                    >
                        <Text style={_style.txt}>我要提现</Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}

const _style = StyleSheet.create({
    contianer: {
        // position: 'relative',
        width: width,
        height: height,
        backgroundColor: '#dcd8d84d',
    },
    headBox: {
        height: 120,
        backgroundColor: '#058efb',
        justifyContent: 'center',
        alignItems: 'center',
    },
    value: {
        color: '#fff',
        fontSize: 30,
        lineHeight: 40,
        fontWeight: '500',
    },
    nametxt: {
        color: '#fff'
    },
    btnBox: {
        position: 'absolute',
        left: 0,
        bottom: 80,
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        color: '#fff',
        fontSize: 16,
    },
    btn: {
        width: 200,
        height: 40,
        backgroundColor: '#058efb',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
    }
})