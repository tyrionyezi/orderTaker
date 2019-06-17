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

export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={_style.contanier}>
                <View style={_style.qrCodeBox}>
                    <View style={_style.box}></View>
                    <Text style={_style.txt}>在线微信</Text>
                </View>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    qrCodeBox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        marginTop: 100,
        width: 200,
        height: 200,
        backgroundColor: 'yellow',
    },
    txt: {
        color: 'gray',
        marginTop: 15,
    }
})