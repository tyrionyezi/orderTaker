import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ImageBackground,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
const { height, width } = Dimensions.get('window');
export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={_style.box}>
                <View style={_style.top}>
                    <View>
                        <Text style={[_style.fontColor, _style.label]}>我的金币</Text>
                        <Text style={[_style.fontColor, _style.value]}>18.33</Text>
                    </View>
                    <View>
                        <Text style={[_style.fontColor, _style.label, { textAlign: 'right' }]}>我的本金</Text>
                        <Text style={[_style.fontColor, _style.value, { textAlign: 'right' }]}>0</Text>
                    </View>
                </View>
                <View style={_style.bottom}>
                    <View>
                        <Text style={[_style.fontColor, _style.bottomTxt]}>{`今日预估收入：${0}`}</Text>
                        <Text style={[_style.fontColor, _style.bottomTxt]}>{`待完成总收入：${0}`}</Text>
                    </View>
                    <View>
                        <Text style={[_style.fontColor, _style.bottomTxt, { textAlign: 'right' }]}>{`未返本金：${0}`}</Text>
                        <Text style={[_style.fontColor, _style.bottomTxt, { textAlign: 'right' }]}>{`今日奖励：${1.3}`}</Text>
                    </View>
                </View>
            </View>
        )
    }
}


const _style = StyleSheet.create({
    box: {
        paddingTop: 50,
        height: 200,
        width: width,
        backgroundColor: "#7f44f5",
        flexDirection: 'column',
        paddingHorizontal: 15,
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    fontColor: {
        color: '#fff'
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
    },
    value: {
        marginTop: 10,
        fontSize: 30,
        fontWeight: '600'
    },
    bottom: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0,
        borderTopWidth: 1,
        borderTopColor: '#00BCD4',
    },
    bottomTxt: {
        lineHeight: 20,
        marginBottom: 5,
        fontSize: 14
    }
})