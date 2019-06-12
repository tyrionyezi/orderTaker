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

export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { title = '', value = '' } = this.props
        return (
            <View style={_style.box}>
                <View style={_style.leftBox}>
                    <Text style={_style.txt}>{title}</Text>
                </View>
                <View style={_style.rightBox}>
                    <Text style={_style.txt}>{value}</Text>
                </View>
            </View>
        )
    }
}


const _style = StyleSheet.create({
    box: {
        height: 40,
        paddingHorizontal: 15,
        backgroundColor: '#058efb',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    rightBox: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    txt: {
        color: '#fff',
        fontSize: 18,
        lineHeight: 30,
        fontWeight: '500',
    }
})