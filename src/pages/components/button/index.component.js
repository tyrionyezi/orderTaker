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

    onClick = () => {
        if (!!this.props.onClick) {
            this.props.onClick()
        }
    }

    render() {
        let txt = this.props.txt || '确认';
        return (
            <View style={_style.btnBox}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={_style.btn}
                    onPress={this.onClick}
                >
                    <Text style={_style.btnTxt}>{txt}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    btnBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    btn: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 30,
        backgroundColor: '#03a9f4c2',
        minWidth: 150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTxt: {
        color: '#fff',
        fontSize: 18,
        lineHeight: 30,
    },
})